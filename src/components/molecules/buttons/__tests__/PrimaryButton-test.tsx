import * as React from "react";
import { screen } from "@testing-library/react-native";
import { PrimaryButton } from "../PrimaryButton";
import { testsUtils } from "@/utils/testsUtils";

describe(`PRIMARY BUTTON`, () => {
  it(`Primary button DEFAULT variant`, () => {
    testsUtils.renderWithTheme(<PrimaryButton label="button" />);
    expect(screen.getByText("button")).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`Primary button BRAND variant`, () => {
    testsUtils.renderWithTheme(
      <PrimaryButton variant="BRAND" label="button" />
    );
    expect(screen.getByText("button")).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
