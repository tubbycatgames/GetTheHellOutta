const sideBuffer = 20;

const cullOutOfBounds = (entities, { screen }) => {
  const outOfBoundsEntities = Object.entries(entities).filter(idAndEntity => {
    if (idAndEntity[1].position) {
      const { x, y } = idAndEntity[1].position;
      return (
        x < -sideBuffer ||
        x > screen.width + sideBuffer ||
        y < -sideBuffer ||
        y > screen.height + sideBuffer
      );
    } else {
      return false;
    }
  });

  if (outOfBoundsEntities.length) {
    const updatedEntities = { ...entities };
    outOfBoundsEntities.forEach(([id]) => delete updatedEntities[id]);
    return updatedEntities;
  } else {
    return entities;
  }
};

export default cullOutOfBounds;
