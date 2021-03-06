import React from "react";
import renderer from "react-test-renderer";

import { Circle } from "../Circle";
import Vector from "../Vector";

describe("Circle", () => {
  it("should render a circle", () => {
    const circle = renderer.create(
      <Circle color="#543210" position={new Vector(5, 5)} radius={5} />
    );
    expect(circle.toJSON()).toMatchSnapshot();
  });
});
