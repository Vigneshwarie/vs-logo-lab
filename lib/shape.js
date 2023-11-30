// The SVG shape details were referred based on the link, https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

class Shape {
     constructor(fillColor, textColor, fillText) {
          this.fillColor = fillColor;
          this.textColor = textColor;
          this.fillText = fillText;
     }
}


class Square extends Shape {
     constructor(length, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.length = length;
     }

     render() {
          return `<svg width="${this.length}" height="${this.length}" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="${this.length}" height="${this.length}" stroke="black" fill="${this.fillColor}" stroke-width="4"/>
                    <text x="${this.length/2}" y="${this.length/2}" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>   
                    </svg>`;
     }
}

class Rectangle extends Shape {
     constructor(length, breadth, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.length = length;
          this.breadth = breadth;
     }

     render() {
          return `<svg width="${this.breadth}" height="${this.length}" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="${this.breadth}" height="${this.length}" stroke="black" fill="${this.fillColor}" stroke-width="4"/>
                    <text x="${this.breadth/2}" y="${this.length/2}" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>   
                    </svg>`;
     }
}


class Circle extends Shape {
     constructor(radius, fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
          this.radius = radius;
     }

     render() {
          return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="${this.radius}" stroke="black" fill="${this.fillColor}" stroke-width="4"/>
                    <text x="150" y="120" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>   
                    </svg>`;
     }
}


module.exports = { Rectangle, Square, Circle };