const applyVelocity = entities => {
  const movingEntities = Object.entries(entities).filter(
    entity => entity[1].velocity && entity[1].position
  );

  if (movingEntities.length) {
    const updatedEntities = { ...entities };
    movingEntities.forEach(([id, entity]) => {
      const position = {
        x: entity.position.x + entity.velocity.x,
        y: entity.position.y + entity.velocity.y
      };
      updatedEntities[id] = {
        ...entity,
        position
      };
    });
    return updatedEntities;
  } else {
    return entities;
  }
};

export default applyVelocity;
