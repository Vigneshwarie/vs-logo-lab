class Shapes {
     constructor(fillColor, textColor) {
          this.fillColor = fillColor;
          this.textColor = textColor;
     }
}


class Square extends Shapes {
     constructor(length, fillColor, textColor) {
          super(fillColor, textColor);
          this.length = length;
     }
}

class Rectangle extends Shapes {
     constructor(length, breadth, fillColor, textColor) {
          super(fillColor, textColor);
          this.length = length;
          this.breadth = breadth;
     }
}


class Circle extends Shapes {
     constructor(radius, fillColor, textColor) {
          super(fillColor, textColor);
          this.radius = radius;
     }
}


module.exports = Shapes;