import React, { FC } from "react";
import { useTheme } from "styled-components";
import { Box } from "../atoms";

interface ModalWrapperProps {
  children: JSX.Element;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      flex={1}
      mt={40}
      borderTopRightRadius={theme.radii.L}
      borderTopLeftRadius={theme.radii.L}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
