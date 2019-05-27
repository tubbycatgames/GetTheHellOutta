const MoveDot = (entities, { touches }) => {
  const updatedEntities = { ...entities };

  touches
    .filter(t => t.type === "move")
    .forEach(t => {
      const finger = updatedEntities[t.id];
      if (finger && finger.position) {
        const [oldX, oldY] = finger.position;
        finger.position = [oldX + t.delta.pageX, oldY + t.delta.pageY];
      }
    });

  return updatedEntities;
};

export default MoveDot;
