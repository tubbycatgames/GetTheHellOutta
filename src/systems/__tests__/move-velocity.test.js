import moveVelocity from "../move-velocity";

describe("moveVelocity", () => {
  const entityId = "3";

  it("should keep entities static without velocity", () => {
    const entity = { position: { x: 0, y: 0 } };
    const startingEntities = {
      [entityId]: entity
    };
    const entities = moveVelocity(startingEntities);
    expect(entities).toBe(startingEntities);
  });

  it("should move the entities with velocity", () => {
    const entity = { position: { x: 0, y: 0 }, velocity: { x: 1, y: 1 } };
    const startingEntities = {
      [entityId]: entity
    };

    const entities = moveVelocity(startingEntities);

    const updatedEntity = entities[entityId];
    expect(updatedEntity).toBeDefined();
    expect(updatedEntity.position).toEqual({ x: 1, y: 1 });
  });
});
