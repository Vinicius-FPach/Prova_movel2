import React from "react";
import { render, screen } from "@testing-library/react-native";
import { useAuth } from "../store/AuthContext";
import data from "../services/data-passengers";
import Index from "../app/index";
import { transformData } from "../helpers/helpers";
import { ReactNode } from "react";

jest.mock("expo-router", () => ({
  router: {
    replace: jest.fn(),
  },
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
}));

jest.mock("../components/headers/HeaderWithTitle", () => () => null);
jest.mock("../components/containers/FullScreen", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

jest.mock("../store/AuthContext", () => ({
  useAuth: jest.fn(),
}));

beforeEach(() => {
  (useAuth as jest.Mock).mockReturnValue({ isLoggedIn: true });
});

test("teste da renderização da lista de passageiros", async () => {
  render(<Index />);

  // Verifica se o título da lista está sendo exibido
  expect(screen.getByText("Lista de passageiros")).toBeTruthy();

  const transformedData = transformData(data);

  // Verifica se pelo menos um nome está visível
  const firstPassenger = transformedData[0]?.data[0]?.passenger_name;
  if (firstPassenger) {
    expect(await screen.findByText(firstPassenger)).toBeTruthy();
  }
});
