//Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное(второй параметр, по умолчанию - 4) количество букв

function filterWordByLength(
  words: string[],
  length: number = 4
): string[] {
    const result = words.filter((word) => {
    const isCorrectLength = word.length === length;
    const onlyLetters = /^[a-zA-Zа-яА-ЯёЁ]+$/.test(word);

    return isCorrectLength && onlyLetters;
  });

  if (result.length === 0) {
    throw new Error(
      `Не найдено ни одного слова длиной ${length} из букв (Aa-Zz, Аа-Яя)`
    );
  }

  return result;
}


const words = ['test', 'dog', 'tesing', 'код', 'cats', 'ts'];
console.log(filterWordByLength(words));      
console.log(filterWordByLength(words, 3));
