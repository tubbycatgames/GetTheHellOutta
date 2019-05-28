import React from "react";

import { MediumCircle, positionProp } from "../components";

const Zoomer = props => <MediumCircle color={"#123456"} {...props} />;

Zoomer.id = "Zoomer";

Zoomer.propTypes = {
  position: positionProp.isRequired
};

export default Zoomer;
