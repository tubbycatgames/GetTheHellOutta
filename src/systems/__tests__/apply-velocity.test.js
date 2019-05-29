import applyVelocity from "../apply-velocity";

import { Vector } from "../../components";

describe("applyVelocity", () => {
  it("should keep entities static without velocity", () => {
    const startingEntities = { entity: { position: Vector.zero } };
    const entities = applyVelocity(startingEntities, { time: { delta: 5 } });

    expect(entities).toBe(startingEntities);
  });

  it("should move the entities with velocity", () => {
    const startingEntities = {
      entity: { position: Vector.zero, velocity: Vector.one }
    };
    const entities = applyVelocity(startingEntities, { time: { delta: 1000 } });

    expect(Object.keys(entities)).toHaveLength(1);
    expect(entities.entity).toBeDefined();
    expect(entities.entity.position).toEqual(Vector.one);
  });
});
