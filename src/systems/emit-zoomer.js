import { Vector } from "../components";
import { Zoomer } from "../renderers";

export const emissionGapMs = 1000;
export const maxZoomers = 6;

const emitZoomer = (entities, { time }) => {
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
        ["zoomer" + time.current]: {
          createdAt: time.current,
          position: new Vector(150, 0),
          renderer: Zoomer,
          velocity: new Vector(0, 100)
        }
      };
    }
  }
  return entities;
};

export default emitZoomer;
