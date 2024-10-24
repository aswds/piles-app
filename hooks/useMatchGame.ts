import { GameModeType } from "@/types/gameMode";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

type MatchGameType = {
  initialTotalMatches: number;
  maxTake: number;
  gameMode: GameModeType;
};

export const useMatchGame = ({
  gameMode,
  initialTotalMatches,
  maxTake,
}: MatchGameType) => {
  const [totalMatches, setTotalMatches] = useState(initialTotalMatches);
  const [player1Matches, setPlayer1Matches] = useState(0);
  const [player2Matches, setPlayer2Matches] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(
    gameMode === "cpu_first" ? 2 : 1
  );
  const [isGameOver, setIsGameOver] = useState(false);

  const takeMatches = (num: number) => {
    if (totalMatches - num < 0) {
      Alert.alert("Invalid Move", "Not enough matches left to take that many.");
      return;
    }

    if (currentPlayer === 1) {
      setPlayer1Matches((prev) => prev + num);
    } else if (currentPlayer === 2) {
      setPlayer2Matches((prev) => prev + num);
    }

    setTotalMatches((prev) => prev - num);

    if (totalMatches - num === 0) {
      setIsGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const determineWinner = () => {
    if (isGameOver) {
      return player1Matches % 2 === 0 ? "Player wins!" : "Computer wins!";
    }
    return null;
  };
  const computerMove = () => {
    if (totalMatches <= 0) {
      return; // No matches left
    }

    let num: number;

    if (totalMatches % 2 !== 0) {
      num = 1;
    } else {
      num = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
    }
    if (num > 3) {
      num = 3; // Limit to a maximum of 3
    }

    // Ensure the chosen number of matches does not exceed the available matches
    if (num > totalMatches) num = totalMatches; // Do not exceed total matches

    // Take matches and update the game state
    takeMatches(num); // Call the function that handles taking matches
  };
  // Effect to handle computer's turn
  useEffect(() => {
    if (currentPlayer === 2) {
      computerMove();
    }
  }, [currentPlayer]);

  return {
    totalMatches,
    player1Matches,
    player2Matches,
    currentPlayer,
    takeMatches,
    determineWinner,
    isGameOver,
  };
};
