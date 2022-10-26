import { images } from "@/assets";
import { Box, Headline } from "@/components";
import React, { FC } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import { MineItem, MineItemProps } from "../components/MineItem";
import { MineStackScreenProps } from "../MineStack";

export type MineHomeScreenProps = MineStackScreenProps<"Home">;

export const MineHomeScreen: FC<MineHomeScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const mines: MineItemProps[] = [
    {
      headline: "Toniebox",
      image: images.mineTonieBox,
      description:
        "Currently, there is no Toniebox set up with your account. Add one by tapping on the +.",
    },
    {
      headline: "Tonies",
      image: images.mineTonies,
      description:
        "Your Tonies will appear here. Simply place them on your Toniebox connected to the Wi-fi.",
    },
    {
      headline: "Content",
      image: images.mineContent,
      description:
        "All your audio files will be displayed here. Record your own stories assign them to your Creative-tonies.",
    },
  ];
  return (
    <Box flex={1} backgroundColor={theme.colors.primary.light}>
      <Box height={insets.top} style={styles.blurView} />
      {/* <Box widt={"80%"} height="100%" flex={1} zIndex={10}> */}
      {/* <SVGShape /> */}
      {/* </Box> */}
      <ScrollView>
        <ImageBackground
          source={images.mineShapeBG}
          style={{
            width: 170,
            // zIndex: 10,
            height: 130,

            position: "absolute",
            right: 0,
          }}
        ></ImageBackground>

        <Box flex={1} pt={insets.top} px="L">
          <Box
            flexDirection={"row"}
            flex={1}
            // backgroundColor="yellow"
            justifyContent={"space-between"}
          >
            <Headline variant="HS">Mine</Headline>
          </Box>
          {mines.map((mine, index) => (
            <MineItem key={index} {...mine} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  blurView: {
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.95)",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
  },
});
