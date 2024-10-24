import Button from "@/shared/Button";
import { Screen } from "@/shared/Screen";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen({}) {
  const [maxTake, setMaxTake] = useState<number>(3);
  const [numberOfMatches, setNumberOfMatches] = useState<number>(25);
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PILES GAME</Text>
        </View>
        <View style={{ width: "100%", gap: 10 }}>
          <Button
            text="Play with Computer"
            onPress={() => {
              router.push({
                pathname: "/(stack)/game",
                params: {
                  gameMode: "cpu",
                  initialTotalMatches: numberOfMatches,
                  maxTake: maxTake,
                },
              });
            }}
          />
          <Button
            text="First Move By Computer"
            onPress={() => {
              router.push({
                pathname: "/(stack)/game",
                params: {
                  gameMode: "cpu_first",
                  initialTotalMatches: numberOfMatches,
                  maxTake: maxTake,
                },
              });
            }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          ></View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  input: {
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});
