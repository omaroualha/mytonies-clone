import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabs } from "./BottomTabNavigator";
import { AuthStack } from "@/features/auth/AuthStack";

export type RootStackParamList = {
  AuthStack: undefined;
  RootStack: undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackScreenNavigationProp<
  Screen extends keyof RootStackParamList
> = NativeStackNavigationProp<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  // useEffect(() => {
  //   const getCokkie = async () =>
  //     await CookieManager.get(
  //       "https://login.tonies.com/auth/realms/tonies/protocol/openid-connect/auth?client_id=tonie-studio&kc_locale=en&redirect_uri=com.tonies.app%3A%2Foauthredirect&response_type=code&scope=openid+email+profile&webview=app&utm_source=app&cookieConsent=16",
  //       true
  //     );
  //   const cookie = getCokkie();
  //   console.log("cookie::", cookie);
  // }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="RootStack" component={BottomTabs} />
    </Stack.Navigator>
  );
};
