import { Vector } from "../components";
import { Zoomer } from "../renderers";

export const color = "#ff4040";
export const emissionGapMs = 500;
export const maxZoomers = 20;
export const velocity = 100;

const generateZoomerMovement = ({ height, width }) => {
  let posX, posY, velX, velY;

  const side = Math.random() * 4;
  if (side > 3) {
    // Left
    posX = -10;
    posY = Math.random() * height;
    velX = velocity;
    velY = 0;
  } else if (side > 2) {
    // Bottom
    posX = Math.random() * width;
    posY = height + 10;
    velX = 0;
    velY = -velocity;
  } else if (side > 1) {
    // Right
    posX = width + 10;
    posY = Math.random() * height;
    velX = -velocity;
    velY = 0;
  } else {
    // Top
    posX = Math.random() * width;
    posY = -10;
    velX = 0;
    velY = velocity;
  }

  return [new Vector(posX, posY), new Vector(velX, velY)];
};

const createZoomer = (screen, createdAt) => {
  const [position, velocity] = generateZoomerMovement(screen);
  return {
    color,
    createdAt,
    position,
    renderer: Zoomer,
    velocity
  };
};

const emitZoomer = (entities, { screen, time }) => {
  const zoomers = Object.values(entities).filter(
    ({ renderer }) => renderer === Zoomer
  );
  const zoomerCount = zoomers.length;

  if (zoomerCount < maxZoomers) {
    const lastZoomerCreationTime = zoomers
      .map(z => z.createdAt)
      .reduce((acc, value) => Math.max(acc, value), 0);
    const isZoomerDue = lastZoomerCreationTime + emissionGapMs < time.current;
    if (isZoomerDue) {
      return {
        ...entities,
        ["zoomer" + time.current]: createZoomer(screen, time.current)
      };
    }
  }
  return entities;
};

export default emitZoomer;
