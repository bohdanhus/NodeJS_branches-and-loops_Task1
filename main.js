// Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше

// Функция подсчета суммы в диапазоне целых чисел
function summCalculate(a, n) {
    let counter = Math.max(a,n) - Math.min(a,n)
    let result = 0;
    for (let i = 0; k <= counter; k++)
    result = 
}
console.log(summCalculate(1,7))
//console.log(summCalculate(10,5))
// Функция подсчета факториала до заданного элемента
function factorialCalculate(number) {
    let result = 1;
    for(let counter = 1; counter<=number; counter++){
        result = result * counter
    }
    return result;
}
console.log(factorialCalculate(3));

