import Vector from "../Vector";

describe("Vector", () => {
  it("should support adding two vectors", () => {
    const vector = Vector.add(Vector.zero, new Vector(1, 2));
    expect(vector.x).toEqual(1);
    expect(vector.y).toEqual(2);
  });

  it("should support multiplying a vector by a constant", () => {
    const vector = Vector.mult(new Vector(2, 3), 4);
    expect(vector.x).toEqual(8);
    expect(vector.y).toEqual(12);
  });
});
