//Создайте функцию для эмуляции броска кубика.На входе - колчество граней. На выходе - результат броска.Реализация должна работать только со следующим количеством граней(но в будущем должно быть легко расширить этот набор): 2, 4, 6, 8, 10, 12, 20, 100//

let diceSides:number[] = [2,4,6,8,10,12,20,100]
function addSide (side:number){
diceSides.push(side)
}
function rollDice (diceSide:number):number{
  if (diceSides.includes (diceSide)){
    return Math.floor(Math.random() * diceSide)+1;
  }
    throw Error ("This side isn't supported");

}
console.log(rollDice(100));
