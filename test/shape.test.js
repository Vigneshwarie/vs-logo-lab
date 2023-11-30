const { Rectangle, Square, Circle, Triangle } = require('../lib/shape');

// Created one function to test the functionality of one shape
// This blocks test the rectangle functionality
describe('Rectangle', () => {
  describe('render', () => {
    it('should return rectangle', () => {
          const myRectangle = `<svg width="200" height="150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="200" height="150" stroke="black" fill="Blue" stroke-width="4"/>
                    <text x="100" y="75" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="White">SVG</text>   
                    </svg>`;
         const createRectange = new Rectangle("150", "200", "Blue", "White", "SVG");
          expect(createRectange.render()).toEqual(myRectangle);
    });
  });
});

// This blocks test the square functionality
describe('Square', () => {
  describe('render', () => {
    it('should return square', () => {
          const mySquare = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="200" height="200" stroke="black" fill="Green" stroke-width="4"/>
                    <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="White">SVG</text>   
                    </svg>`;
         const createSquare = new Square("200", "Green", "White", "SVG");
          expect(createSquare.render()).toEqual(mySquare);
    });
  });
});

