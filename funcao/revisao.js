// let e const
{
    let a = 2
    var b = 3
    console.log(a)
}
console.log(b)

// Template String
const prod = 'iPad'
console.log(`${prod} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, ...tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana',idade: 18}
console.log(idade, nome)