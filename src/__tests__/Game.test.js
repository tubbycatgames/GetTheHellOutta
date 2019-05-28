import React from "react";
import renderer from "react-test-renderer";

import Game from "../Game";

describe("Game", () => {
  it("should render the full game", () => {
    const game = renderer.create(<Game />);
    expect(game.toJSON()).toMatchSnapshot();
  });
});
