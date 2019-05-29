import { Vector } from "../../components";

import cullOutOfBounds from "../cull-out-of-bounds";

const startingEntities = { entity: { position: new Vector(40, 40) } };

describe("cullOutOfBounds", () => {
  it("should ignore entities in bounds", () => {
    const screen = { height: 20, width: 40 };
    const entities = cullOutOfBounds(startingEntities, { screen });

    expect(startingEntities).toBe(entities);
  });

  it("should cull entities out of bounds", () => {
    const screen = { height: 19, width: 40 };
    const entities = cullOutOfBounds(startingEntities, { screen });

    expect(entities).toEqual({});
  });
});
