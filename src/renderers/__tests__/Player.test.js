import React from "react";
import renderer from "react-test-renderer";

import Player from "../Player";

describe("Player", () => {
  it("should render a player", () => {
    const player = renderer.create(<Player position={{ x: 21, y: 21 }} />);
    expect(player.toJSON()).toMatchSnapshot();
  });
});
