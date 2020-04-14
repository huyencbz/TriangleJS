//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  matchingSides() {
    if (this.a == this.b && this.b == this.c) return 3;
    if (this.a == this.b || this.a == this.c || this.b == this.c) return 2;
    return 0;
  }

  hasTriangleInequality() {
    const maxLengthSide = Math.max(this.a, this.b, this.c);
    return this.a + this.b + this.c - maxLengthSide * 2 >= 0;
    // let [a,b,c] = this.sides.sort();
    // return a + b >= c
  }

  isEquilateral() {
    return this.matchingSides() == 3 && this.a > 0;
  }

  isIsosceles() {
    return (
      (this.matchingSides() == 2 || this.matchingSides() == 3) &&
      this.hasTriangleInequality()
    );
  }
  isScalene() {
    return this.matchingSides() == 0 && this.hasTriangleInequality();
  }
}
