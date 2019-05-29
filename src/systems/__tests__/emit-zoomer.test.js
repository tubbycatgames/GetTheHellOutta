import { Zoomer } from "../../renderers";

import emitZoomer from "../emit-zoomer";

describe("emitZoomer", () => {
  it("should create a zoomer when none present", () => {
    const entities = emitZoomer({});

    const entity = entities[0];
    expect(entity).toBeDefined();
    expect(entity.renderer).toBe(Zoomer);
  });
});
