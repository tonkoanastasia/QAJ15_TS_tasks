//Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление.

export class Calculator {
  add(...a: number[]): number {
    return a.reduce((acc, current) => acc + current, 0);
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(...a: number[]): number {
    const def = a.length === 0 ? 0 : 1;
    return a.reduce((acc, current) => acc * current, def);
  }
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Нельзя делить на ноль');
    }
    return a / b;
  }
}

const mycalculator = new Calculator();
console.log(mycalculator.add(2, 3));
console.log(mycalculator.divide(10, 2));
console.log(mycalculator.add(2, 3, 4));
console.log(mycalculator.multiply(2, 3, 6));
