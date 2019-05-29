import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/native";

import Vector from "./Vector";

const getDiameter = ({ radius }) => radius * 2;
const getRadius = ({ radius }) => radius;

export const Circle = styled.View`
  background-color: white;
  border-color: ${props => props.color};
  border-radius: ${getDiameter};
  border-width: 4;
  height: ${getDiameter};
  left: ${props => props.position.x - getRadius(props)};
  position: absolute;
  top: ${props => props.position.y - getRadius(props)};
  width: ${getDiameter};
`;

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.instanceOf(Vector).isRequired,
  radius: PropTypes.number.isRequired
};

export const MediumCircle = props => <Circle radius={20} {...props} />;

MediumCircle.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.instanceOf(Vector).isRequired
};
