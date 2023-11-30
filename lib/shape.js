// The SVG shape details were referred based on the link, https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

//When I started creating the shape superclass and added the subclass as square, rectangle, and circle, I thought of the standard area calculation and applied length, breadth, etc. As I further merged user input, I found they were not required and could be hard coded. However, I didn't change the code and proceeded with that. Hence, please don't mind the unnecessary parameters in each subclass. I corrected that in the Triangle subclass, which I included later.

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
                    <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>   
                    </svg>`;
     }
}

class Triangle extends Shape {
     constructor(fillColor, textColor, fillText) {
          super(fillColor, textColor, fillText);
     }

     render() {
          return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150, 3 250, 190 37, 190" fill="${this.fillColor}" stroke="black" stroke-width="4"/>
                    <text x="150" y="126" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.fillText}</text>
                    </svg>`;
     }
}


module.exports = { Rectangle, Square, Circle, Triangle };