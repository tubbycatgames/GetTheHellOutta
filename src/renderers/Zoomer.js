import React from "react";

import { MediumCircle, positionProp } from "../components";

const Zoomer = ({ position }) => (
  <MediumCircle color={"#123456"} position={position} />
);

Zoomer.propTypes = {
  position: positionProp.isRequired,
  velocity: positionProp.isRequired
};

export default Zoomer;
