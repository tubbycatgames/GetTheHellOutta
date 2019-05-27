import React from "react";
import styled from "styled-components";

const RADIUS = 20;
const DIAMETER = RADIUS * 2;

const DotView = styled.View`
  border-color: #ccc;
  border-width: 4;
  border-radius: ${DIAMETER};
  width: ${DIAMETER};
  height: ${DIAMETER};
  background-color: pink;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
`;

const Dot = ({ position }) => {
  const x = position[0] - RADIUS / 2;
  const y = position[1] - RADIUS / 2;
  return <DotView left={x} top={y} />;
};

export default Dot;
