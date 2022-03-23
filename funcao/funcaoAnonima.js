const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(2, 3, soma)
imprimirResultado(2, 3, function(x, y) {
    return x - y
})
imprimirResultado(2, 3, (x, y) => x * y)

const pessoa = {
    fala: function() {
        console.log('Opa!')
    }
}
pessoa.fala()