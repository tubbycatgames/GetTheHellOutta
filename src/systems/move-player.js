import { Player } from "../renderers";

const getPlayer = entities => {
  return Object.entries(entities).find(
    ([id, entity]) => entity.id == Player.id
  );
};

const updateEntity = (entities, id, entity) => {
  return {
    ...entities,
    [id]: entity
  };
};

const movePlayer = (entities, { touches }) => {
  if (touches.length) {
    const [id, player] = getPlayer(entities);
    const { pageX, pageY } = touches[0].event;
    const position = [pageX, pageY];

    return updateEntity(entities, id, {
      ...player,
      position
    });
  } else {
    return entities;
  }
};

export default movePlayer;
