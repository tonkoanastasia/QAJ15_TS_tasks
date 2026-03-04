// Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity//

function purchasePrice(goods: { name: string; price: number; quantity: number }[]): number {
  let totalSum = 0;

  for (const order of goods) totalSum += order.price * order.quantity;
  return totalSum;
}

const goods = [
  { name: 'phone', price: 500, quantity: 1 },
  { name: 'book', price: 10, quantity: 2 },
  { name: 'laptop', price: 1000, quantity: 2 },
];

console.log(purchasePrice(goods));
