import PropTypes from "prop-types";
import React from "react";

import { MediumCircle, Vector } from "../components";

const Player = props => <MediumCircle color={"#000000"} {...props} />;

Player.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

export default Player;
