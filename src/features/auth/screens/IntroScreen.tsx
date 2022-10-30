import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Headline, Paragraph, Label, PrimaryButton } from "@/components";
import { AuthStackScreenProps } from "../AuthStack";
import { images } from "@/assets";
import { BaseTheme } from "@/theme/BaseTheme";

export type IntroScreenProps = AuthStackScreenProps<"Intro">;

export const IntroScreen: FC<IntroScreenProps> = ({ navigation }) => {
  const theme = useTheme();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <Box flex={1} backgroundColor={theme.colors.primary.brand}>
      <Box flex={2} width="100%" alignItems="center" justifyContent={"center"}>
        <Image source={images.toniesLogo} style={styles.logo} />
      </Box>
      <Box
        flex={1}
        width={"100%"}
        p="M"
        justifyContent={"space-between"}
        backgroundColor={theme.colors.primary.light}
        borderTopLeftRadius={theme.radii.L * 2}
        borderTopRightRadius={theme.radii.L * 2}
      >
        <Box flex={0.1} />
        <Box>
          <Headline variant="H2">Unlock your Tonies</Headline>
          <Label variant="L1" color={theme.colors.neutral.grey60}>
            Set up your Tonibox and discover the whole variety of your tonies
            with your mytonies acount.
          </Label>
        </Box>
        <Box pb="M">
          <PrimaryButton
            label="Log in"
            onPress={handleLoginPress}
            iconType="NEXT"
          />
          <PrimaryButton
            label="Free registration"
            onPress={handleRegisterPress}
            iconType="NEXT"
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "55%",
    height: "55%",
    resizeMode: "contain",
  },
  button: {
    height: 35,
    width: "100%",
    flexDirection: "row",
    marginTop: BaseTheme.space.S,
    borderRadius: BaseTheme.radii.M,
    backgroundColor: BaseTheme.colors.neutral.grey10,
    paddingLeft: BaseTheme.space.M,
    paddingRight: BaseTheme.space.M,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
