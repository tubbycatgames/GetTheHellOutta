import { Vector } from "../../components";

import { center } from "../utils";

describe("systems utility functions", () => {
  describe("center", () => {
    it("should return the center of a screen", () => {
      const screen = { height: 200, width: 300 };
      expect(center(screen)).toEqual(new Vector(150, 100));
    });
  });
});
