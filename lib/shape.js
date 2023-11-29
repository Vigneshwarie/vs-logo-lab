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

     render() {
          return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="${this.breadth}" height="${this.length}" stroke="black" fill="${this.fillColor}" stroke-width="5"/>
                    </svg>`;
     }
}


class Circle extends Shapes {
     constructor(radius, fillColor, textColor) {
          super(fillColor, textColor);
          this.radius = radius;
     }
}


module.exports = Rectangle;