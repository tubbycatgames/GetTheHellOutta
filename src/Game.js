import React from "react";
import styled from "styled-components";
import { GameEngine } from "react-native-game-engine";
import { StatusBar } from "react-native";

import systems from "./systems";
import { Player } from "./renderers";

const FullScreenEngine = styled(GameEngine)`
  flex: 1;
  background-color: #000;
`;

const entities = [{ id: Player.id, position: [300, 100], renderer: Player }];

const Game = () => (
  <FullScreenEngine systems={systems} entities={entities}>
    <StatusBar hidden={true} />
  </FullScreenEngine>
);

export default Game;
