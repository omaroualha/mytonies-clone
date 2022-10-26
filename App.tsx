import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { ThemeProvider } from "styled-components/native";
import { BaseTheme } from "./src/theme/BaseTheme";
import { useEffect } from "react";
import axios from "axios";
import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { Box, Webview } from "@/components";

export default function App() {
  const isLoadingComplete = useCachedResources();
  useEffect(() => {
    <Webview url="https://tonies.com/" title="home" />;
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={BaseTheme}>
          <AppNavigation />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
