import React from "react";
import styled from "styled-components/native";
import { GameEngine } from "react-native-game-engine";
import { StatusBar } from "react-native";

import systems from "./systems";
import { Player, Zoomer } from "./renderers";
import { Vector } from "./components";

const FullScreenEngine = styled(GameEngine)`
  flex: 1;
  background-color: #000;
`;

const entities = {
  player: {
    position: new Vector(300, 100),
    renderer: Player
  },
  zoomer: {
    position: new Vector(150, 0),
    renderer: Zoomer,
    velocity: new Vector(0, 1)
  }
};

const Game = () => (
  <FullScreenEngine systems={systems} entities={entities}>
    <StatusBar hidden={true} />
  </FullScreenEngine>
);

export default Game;
