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
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="RootStack" component={BottomTabs} />
    </Stack.Navigator>
  );
};
