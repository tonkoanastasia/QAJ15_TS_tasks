//Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное(второй параметр, по умолчанию - 4) количество букв

function filterWords(words: string[], sizeword: number = 4): string[] {
  const regular = /[а-яёa-z]/gi;

  const result = words.filter(word => word.match(regular)?.length === sizeword);

  if (result.length === 0) {
    throw Error(`Не найдено ни одного слова длиной ${sizeword} букв`);
  }

  return result;
}

const words = ['скрипт', 'дом', 'цветок', 'стол', '1234', '12ww', 'dogs', 'java1', '1stop'];

console.log(filterWords(words));
console.log(filterWords(words, 3));
