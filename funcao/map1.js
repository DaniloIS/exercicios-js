const nums = [1, 2, 3, 4, 5];

// For com propósito
let result = nums.map(num => num * 2)

console.log(result)

const soma10 = num => num + 10;
const triplo = num => num * 3;
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)