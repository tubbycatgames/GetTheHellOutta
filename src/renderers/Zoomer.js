import PropTypes from "prop-types";
import React from "react";

import { MediumCircle, Vector } from "../components";

const Zoomer = ({ createdAt, position }) => (
  <MediumCircle color={"#123456"} createdAt={createdAt} position={position} />
);

const vectorProp = PropTypes.instanceOf(Vector);

Zoomer.propTypes = {
  createdAt: PropTypes.number.isRequired,
  position: vectorProp.isRequired,
  velocity: vectorProp.isRequired
};

export default Zoomer;
