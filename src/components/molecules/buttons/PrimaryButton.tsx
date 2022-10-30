import React, { FC, useMemo } from "react";
import { PressableProps, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Paragraph } from "@/components/atoms";
import { BaseTheme } from "@/theme/BaseTheme";

interface PrimaryButtonProps extends PressableProps {
  label: string;
  variant?: "DEFAULT" | "BRAND" | "DARK";
  iconType?: "NEXT" | "ROCKET" | "MIC";
  disabled?: boolean;
}

export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const theme = useTheme();
  const { variant, label, iconType } = props;

  const [backgroundColor, textColor] = useMemo(() => {
    switch (variant) {
      case "BRAND":
        return [theme.colors.primary.brand, theme.colors.primary.light];
      case "DARK":
        return [theme.colors.primary.dark, theme.colors.primary.light];
      default:
        return [BaseTheme.colors.neutral.grey10, theme.colors.primary.dark];
    }
  }, [variant]);

  const icon = useMemo(() => {
    switch (iconType) {
      case "NEXT":
        return <Entypo name="chevron-thin-right" size={22} color={textColor} />;
      case "ROCKET":
        return (
          <Ionicons name="ios-rocket-outline" size={22} color={textColor} />
        );
      case "MIC":
        return <Ionicons name="ios-mic-outline" size={22} color={textColor} />;
      default:
        undefined;
    }
  }, [iconType, textColor]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, { backgroundColor: backgroundColor }]}
      {...props}
    >
      <Paragraph variant="P2" style={{ color: textColor }}>
        {label}
      </Paragraph>
      {icon && icon}
    </TouchableOpacity>
  );
};
PrimaryButton.defaultProps = { variant: "DEFAULT" };

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 35,
    flexDirection: "row",
    marginTop: BaseTheme.space.S,
    borderRadius: BaseTheme.radii.M,
    padding: BaseTheme.space.S,
    paddingLeft: BaseTheme.space.M,
    paddingRight: BaseTheme.space.M,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
