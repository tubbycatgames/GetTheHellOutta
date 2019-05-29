import PropTypes from "prop-types";
import React from "react";

import { MediumCircle, Vector } from "../components";

const Zoomer = ({ position }) => (
  <MediumCircle color={"#123456"} position={position} />
);

const vectorProp = PropTypes.instanceOf(Vector);

Zoomer.propTypes = {
  position: vectorProp.isRequired,
  velocity: vectorProp.isRequired
};

export default Zoomer;
