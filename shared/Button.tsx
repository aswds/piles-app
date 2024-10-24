import { Link } from "expo-router";
import { LinkComponent } from "expo-router/build/link/Link";
import React, { Component, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

function Button({ onPress, text, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
  },
});

export default Button;
