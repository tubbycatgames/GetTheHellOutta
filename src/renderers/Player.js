import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const RADIUS = 20;
const DIAMETER = RADIUS * 2;

const getDiameter = props => props.diameter;

const Circle = styled.View`
  background-color: white;
  border-color: #ccc;
  border-radius: ${getDiameter};
  border-width: 4;
  height: ${getDiameter};
  left: ${props => props.left};
  position: absolute;
  top: ${props => props.top};
  width: ${getDiameter};
`;

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
