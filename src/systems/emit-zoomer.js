import { Vector } from "../components";
import { Zoomer } from "../renderers";

export const emissionGapMs = 500;
export const maxZoomers = 20;

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
      const x = Math.random() * screen.width;
      return {
        ...entities,
        ["zoomer" + time.current]: {
          color: "#ff4040",
          createdAt: time.current,
          position: new Vector(x, -20),
          renderer: Zoomer,
          velocity: new Vector(0, 100)
        }
      };
    }
  }
  return entities;
};

export default emitZoomer;
