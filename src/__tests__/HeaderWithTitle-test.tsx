import React from "react";
import { render, screen } from "@testing-library/react-native";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";

jest.mock("expo-router", () => ({
  Stack: {
    Screen: jest.fn(() => null),
  },
}));

jest.mock("../components/shared/MenuButton", () => {
  const { View } = require("react-native");
  return () => <View />;
});

test("testa a renderização do HeaderWithTitle com o título", () => {
  render(<HeaderWithTitle title="Teste do Header" />);

  expect(screen.toJSON()).toMatchSnapshot();
});
