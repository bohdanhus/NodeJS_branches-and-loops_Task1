//nom — Nominativ, именительный падеж;
//gen — Genetiv, родительный падеж;
//plu — Plural, множественное число.
// Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше
function Plural(n, nom, gen, plu) {  
  if (n % 10 === 1 && n % 100 !== 11) {
    return `${n} ${nom}`;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return `${n} ${gen}`;
  } else {
      return `${num} ${plu}`
  } 
};
console.log(Plural(22,'плюс', 'плюса', 'плюсов'))

// Функция подсчета суммы в диапазоне целых чисел
function summAreaCalculate(fisrt,second) {
  let lower = Math.min(fisrt,second);
  let upper = Math.max(fisrt,second);
  let result = 0;
  for (let i = lower; i <= upper; i++){
	result = result + i;
  }
  return result
}

console.log(summAreaCalculate(1,11));

// Функция подсчета факториала до заданного элемента
function factorialCalculate(number) {
    let result = 1;
    for(let counter = 1; counter<=number; counter++){
        result = result * counter
    }
    return result;
}
//console.log(factorialCalculate(3));

