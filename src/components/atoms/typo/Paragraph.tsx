import { Text, TextProps } from "react-native";
import styled, { css } from "styled-components/native";
import { typography } from "styled-system";

type ParagraphVariants = "P1" | "P2";

interface ParagraphProps extends TextProps {
  variant?: ParagraphVariants;
}

export const Paragraph = styled(Text)<ParagraphProps>`
  color: ${({ theme }) => theme.colors.primary.dark};

  ${(props) => {
    const { theme, variant } = props;
    const variantStyle = variant
      ? theme.typography.Paragraph[variant]
      : theme.typography.Paragraph.P1;

    return css`
      font-family: ${variantStyle.fontFamily};
      font-size: ${variantStyle.fontSize}px;
      line-height: ${variantStyle.lineHeight}px;
      letter-spacing: ${variantStyle.letterSpacing}px;
    `;
  }}
  ${typography}
`;

Paragraph.defaultProps = { variant: "P1" };
