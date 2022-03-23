// Funcao em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo de objeto
const obj = {}
obj.fala = function() { return 'Olá' }
console.log(obj.fala())

// Passando função como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

// Uma função pode retornar/conter um função
function sum(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(5)
const cincoMais = sum(2, 3)
cincoMais(4)