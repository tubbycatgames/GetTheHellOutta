import { Vector } from "../components";
import { Zoomer } from "../renderers";

const emissionGapMs = 5000;
const maxZoomers = 6;

const emitZoomer = entities => {
  const zoomers = Object.values(entities).filter(
    ({ renderer }) => renderer === Zoomer
  );
  const zoomerCount = zoomers.length;

  const lastZoomerCreationTime = zoomers
    .map(z => z.createdAt)
    .reduce(Math.max, 0);
  const now = Date.now();
  const isZoomerDue = lastZoomerCreationTime + emissionGapMs < now;

  if (zoomerCount < maxZoomers && isZoomerDue) {
    const newEntities = {};
    newEntities[zoomerCount] = {
      createdAt: now,
      position: new Vector(150, 0),
      renderer: Zoomer,
      velocity: new Vector(0, 1)
    };
    return {
      ...entities,
      ...newEntities
    };
  } else {
    return entities;
  }
};

export default emitZoomer;
