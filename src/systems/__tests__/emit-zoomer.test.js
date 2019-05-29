import { Zoomer } from "../../renderers";

import emitZoomer, { emissionGapMs, maxZoomers } from "../emit-zoomer";

describe("emitZoomer", () => {
  it("should create a zoomer when none present", () => {
    const current = 654321;
    const entities = emitZoomer({}, { time: { current } });

    expect(Object.keys(entities)).toHaveLength(1);
    const zoomer = entities["zoomer" + current];
    expect(zoomer).toBeDefined();
    expect(zoomer.renderer).toBe(Zoomer);
  });

  it("should not create a zoomer when too recent", () => {
    const startingEntities = [{ createdAt: 0, renderer: Zoomer }];

    const current = emissionGapMs - 1;
    const entities = emitZoomer(startingEntities, { time: { current } });

    expect(entities).toBe(startingEntities);
  });

  it("should create a zoomer when enough time elapsed", () => {
    const startingEntities = [{ createdAt: 0, renderer: Zoomer }];

    const current = emissionGapMs + 1;
    const entities = emitZoomer(startingEntities, { time: { current } });

    expect(Object.keys(entities)).toHaveLength(2);
    expect(entities["zoomer" + current].createdAt).toBe(current);
  });

  it("should not create zoomers if there are too many", () => {
    const startingEntities = {};
    for (let i = 0; i < maxZoomers; i++) {
      startingEntities["zoomer" + i] = { createdAt: 0, renderer: Zoomer };
    }

    const entities = emitZoomer(startingEntities, { time: { current: 0 } });

    expect(entities).toBe(startingEntities);
  });
});
