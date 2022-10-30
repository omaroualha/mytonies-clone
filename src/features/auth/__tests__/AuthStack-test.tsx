import React from "react";
import { testsUtils } from "@/utils/testsUtils";
import { fireEvent, screen } from "@testing-library/react-native";
import { IntroScreen } from "../screens/IntroScreen";
import { AuthStack } from "../AuthStack";

describe("AUTH STACK", () => {
  const navigation = { navigate: jest.fn() };
  const spy = jest.spyOn(navigation, "navigate");

  it(`Should match snapshot`, () => {
    testsUtils.renderWithNavigation(<AuthStack navigation={navigation} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  describe("INTRO SCREEN", () => {
    it(`Should renders correctly`, () => {
      testsUtils.renderWithNavigation(<IntroScreen navigation={navigation} />);
      expect(screen.getByText("Unlock your Tonies")).toBeTruthy();
      expect(screen.getByText("Log in")).toBeTruthy();
      expect(screen.getByText("Free registration")).toBeTruthy();
      fireEvent.press(screen.getByText("Log in"));
      fireEvent.press(screen.getByText("Free registration"));
      expect(spy).toBeCalledTimes(2);
    });

    describe("LOGIN SCREEN", () => {
      it(`Should renders correctly`, () => {
        testsUtils.renderWithNavigation(<AuthStack navigation={navigation} />);
        fireEvent.press(screen.getByText("Log in"));
        expect(screen.getByText("tonies® - Login")).toBeTruthy();
        expect(screen.getByTestId("close-button")).toBeTruthy();
        fireEvent.press(screen.getByTestId("close-button"));
        expect(spy).toBeCalledTimes(2);
      });
    });

    describe("REGISTER SCREEN", () => {
      it(`Should renders correctly`, () => {
        testsUtils.renderWithNavigation(<AuthStack navigation={navigation} />);
        fireEvent.press(screen.getByText("Free registration"));
        expect(
          screen.getByText("tonies® - Create your Tonies-Account")
        ).toBeTruthy();
        expect(screen.getByTestId("close-button")).toBeTruthy();
        fireEvent.press(screen.getByTestId("close-button"));
        expect(spy).toBeCalledTimes(2);
      });
    });
  });
});
