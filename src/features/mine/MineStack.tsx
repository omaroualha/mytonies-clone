import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabsProps } from "@/navigation/BottomTabNavigator";
import { MineHomeScreen } from "./screens/MineHomeScreen";

export type MineStackParamList = {
  MineHome: undefined;
};

export type MineStackScreenProps<Screen extends keyof MineStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MineStackParamList, Screen>,
    BottomTabsProps<"MineStack">
  >;

const Stack = createNativeStackNavigator<MineStackParamList>();

export const MineStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="MineHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MineHome" component={MineHomeScreen} />
    </Stack.Navigator>
  );
};
