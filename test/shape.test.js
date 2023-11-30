const { Rectangle, Square, Circle, Triangle } = require('../lib/shape');

// Created one function to test the functionality of one shape
describe('Rectangle', () => {
  describe('render', () => {
    it('should return rectangle', () => {
          const myRectangle = `<svg width="200" height="150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="200" height="150" stroke="black" fill="Blue" stroke-width="4"/>
                    <text x="100" y="75" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="White">SVG</text>   
                    </svg>`;
         const createRectange = new Rectangle("150", "200", "Blue", "White", "SVG");
         console.log(123);
         console.log(createRectange.render());
          expect(createRectange.render()).toEqual(myRectangle);
    });
  });
});

