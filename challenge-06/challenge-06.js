/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "paulista";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["São Paulo", "Palmeiras", "Corinthians", "São Caetano", "Santos"];

console.log("Times que estão participando do campeonato:", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
  return position < 6 && position >= 1
    ? `O time que está em ${position}º lugar é o ${teams[position - 1]}.`
    : `Não temos a informação do time que está nessa posição.`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // O time que está em 1º lugar é o São Paulo.
showTeamPosition(4); //  O time que está em 4º lugar é o São Caetano.
showTeamPosition(2); //  O time que está em 2º lugar é o Palmeiras.
showTeamPosition(8); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;

while (counter <= 30) {
  console.log(counter);
  counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
  var hexa;
  switch (cor) {
    case "vermelho":
      hexa = "#ff0000";
      break;
    case "azul":
      hexa = "#0000ff";
      break;
    case "amarelo":
      hexa = "#ffff00";
      break;
    case "verde":
      hexa = "#00ff00";
      break;
    case "roxo":
      hexa = "#551a8b";
      break;
    default:
      return `Não temos o equivalente hexadecimal para ${cor}.`;
  }
  return `O hexadecimal para a cor ${cor} é ${hexa}.`;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex("vermelho"); // O hexadecimal para a cor vermelho é #ff0000.
convertToHex("azul"); //  O hexadecimal para a cor azul é #0000ff.
convertToHex("amarelo"); // O hexadecimal para a cor amarelo é #ffff00.
convertToHex("verde"); //  O hexadecimal para a cor verde é #00ff00.
convertToHex("roxo"); //  O hexadecimal para a cor roxo é #551a8b.
convertToHex("laranja"); // Não temos o equivalente hexadecimal para laranja.
convertToHex("preto"); //  Não temos o equivalente hexadecimal para preto.
convertToHex("branco"); // Não temos o equivalente hexadecimal para branco.
