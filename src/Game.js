import React from "react";
import styled from "styled-components/native";
import { GameEngine } from "react-native-game-engine";
import { StatusBar } from "react-native";

import systems from "./systems";

const FullScreenEngine = styled(GameEngine)`
  flex: 1;
  background-color: #000;
`;

const Game = () => (
  <FullScreenEngine systems={systems} entities={{}}>
    <StatusBar hidden={true} />
  </FullScreenEngine>
);

export default Game;
