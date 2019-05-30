import PropTypes from "prop-types";
import React from "react";

import { SmallCircle, Vector } from "../components";

const Zoomer = ({ color, createdAt, position }) => (
  <SmallCircle color={color} createdAt={createdAt} position={position} />
);

const vectorProp = PropTypes.instanceOf(Vector);

Zoomer.propTypes = {
  color: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  position: vectorProp.isRequired,
  velocity: vectorProp.isRequired
};

export default Zoomer;
