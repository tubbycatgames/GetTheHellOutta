import { Vector } from "../../components";

import movePlayer from "../move-player";

describe("movePlayer", () => {
  const startingEntities = { player: { position: Vector.zero } };

  it("should keep the player static if no touches", () => {
    const entities = movePlayer(startingEntities, { touches: [] });

    expect(entities).toBe(startingEntities);
  });

  it("should move the player to the first touch location", () => {
    const touch1 = { event: { pageX: 5, pageY: 6 } };
    const touch2 = { event: { pageX: 1000, pageY: 1000 } };
    const touches = [touch1, touch2];

    const { player } = movePlayer(startingEntities, { touches });

    expect(player).toBeDefined();
    expect(player.position).toEqual(new Vector(5, 6));
  });
});
