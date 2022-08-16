/* 
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: 'Lucas',
    noteOne: 1,
    noteTwo: 8
  },
  {
    name: 'Roberta',
    noteOne: 10,
    noteTwo: 7
  },
  {
    name: 'Ana',
    noteOne: 8,
    noteTwo: 9
  },
  {
    name: 'Diego',
    noteOne: 7,
    noteTwo: 6
  },
  {
    name: 'Licon',
    noteOne: 9,
    noteTwo: 7
  }
]

let media

function approved(media) {
  if (media < 7) {
    result = 'Reprovado'
  } else {
    result = 'Aprovado'
  }

  return result
}

function average(note1, note2) {
  media = (note1 + note2) / 2
  return media
}

function stringStudent(student) {
  return `
  ${student.name}, sua média é: ${average(student.noteOne, student.noteTwo)}
  ${approved(media)}
  `
}

for (let student of students) {
  let mensage = stringStudent(student)
  alert(mensage)
}
