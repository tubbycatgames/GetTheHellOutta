import React from "react"
import { StyleSheet, StatusBar } from "react-native"
import { GameEngine } from "react-native-game-engine"

import { Dot } from "./renderers"
import systems from "./systems"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
})

const startingXPositions = [
  40,
  100,
  160,
  220,
  280,
]
const posY = 200

const dots = startingXPositions.map((posX, i) => {
  return { position: [posX, posY], renderer: <Dot key={i} />}
})

const Game = () => <GameEngine
  style={styles.container}
  systems={systems}
  entities={dots}>
  <StatusBar hidden={true} />
</GameEngine>

export default Game
