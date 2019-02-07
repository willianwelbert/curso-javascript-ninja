/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var cincoAleatorios = [22, 33, 44, 55, 66];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(cincoAleatorios)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArrayThrougIndex(array, indexNumber) {
  return array[indexNumber];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const cincoTipos = ["string", 99, true, 1.3, function() {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getArrayThrougIndex(cincoTipos, 0);
getArrayThrougIndex(cincoTipos, 1);
getArrayThrougIndex(cincoTipos, 2);
getArrayThrougIndex(cincoTipos, 3);
getArrayThrougIndex(cincoTipos, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
  var library = {
    carrie: {
      nome: "Carrie, a estranha",
      quantidadePaginas: 200,
      autor: "Stephen King",
      editora: "Intrínseca"
    }
  };

  return name !== undefined ? library[name] : library;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  "O livro " +
    book("carrie").nome +
    " tem " +
    book("carrie").quantidadePaginas +
    " páginas"
);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  "o autor do livro " + book("carrie").nome + " é " + book("carrie").autor
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "O livro " +
    book("carrie").nome +
    " foi publicado pela editora " +
    book("carrie").editora
);
