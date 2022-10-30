import * as React from "react";
import { BaseTheme } from "@/theme/BaseTheme";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

/** Render helper that renders `ui` within `NavigationContainer`. */
const renderWithNavigation = (screen: JSX.Element) => {
  return render(
    <ThemeProvider theme={BaseTheme}>
      <NavigationContainer>{screen}</NavigationContainer>
    </ThemeProvider>
  );
};

const renderWithTheme = (component: JSX.Element) => {
  return render(<ThemeProvider theme={BaseTheme}>{component}</ThemeProvider>);
};

export const testsUtils = { renderWithNavigation, renderWithTheme };
