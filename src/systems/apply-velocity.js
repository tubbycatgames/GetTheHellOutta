import { Vector } from "../components";

const applyVelocity = entities => {
  const movingEntities = Object.entries(entities).filter(
    entity => entity[1].velocity && entity[1].position
  );

  if (movingEntities.length) {
    const updatedEntities = { ...entities };
    movingEntities.forEach(([id, entity]) => {
      updatedEntities[id] = {
        ...entity,
        position: Vector.add(entity.position, entity.velocity)
      };
    });
    return updatedEntities;
  } else {
    return entities;
  }
};

export default applyVelocity;
