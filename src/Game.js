import React from "react";
import styled from "styled-components/native";
import { GameEngine } from "react-native-game-engine";
import { StatusBar } from "react-native";

import systems from "./systems";
import { Player } from "./renderers";
import { Vector } from "./components";

const FullScreenEngine = styled(GameEngine)`
  flex: 1;
  background-color: #000;
`;

const entities = {
  player: {
    position: new Vector(300, 100),
    renderer: Player
  }
};

const Game = () => (
  <FullScreenEngine systems={systems} entities={entities}>
    <StatusBar hidden={true} />
  </FullScreenEngine>
);

export default Game;
