import { Zoomer } from "../../renderers";

import emitZoomer, { emissionGapMs, maxZoomers } from "../emit-zoomer";

describe("emitZoomer", () => {
  it("should create a zoomer when none present", () => {
    const entities = emitZoomer({}, { time: { current: 654321 } });

    const entity = entities[0];
    expect(entity).toBeDefined();
    expect(entity.renderer).toBe(Zoomer);
  });

  it("should not create a zoomer when too recent", () => {
    const startingEntities = [
      {
        createdAt: 0,
        renderer: Zoomer
      }
    ];

    const current = emissionGapMs - 1;
    const entities = emitZoomer(startingEntities, { time: { current } });

    expect(entities).toBe(startingEntities);
  });

  it("should create a zoomer when enough time elapsed", () => {
    const startingEntities = [
      {
        createdAt: 0,
        renderer: Zoomer
      }
    ];

    const current = emissionGapMs + 1;
    const entities = emitZoomer(startingEntities, { time: { current } });

    expect(Object.keys(entities)).toHaveLength(2);
    expect(entities[1].createdAt).toBe(current);
  });

  it("should not create zoomers if there are too many", () => {
    const startingEntities = {};
    for (let i = 0; i < maxZoomers; i++) {
      startingEntities[i] = {
        createdAt: 0,
        renderer: Zoomer
      };
    }

    const entities = emitZoomer(startingEntities, { time: { current: 0 } });

    expect(entities).toBe(startingEntities);
  });
});
