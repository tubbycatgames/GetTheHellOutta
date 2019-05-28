import { Player } from "../../renderers";

import movePlayer from "../move-player";

describe("movePlayer", () => {
  const startingEntities = {
    0: {
      id: Player.id,
      position: [0, 0]
    }
  };

  it("should keep the player static if no touches", () => {
    const entities = movePlayer(startingEntities, { touches: [] });
    expect(entities).toBe(startingEntities);
  });

  it("should move the player to the first touch location", () => {
    const touch1 = { event: { pageX: 5, pageY: 6 } };
    const touch2 = { event: { pageX: 1000, pageY: 1000 } };
    const touches = [touch1, touch2];

    const entities = movePlayer(startingEntities, { touches });
    expect(Object.entries(entities)).toHaveLength(1);
    expect(entities[0].position).toEqual([5, 6]);
  });
});
