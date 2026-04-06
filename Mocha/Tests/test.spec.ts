import { Calculator } from '../../task5';
import { expect } from 'chai';
describe('testcalculator', function () {
  let calc: Calculator;
  let testCounter = 0;

  beforeEach(() => {
    testCounter++;
    console.log(`This is test #${testCounter}`);
    calc = new Calculator();
  });

  after(() => {
    console.log(`Total quantity of tests #${testCounter}`);
  });

  describe('add functionality', function () {
    it('add two positive numbers', function () {
      const result = calc.add(2, 3);
      expect(result).to.equal(5);
    });

    it('add negative and positive numbers', function () {
      const result = calc.add(-3, 10);
      expect(result).to.equal(7);
    });

    it('add 2+ numbers', function () {
      const result = calc.add(1, 2, 2, 8);
      expect(result).to.equal(13);
    });

    it('return 0 if called without arguments', function () {
      const result = calc.add();
      expect(result).to.equal(0);
    });

    it('add 0 to positive number', function () {
      expect(calc.add(0, 9)).to.equal(9);
      expect(calc.add(0, 0)).to.equal(0);
    });
  });

  describe('divide functionality', function () {
    it('divide positive numbers', function () {
      const result = calc.divide(10, 5);
      expect(result).to.equal(2);
    });

    it('divide negative by positive', function () {
      const result = calc.divide(-6, 3);
      expect(result).to.equal(-2);
    });

    it('divide positive by negative number', function () {
      const result = calc.divide(10, -2);
      expect(result).to.equal(-5);
    });

    it('return 0 when first number is 0', function () {
      const result = calc.divide(0, 5);
      expect(result).to.equal(0);
    });

    it('handle non0integer in result', function () {
      const result = calc.divide(5, 2);
      expect(result).to.equal(2.5);
    });

    it('divide non-integers', function () {
      const result = calc.divide(0.3, 0.1);
      expect(result).to.be.closeTo(3, 0.000001);
    });

    it('throw error when dividing by zero', function () {
      expect(() => calc.divide(10, 0)).to.throw('Нельзя делить на ноль');
    });
  });
});
