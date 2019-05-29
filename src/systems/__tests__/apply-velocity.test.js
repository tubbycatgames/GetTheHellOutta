import applyVelocity from "../apply-velocity";

describe("applyVelocity", () => {
  it("should keep entities static without velocity", () => {
    const entity = { position: { x: 0, y: 0 } };
    const startingEntities = { entity };
    const entities = applyVelocity(startingEntities);
    expect(entities).toBe(startingEntities);
  });

  it("should move the entities with velocity", () => {
    const entity = { position: { x: 0, y: 0 }, velocity: { x: 1, y: 1 } };
    const startingEntities = { entity };

    const entities = applyVelocity(startingEntities);

    const updatedEntity = entities.entity;
    expect(updatedEntity).toBeDefined();
    expect(updatedEntity.position).toEqual({ x: 1, y: 1 });
  });
});
