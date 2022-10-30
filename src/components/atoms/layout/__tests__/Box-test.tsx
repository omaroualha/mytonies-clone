import * as React from "react";
import { screen } from "@testing-library/react-native";
import { testsUtils } from "@/utils/testsUtils";
import { Box } from "../Box";

it(`renders Box correctly`, () => {
  testsUtils.renderWithTheme(<Box flex={1} />);
  expect(screen.toJSON()).toMatchSnapshot();
});
