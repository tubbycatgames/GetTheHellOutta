import { Vector } from "../components";

const applyVelocity = (entities, { time }) => {
  const movingEntities = Object.entries(entities).filter(
    entity => entity[1].velocity && entity[1].position
  );

  if (movingEntities.length) {
    const updatedEntities = { ...entities };
    movingEntities.forEach(([id, entity]) => {
      const positionChange = Vector.mult(entity.velocity, time.delta / 1000);
      updatedEntities[id] = {
        ...entity,
        position: Vector.add(entity.position, positionChange)
      };
    });
    return updatedEntities;
  } else {
    return entities;
  }
};

export default applyVelocity;
