// The SVG shape details were referred based on the link, https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

class Shapes {
     constructor(fillColor, textColor, fillText) {
          this.fillColor = fillColor;
          this.textColor = textColor;
          this.fillText = fillText;
     }
}


class Square extends Shapes {
     constructor(length, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.length = length;
     }
}

class Rectangle extends Shapes {
     constructor(length, breadth, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.length = length;
          this.breadth = breadth;
     }

     render() {
          return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="${this.breadth}" height="${this.length}" stroke="black" fill="${this.fillColor}" stroke-width="4"/>
                    <text x="150" y="120" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>   
                    </svg>`;
     }
}


class Circle extends Shapes {
     constructor(radius, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.radius = radius;
     }
}


module.exports = Rectangle;