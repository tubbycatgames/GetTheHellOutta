import React from "react";
import renderer from "react-test-renderer";

import { Vector } from "../../components";

import Player from "../Player";

describe("Player", () => {
  it("should render a player", () => {
    const player = renderer.create(<Player position={new Vector(21, 21)} />);
    expect(player.toJSON()).toMatchSnapshot();
  });
});
