//Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление.

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
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
