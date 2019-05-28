import PropTypes from "prop-types";
import React from "react";

import { Circle } from "../components";

const RADIUS = 20;
const DIAMETER = RADIUS * 2;

const Player = ({ position }) => {
  const x = position[0] - RADIUS;
  const y = position[1] - RADIUS;
  return <Circle diameter={DIAMETER} left={x} top={y} />;
};

Player.id = "Player";

Player.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Player;
