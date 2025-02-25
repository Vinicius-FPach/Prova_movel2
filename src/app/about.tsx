import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";
import Scrollable from "../components/containers/Scrollable";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { THEME_COLORS, THEME_FONTS } from "../constants/globalStyles";
import { useAuth } from "../store/AuthContext";

export default function About() {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        router.replace("/login");
      }, 1);
    }
  }, []);

  return (
    <Scrollable>
      <HeaderWithTitle title="Sobre" />

      <Text style={styles.pageTitle}>Sobre</Text>

      <View style={styles.item}>
        <Text>Versão 1.0</Text>
        <Text style={styles.textBold}>Desenvolvido por:</Text>
        <Text></Text>
        <Text>clique para acessar o perfil no github:</Text>
        <Link href={"https://github.com/"}>
          <Ionicons name="logo-github" size={40} color={"#000000"} />
        </Link>
      </View>
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: THEME_FONTS.PAGE_TITLE_SIZE,
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  item: {
    backgroundColor: THEME_COLORS.BASE_COLOR,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
});
