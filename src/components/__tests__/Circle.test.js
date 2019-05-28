import React from "react";
import renderer from "react-test-renderer";

import Circle from "../Circle";

describe("Circle", () => {
  it("should render a circle", () => {
    const circle = renderer.create(<Circle diameter={5} left={3} top={1} />);
    expect(circle.toJSON()).toMatchSnapshot();
  });
});
