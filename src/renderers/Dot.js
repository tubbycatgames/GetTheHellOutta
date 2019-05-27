import React from "react"
import { StyleSheet, View } from "react-native"

const RADIUS = 20

const Dot = ({ position }) => {
    const x = position[0] - RADIUS / 2
    const y = position[1] - RADIUS / 2
    return <View style={[styles.dot, { left: x, top: y }]} />
}

const styles = StyleSheet.create({
  dot: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  }
})

export default Dot
