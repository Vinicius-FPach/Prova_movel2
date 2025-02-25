import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { DEFAULT_SPACES } from "../../constants/globalStyles";

type FullScreenProps = {
  children: ReactNode;
  center?: boolean;
};

export default function FullScreen({
  children,
  center = false,
}: FullScreenProps) {
  return (
    <View style={[styles.container, center ? styles.center : undefined]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_SPACES.DEFAULT_PADDING,
    gap: DEFAULT_SPACES.DEFAULT_GAP * 2,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});