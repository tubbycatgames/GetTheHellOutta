import applyVelocity from "../apply-velocity";

import { Vector } from "../../components";

describe("applyVelocity", () => {
  it("should keep entities static without velocity", () => {
    const entity = { position: Vector.zero };
    const startingEntities = { entity };
    const entities = applyVelocity(startingEntities);
    expect(entities).toBe(startingEntities);
  });

  it("should move the entities with velocity", () => {
    const entity = { position: Vector.zero, velocity: Vector.one };
    const startingEntities = { entity };

    const entities = applyVelocity(startingEntities);

    const updatedEntity = entities.entity;
    expect(updatedEntity).toBeDefined();
    expect(updatedEntity.position).toEqual(Vector.one);
  });
});