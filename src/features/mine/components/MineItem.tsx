import { Box, Headline, Label } from "@/components";
import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

export type MineItemProps = {
  headline: string;
  description?: string;
  image: ImageSourcePropType;
  onPress?(): void;
};
export const MineItem: FC<MineItemProps> = ({
  headline,
  description,
  image,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <Box pt="L">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pt="M"
        pb="M"
      >
        <Headline variant="H2">{headline}</Headline>
        <AntDesign name="plus" size={24} color={theme.colors.primary.brand} />
      </Box>
      <Box p="M" pt="L" flexDirection="row">
        <Image source={image} style={styles.image} />
        <Box width={"70%"} pl="S">
          <Label variant="L1" color={theme.colors.neutral.grey60}>
            {description}
          </Label>
        </Box>
      </Box>
      <Box borderWidth={1} borderColor={theme.colors.neutral.grey10} />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
