//Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер”//

function addSuper (value:any):string {
  return `${value} super`
}
console.log (addSuper('cat')); 
console.log (addSuper(5));
console.log (addSuper(['cat','dog']));
