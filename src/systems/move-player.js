import { Player } from "../renderers";

const updateEntity = (entities, id, entity) => {
  return {
    ...entities,
    [id]: entity
  };
};

const movePlayer = (entities, { touches }) => {
  if (touches.length) {
    const player = entities[Player.id];

    const { pageX, pageY } = touches[0].event;
    const position = { x: pageX, y: pageY };

    return updateEntity(entities, Player.id, {
      ...player,
      position
    });
  } else {
    return entities;
  }
};

export default movePlayer;
