const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log("Reprovado");
} else {
  console.log("Nao foi reprovado por faltas");
}

if (faltas >= 2 && !advertencias) {
  console.log("Recebeu bonus");
} else {
  console.log("Nao foi Recebeu bonus");
}
