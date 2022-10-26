import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { BottomTabsProps } from "@/navigation/BottomTabNavigator";
import { MineHomeScreen } from "./screens/MineHomeScreen";

export type MineStackParamList = {
  Home: undefined;
};

export type MineStackScreenProps<Screen extends keyof MineStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MineStackParamList, Screen>,
    BottomTabsProps<"MineStack">
  >;

const Stack = createNativeStackNavigator<MineStackParamList>();

export const MineStack: FC<MineStackScreenProps<"Intro">> = ({
  navigation,
}) => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MineHomeScreen} />
    </Stack.Navigator>
  );
};
