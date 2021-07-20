//nom — Nominativ, именительный падеж;
//gen — Genetiv, родительный падеж;
//plu — Plural, множественное число.
// Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше
function Plural(num, nom, gen, plu) {  
  if (num % 10 == 0) {
    return `${num} ${plu}`;
  } else if (num == 1) {
    return `${num} ${nom}`;
  } else if (num % 10 > 10 || num % 10 < 20){
	return `${num} ${plu}`;
  } else if (num % 10 >= 2 || num % 10 <= 4){
    return `${num}  ${gen}`;
  } else if (num % 10 >= 5 || num % 10 <= 10){
	return `${num} ${plu}`;
  }
  return; 
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

