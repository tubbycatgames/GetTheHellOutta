import { Vector } from "../../components";

import spawnPlayer from "../spawn-player";

describe("spawnPlayer", () => {
  const screen = { screen: { height: 100, width: 200 } };

  it("should spawn a player if one doesn't exist", () => {
    const { player } = spawnPlayer({}, screen);

    expect(player).toBeDefined();
    expect(player.position).toEqual(new Vector(100, 50));
  });

  it("should not spawn a player if one exists", () => {
    const startingEntities = { player: { id: 1 } };
    const entities = spawnPlayer(startingEntities, screen);

    expect(entities).toBe(startingEntities);
  });
});
