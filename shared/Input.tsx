// InputField.tsx
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const Input: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    marginHorizontal: 3,
    color: "white",
  },
  text: { color: "white", height: 50 },
});

export default Input;
