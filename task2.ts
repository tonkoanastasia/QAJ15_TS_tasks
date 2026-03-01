//Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений//

function createRandomArray(length: number, minNumber: number, maxNumber: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    arr.push(randomNumber);
  }

  return arr;
}
function multiplyBiggest3 (arr:number[]): number {
arr.sort ((value1,value2) =>value2 -value1);
  return arr[0]*arr[1]*arr[2]
}
const array:number[] = createRandomArray(10,5,20);
console.log (array);
console.log (multiplyBiggest3(array));