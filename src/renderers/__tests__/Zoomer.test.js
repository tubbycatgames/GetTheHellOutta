import React from "react";
import renderer from "react-test-renderer";

import Zoomer from "../Zoomer";
import { Vector } from "../../components";

describe("Zoomer", () => {
  it("should render a zoomer", () => {
    const zoomer = renderer.create(
      <Zoomer
        color={"#123456"}
        createdAt={5}
        position={new Vector(21, 21)}
        velocity={Vector.zero}
      />
    );
    expect(zoomer.toJSON()).toMatchSnapshot();
  });
});
