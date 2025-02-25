import React from "react";
import { render, screen } from "@testing-library/react-native";
import About from "../app/about"; // Ajuste o caminho conforme necessário
import { useAuth } from "../store/AuthContext";

// Mock do AuthContext para simular usuário autenticado
jest.mock("../store/AuthContext", () => ({
  useAuth: jest.fn(),
}));
jest.mock("../components/headers/HeaderWithTitle", () => () => null);
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
}));
// Mock de expo-router para evitar erros de navegação
jest.mock("expo-router", () => ({
  router: {
    replace: jest.fn(),
  },
  Link: ({ children }: { children: React.ReactNode }) => children, // Renderiza o Link sem erro
}));

beforeEach(() => {
  (useAuth as jest.Mock).mockReturnValue({ isLoggedIn: true });
});

test("testa a renderização dos textos", () => {
  render(<About />);

  expect(screen.getByText("Sobre")).toBeTruthy();
  expect(screen.getByText("Versão 1.0")).toBeTruthy();
  expect(
    screen.getByText("clique para acessar o perfil no github:")
  ).toBeTruthy();
});
