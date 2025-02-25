import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import Scrollable from "../components/containers/Scrollable";

describe("Scrollable Test", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Scrollable>
        <Text>Test</Text>
      </Scrollable>
    );

    expect(getByText("Test")).toBeTruthy();
  });
});
