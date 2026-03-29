//Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер”//

function addSuper(value: string = 'котик'): string {
  const containsCyrillic = /^[а-яёА-ЯЁ]+$/.test(value);
  const containsLatin = /^[a-zA-Z]+$/.test(value);

  if (containsCyrillic === containsLatin) {
    throw Error('Строка должна содержать только кириллицу или только латиницу.');
  }

  if (containsCyrillic) {
    return 'супер' + value;
  }

  return 'super' + value;
}

console.log(addSuper());
console.log(addSuper('test'));
console.log(addSuper('тест'));
console.log(addSuper('5443'));
console.log(addSuper('tesт'));
