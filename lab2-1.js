// Функція перевірки, чи є число цілим
function isInteger(num) {
    return Number.isInteger(num);
}

// Приклади перевірки з методички:
console.log(isInteger(1));     // true
console.log(isInteger(1.5));   // false
console.log(isInteger(-0.5));  // false


// Функція для пошуку простих чисел на інтервалі [a, b]
function findPrimes(a, b) {
    console.log(`Прості числа в інтервалі від ${a} до ${b}:`);
    for (let i = a; i <= b; i++) {
        if (i < 2) continue;
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

// Виклик функції для демонстрації (наприклад, на інтервалі від 1 до 20)
findPrimes(1, 20);