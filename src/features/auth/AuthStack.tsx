import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation/RootStack";
import { LoginScreen } from "./screens/LoginScreen";
import { IntroScreen } from "./screens/IntroScreen";
import { RegisterScreen } from "./screens/Registerscreen";

export type AuthStackParamList = {
  Intro: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, Screen>,
    RootStackScreenProps<"AuthStack">
  >;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack: FC<AuthStackScreenProps<"Intro">> = ({
  navigation,
}) => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
