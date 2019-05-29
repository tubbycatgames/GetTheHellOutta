import React from "react";

import { MediumCircle, positionProp } from "../components";

const Player = props => <MediumCircle color={"#000000"} {...props} />;

Player.propTypes = { position: positionProp.isRequired };

export default Player;
