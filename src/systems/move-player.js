import { Vector } from "../components";

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
    return updatePlayerPosition(entities, new Vector(pageX, pageY));
  } else {
    return entities;
  }
};

export default movePlayer;
