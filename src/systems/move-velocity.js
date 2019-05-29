const moveVelocity = entities => {
  const movingEntities = Object.entries(entities).filter(
    entity => entity[1].velocity && entity[1].position
  );

  if (movingEntities.length) {
    const updatedEntities = { ...entities };
    movingEntities.forEach(([id, entity]) => {
      updatedEntities[id] = {
        ...entity,
        position: {
          x: entity.position.x + entity.velocity.x,
          y: entity.position.y + entity.velocity.y
        }
      };
    });
    return updatedEntities;
  } else {
    return entities;
  }
};

export default moveVelocity;
