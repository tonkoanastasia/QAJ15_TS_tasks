//Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер”//

function addSuper(value?: string): string {
  if (!value) {
    return 'суперкотик';
  }

  const containsCyrillyc = /[а-яёА-ЯЁ]/.test(value);
  const containsLatin = /[a-zA-Z]/.test(value);

  if (containsCyrillyc && !containsLatin) {
    return 'супер ' + value;
  }

  if (containsLatin && !containsCyrillyc) {
    return 'super ' + value;
  }

  throw Error('Строка должна содержать только кириллицу или только латиницу.');
}

console.log(addSuper());
console.log(addSuper('test'));
console.log(addSuper('тест'));
console.log(addSuper('5443'));
console.log(addSuper('tesт'));
