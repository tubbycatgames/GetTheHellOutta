import { Player } from "../renderers";

import { center } from "./utils";

const spawnPlayer = (entities, { screen }) => {
  return entities.player
    ? entities
    : {
        ...entities,
        player: { position: center(screen), renderer: Player }
      };
};

export default spawnPlayer;
