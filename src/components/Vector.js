export default class Vector {
  static zero = new Vector(0, 0);
  static one = new Vector(1, 1);

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static mult(v, factor) {
    return new Vector(v.x * factor, v.y * factor);
  }

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
}
