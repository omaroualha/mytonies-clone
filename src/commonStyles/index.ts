import { BaseTheme } from "@/theme/BaseTheme";

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

export const commonStyles = { flatShadow, textShadow };
