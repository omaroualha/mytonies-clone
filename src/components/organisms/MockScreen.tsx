import React, { FC } from "react";
import { Box, Headline } from "../atoms";

export const MockScreen: FC = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Headline variant="H3">This is a mock screen.</Headline>
    </Box>
  );
};
