const updatePlayerPosition = (entities, position) => {
  return {
    ...entities,
    player: {
      ...entities.player,
      position
    }
  };
};

const movePlayer = (entities, { touches }) => {
  if (touches.length) {
    const { pageX, pageY } = touches[0].event;
    return updatePlayerPosition(entities, { x: pageX, y: pageY });
  } else {
    return entities;
  }
};

export default movePlayer;
