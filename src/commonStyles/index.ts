import { BaseTheme } from "@/theme/BaseTheme";
import { StyleProp, ViewStyle } from "react-native";

const flatShadow = {
  shadowOpacity: 0.2,
  shadowRadius: 10,
  shadowColor: BaseTheme.colors.primary.dark,
  shadowOffset: { height: 0, width: 0 },
  elevation: 4,
};

const textShadow = {
  textShadowColor: "rgba(0, 0, 0, 0.5)",
  textShadowOffset: { height: 1, width: 0 },
  textShadowRadius: 4,
};

const menuItemContainer: StyleProp<ViewStyle> = {
  paddingVertical: BaseTheme.space.M,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  borderColor: BaseTheme.colors.neutral.grey20,
  minHeight: 70,
  flex: 1,
};

export const commonStyles = { flatShadow, textShadow, menuItemContainer };
