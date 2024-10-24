import { Alert, StyleSheet, Text, View } from "react-native";

import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Screen } from "@/shared/Screen";
import Button from "@/shared/Button";
import { useMatchGame } from "@/hooks/useMatchGame";

export default function TabTwoScreen() {
  const params = useLocalSearchParams();
  const { initialTotalMatches, maxTake, gameMode } = params;
  const {
    totalMatches,
    player1Matches,
    player2Matches,
    currentPlayer,
    takeMatches,
    determineWinner,
    isGameOver,
  } = useMatchGame({
    gameMode,
    initialTotalMatches,
    maxTake,
  });
  const winnerMessage = determineWinner();
  if (isGameOver) {
    Alert.alert("Game Over", winnerMessage, () => {
      router.back();
    });
  }
  const isDisabled = totalMatches === 0 || currentPlayer === 2;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Player vs Computer</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.matches}>Matches remaining</Text>
          <Text style={styles.matches}>{totalMatches}</Text>
        </View>

        <Text style={styles.playerText}>
          Player 1: {player1Matches} matches (Even:{" "}
          {player1Matches % 2 === 0 ? "Yes" : "No"})
        </Text>
        <Text style={styles.playerText}>
          Computer: {player2Matches} matches (Even:{" "}
          {player2Matches % 2 === 0 ? "Yes" : "No"})
        </Text>
        <Text style={styles.turnText}>
          {gameMode && currentPlayer === 2
            ? "Computer's turn"
            : `Player's turn`}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            text="Take 1 Match"
            onPress={() => takeMatches(1)}
            disabled={isDisabled}
          />
          <Button
            text="Take 2 Matches"
            onPress={() => takeMatches(2)}
            disabled={isDisabled}
          />
          <Button
            text="Take 3 Matches"
            onPress={() => takeMatches(3)}
            disabled={isDisabled}
          />
          <View style={{ marginTop: "auto", width: "100%" }}>
            <Button text="Exit" onPress={() => router.back()} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "#f5f5f5",
    fontWeight: "bold",
    marginBottom: 20,
  },
  matches: {
    fontSize: 22,
    marginBottom: 10,
    color: "#f5f5f5",
  },
  playerText: {
    fontSize: 18,
    color: "#f5f5f5",

    marginVertical: 5,
  },
  turnText: {
    fontSize: 20,
    color: "#f5f5f5",

    fontWeight: "bold",
    marginVertical: 15,
  },
  buttonContainer: {
    justifyContent: "space-around",
    width: "80%",
    gap: 10,
    marginTop: 20,
  },
});
