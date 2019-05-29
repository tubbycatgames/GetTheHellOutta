import React from "react";
import renderer from "react-test-renderer";

import Zoomer from "../Zoomer";

describe("Zoomer", () => {
  it("should render a zoomer", () => {
    const zoomer = renderer.create(
      <Zoomer position={{ x: 21, y: 21 }} velocity={{ x: 0, y: 0 }} />
    );
    expect(zoomer.toJSON()).toMatchSnapshot();
  });
});
