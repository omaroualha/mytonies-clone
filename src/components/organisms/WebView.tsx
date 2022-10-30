import { uiFixesApp } from "@/utils/WebviewUIFixes";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useRef, useState } from "react";
import WebView from "react-native-webview";
import {
  ShouldStartLoadRequest,
  WebViewMessageEvent,
  WebViewNativeEvent,
} from "react-native-webview/lib/WebViewTypes";
import { Box } from "../atoms";
import { WebViewHeader } from "../molecules";

interface WebviewProps {
  url: string;
  title: string;
}

export const Webview: FC<WebviewProps> = ({ url, title }) => {
  const navigation = useNavigation();
  const [webViewTitle, setWebViewTitle] = useState(title);
  const [webviewCanGoBack, setWebviewCanGoBack] = useState(false);

  const webViewRef = useRef<WebView>(null);

  const handleNavigationStateChange = useCallback(
    (event: WebViewNativeEvent) => {
      console.log("handleNavigationStateChange:", event);
      if (webViewRef.current) {
        webViewRef.current.injectJavaScript(getCookiesJS);
      }

      if (!event.loading) {
        if (event.title) {
          setWebViewTitle(event.title);
        }
        setWebviewCanGoBack(event.canGoBack);
      }
    },
    []
  );

  const handleShouldStartWithLoadRequest = (
    request: ShouldStartLoadRequest
  ) => {
    console.log("request:", request);

    const domain = ".tonies.";
    if (request.url.includes("login-actions/authenticate?session_code")) {
      navigation.goBack();
      navigation.navigate("RootStack");
      return false;
    }
    if (request.url.includes(domain)) {
      return true;
    } else {
      return false;
    }
  };

  const handleBackButtonPress = useCallback(() => {
    if (webviewCanGoBack) {
      webViewRef.current?.goBack();
    }
  }, [webviewCanGoBack]);

  const handleWebviewMessage = (event: WebViewMessageEvent) => {
    console.log("event - message:", event.nativeEvent.data);
  };

  const getCookiesJS = `
  ReactNativeWebView.postMessage("Cookie: " + document.cookie);
  true;
`;

  return (
    <Box flex={1}>
      <WebViewHeader
        title={webViewTitle}
        backButton={webviewCanGoBack}
        handleBackPress={handleBackButtonPress}
      />
      <WebView
        testID="webview"
        ref={webViewRef}
        javaScriptEnabled
        injectedJavaScript={getCookiesJS}
        cacheMode="LOAD_NO_CACHE"
        onMessage={handleWebviewMessage}
        // sharedCookiesEnabled={false}
        onError={(event) => console.log("omar", event.nativeEvent)}
        source={{
          uri: `${url}`,
        }}
        onShouldStartLoadWithRequest={handleShouldStartWithLoadRequest}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </Box>
  );
};
