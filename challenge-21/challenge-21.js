/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(win, doc) {
  $cron = doc.querySelector("input");
  $startButton = doc.querySelector('[data-cron="start"]');
  $stopButton = doc.querySelector('[data-cron="stop"]');
  $resetButton = doc.querySelector('[data-cron="reset"]');

  var counter = $cron.value;
  var timeoutID;

  $startButton.addEventListener("click", counting, false);
  $stopButton.addEventListener("click", killCount, false);
  $resetButton.addEventListener("click", resetCounter, false);

  function counting() {
    $cron.value = counter++;
    timeoutID = setTimeout(counting, 1000);
  }

  function killCount() {
    clearTimeout(timeoutID);
  }

  function resetCounter() {
    killCount();
    counter = 0;
    $cron.value = 0;
  }
})(window, document);
