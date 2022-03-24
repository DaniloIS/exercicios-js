const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
console.log(alunos.map(aluno => aluno.bolsista).reduce((result, bolsista) => {console.log(result, bolsista); return result && bolsista}))

// Desafio 2: Algum aluno é bolsista?
console.log(alunos.map(aluno => aluno.bolsista).reduce((result, bolsista) => {console.log(result, bolsista); return result || bolsista}))