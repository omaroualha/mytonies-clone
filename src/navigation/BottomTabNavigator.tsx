import React, { FC } from "react";
import { useTheme } from "styled-components";
import { CompositeScreenProps } from "@react-navigation/native";
import { Image, ImageSourcePropType } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackScreenProps } from "./RootStack";
import { Box, Label } from "@/components";
import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { commonStyles } from "@/commonStyles";
import { icons } from "@/assets";
import { MineStack } from "@/features/mine/MineStack";

export type RootTabParamList = {
  MineStack: undefined;
  ExploreStack: undefined;
};

export type BottomTabsProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootTabParamList, Screen>,
    RootStackScreenProps<"RootStack">
  >;

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabs: FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="MineStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          right: 100,
          left: 100,
          height: 60,
          borderRadius: theme.radii.M,
          backgroundColor: theme.colors.primary.light,
          ...commonStyles.flatShadow,
        },
      }}
    >
      <Tab.Screen
        name="MineStack"
        component={MineStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              label="Mine"
              icon={icons.mine}
              activeIcon={icons.mineActive}
              focused={focused}
            />
          ),
        })}
      />

      <Tab.Screen
        name="ExploreStack"
        component={LoginScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              label="Explore"
              icon={icons.explore}
              activeIcon={icons.exploreActive}
              focused={focused}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

type tabBarIconProps = {
  label: string;
  icon: ImageSourcePropType;
  activeIcon: ImageSourcePropType;
  focused: boolean;
};
const TabBarIcon: FC<tabBarIconProps> = ({
  label,
  icon,
  activeIcon,
  focused,
}) => {
  const theme = useTheme();
  console.log("focused", focused);
  return (
    <Box alignItems="center" justifyContent="center" top={15}>
      <Image
        source={focused ? activeIcon : icon}
        style={{ width: 24, height: 24 }}
      />
      <Label
        variant="L2"
        style={{ paddingTop: 5 }}
        color={focused ? theme.colors.primary.brand : theme.colors.primary.dark}
      >
        {label}
      </Label>
    </Box>
  );
};
