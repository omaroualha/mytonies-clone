import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation/RootStack";
import { BottomTabsProps } from "@/navigation/BottomTabNavigator";
import { MockScreen } from "@/components/organisms/MockScreen";

export type ExploreStackParamList = {
  ExploreHome: undefined;
};

export type ExploreStackScreenProps<
  Screen extends keyof ExploreStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<ExploreStackParamList, Screen>,
  BottomTabsProps<"ExploreStack">
>;

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export const ExploreStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExploreHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ExploreHome" component={MockScreen} />
    </Stack.Navigator>
  );
};
