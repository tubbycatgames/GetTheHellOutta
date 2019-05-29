import { Zoomer } from "../../renderers";

import emitZoomer, { maxZoomers } from "../emit-zoomer";

describe("emitZoomer", () => {
  it("should create a zoomer when none present", () => {
    const entities = emitZoomer({});

    const entity = entities[0];
    expect(entity).toBeDefined();
    expect(entity.renderer).toBe(Zoomer);
  });

  it("should not create a zoomer when too recent", () => {
    const startingEntities = [
      {
        createdAt: Date.now(),
        renderer: Zoomer
      }
    ];
    const entities = emitZoomer(startingEntities);
    expect(entities).toBe(startingEntities);
  });

  it("should create a zoomer when enough time elapsed", () => {
    const startingEntities = [
      {
        createdAt: 0,
        renderer: Zoomer
      }
    ];
    const entities = emitZoomer(startingEntities);

    expect(Object.keys(entities)).toHaveLength(2);
  });

  it("should not create zoomers if there are too many", () => {
    const startingEntities = {};
    for (let i = 0; i < maxZoomers; i++) {
      startingEntities[i] = {
        createdAt: 0,
        renderer: Zoomer
      };
    }

    const entities = emitZoomer(startingEntities);

    expect(entities).toBe(startingEntities);
  });
});
