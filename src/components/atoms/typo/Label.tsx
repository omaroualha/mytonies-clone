import { Text, TextProps } from "react-native";
import { color } from "styled-system";
import styled, { css } from "styled-components/native";

type LabelVariants = "L1" | "L2";

interface LabelProps extends TextProps {
  variant?: LabelVariants;
}

export const Label = styled(Text)<LabelProps>`
  color: ${({ theme }) => theme.colors.primary.dark};

  ${({ theme, variant }) => {
    const variantStyle = variant
      ? theme.typography.Labels[variant]
      : theme.typography.Labels.L1;

    return css`
      font-family: ${variantStyle.fontFamily};
      font-size: ${variantStyle.fontSize}px;
      font-weight: ${variantStyle.fontWeight};
      line-height: ${variantStyle.lineHeight}px;
      letter-spacing: ${variantStyle.letterSpacing}px;
    `;
  }}
  ${color}
`;

Label.defaultProps = { variant: "L1" };
