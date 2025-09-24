const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 || faltas > 4) {
    return true;
  } else {
    return false;
  }
};

const exibeNome = (nome) => nome;

console.log(exibeNome("João"));
console.log(exibeNome("Maria"));

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(8, 2));
