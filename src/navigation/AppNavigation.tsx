import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./RootStack";
import { Box, Webview } from "@/components";

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      {/* <Box>
        <Webview url="https://tonies.com/" title="home" />
      </Box> */}
      <RootStackNavigator />
    </NavigationContainer>
  );
};
