//1) Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

let texto = "glaubert";
let bool = true;
let num = 5;

console.log(typeof texto);
console.log(typeof bool);
console.log(typeof num);

//2) Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

let nome = "Glaubert";
let sobrenome = " Nunes";
let concatenado = nome + sobrenome;
console.log(concatenado);
let templateString = `${nome}${sobrenome}`;
console.log(templateString);

//3)Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

let numero = 5;
let string = "texto";
let numString = `A combinacao e ${numero} e ${string}`;
console.log(numString);

//4) Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let teste = 25;
console.log(teste);
teste = "Teste";
console.log(teste);

//5)Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var bloco = 10;

if (true) {
  var se = 5;
  console.log(bloco);
  console.log(se);
}

console.log(bloco);
console.log(se);

let bloco1 = 10;

if (true) {
  let se1 = 5;
  console.log(bloco1);
  console.log(se1);
}

console.log(bloco1);
console.log(se1);

//6)Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
