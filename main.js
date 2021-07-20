// Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше
//nom — Nominativ, именительный падеж;
//gen — Genetiv, родительный падеж;
//plu — Plural, множественное число.
const titles = ['плюс', 'плюса', 'плюсов']

console.log(Plural(12, titles));
function Plural(num, titles) {  

 let result;
 let n = num % 100;
 let i = num % 10; 
   if (i => 11 && i <= 19) {
 	result = titles[0];
 } else if (num == 0) {
 	result = ['Число должно быть больше единицы'];
 } else if (i == 1) {
 	result = titles[0];
 } else if (i => 2 && i <= 4) {
 	result = titles[1];
 } else if (i => 5 && i <= 10) {
 	result = titles[2];
 } else if (i => 11 && i <= 19) {
 	result = titles[0];
 } else if (i => 2 && i <= 10) {
 	result = titles[2];
 }
 return result
};

// Функция подсчета суммы в диапазоне целых чисел
function summAreaCalculate(arr) {
let lower = Math.min(arr[0], arr[1]);
let upper = Math.max(arr[0], arr[1]);
let result = 0;
for (let i = lower; i <= upper; i++){
	result = result + i;
    }
}

console.log(summAreaCalculate(2,6));

// Функция подсчета факториала до заданного элемента
function factorialCalculate(number) {
    let result = 1;
    for(let counter = 1; counter<=number; counter++){
        result = result * counter
    }
    return result;
}
console.log(factorialCalculate(3));

