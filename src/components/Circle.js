import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/native";

import Vector from "./Vector";

const getDiameter = ({ radius }) => radius * 2;
const getRadius = ({ radius }) => radius;

export const Circle = styled.View`
  background-color: ${props => props.color};
  border-color: white;
  border-radius: ${getDiameter};
  border-width: 1;
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

const CircleWithRadius = (radius, displayName) => {
  const SizedCircle = props => <Circle radius={radius} {...props} />;
  SizedCircle.displayName = displayName;
  SizedCircle.propTypes = {
    color: PropTypes.string.isRequired,
    position: PropTypes.instanceOf(Vector).isRequired
  };
  return SizedCircle;
};

export const SmallCircle = CircleWithRadius(10, "SmallCircle");
export const MediumCircle = CircleWithRadius(20, "MediumCircle");
