import styled from "styled-components/native";

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

export default Circle;
