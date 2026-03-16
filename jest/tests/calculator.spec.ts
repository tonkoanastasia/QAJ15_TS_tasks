import { Calculator } from '../../task5';

describe('testcalculator', () => {
  let calc: Calculator;
  let testCounter = 0;

  beforeEach(() => {
    testCounter++;
    console.log(`This is test #${testCounter}`);
    calc = new Calculator();
  });

  afterAll(() => {
    console.log(`Total quantity of tests #${testCounter}`);
  });

  describe('add functionality', () => {
    it('add two positive numbers', () => {
      const result = calc.add(2, 3);
      expect(result).toBe(5);
    });

    it('add negative and positive numbers', () => {
      const result = calc.add(-3, 10);
      expect(result).toBe(7);
    });

    it('add 2+ numbers', () => {
      const result = calc.add(1, 2, 2, 8);
      expect(result).toBe(13);
    });

    it('return 0 if called without arguments', () => {
      const result = calc.add();
      expect(result).toBe(0);
    });

    it('add 0 to positive number', () => {
      expect(calc.add(0, 9)).toBe(9);
      expect(calc.add(0, 0)).toBe(0);
    });
  });

  describe('divide functionality', () => {
    it('divide positive numbers', () => {
      const result = calc.divide(10, 5);
      expect(result).toBe(2);
    });

    it('divide negative by positive', () => {
      const result = calc.divide(-6, 3);
      expect(result).toBe(-2);
    });

    it('divide positive by negative number', () => {
      const result = calc.divide(10, -2);
      expect(result).toBe(-5);
    });

    it('return 0 when first number is 0', () => {
      const result = calc.divide(0, 5);
      expect(result).toBe(0);
    });

    it('handle non0integer in result', () => {
      const result = calc.divide(5, 2);
      expect(result).toBe(2.5);
    });

    it('divide non-integers', () => {
      const result = calc.divide(0.3, 0.1);
      expect(result).toBeCloseTo(3, 0.000001);
    });

    it('throw error when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Нельзя делить на ноль');
    });
  });
});
