( function ( win, doc ) {
  "use strict";
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  //all buttons
  var $numbers = doc.querySelectorAll( ".number" );

  //buttons signs
  var $buttonErase = doc.querySelector( "[data-calc='erase']" );
  var $buttonEquals = doc.querySelector( "[data-calc='equals']" );
  var $operators = doc.querySelectorAll( ".operator" );
  // signs end

  var $display = doc.querySelector( "[data-calc='screen']" );

  var totalNumbers = $numbers.length;

  for ( var i = 0; i < totalNumbers; i++ ) {
    $numbers[ i ].addEventListener(
      "click",
      function () {
        $display.value += this.getAttribute( "data-calc" );
      },
      false
    );
  }

  function isLastItemAnOperation( item ) {
    var operations = [ '+', '-', '*', '/' ];
    var lastItem = item.split( '' ).pop();
    return operations.some( function ( operator ) {
      return operator === lastItem;
    } )
  }

  function removeLastItemIfItIsAnOperator( number ) {
    if ( isLastItemAnOperation( number ) ) {
      return number.slice( 0, -1 );
    }
    return number;
  }

  var totalOperators = $operators.length;

  for ( var i = 0; i < totalOperators; i++ ) {
    $operators[ i ].addEventListener(
      "click",
      function () {
        $display.value = removeLastItemIfItIsAnOperator( $display.value );
        $display.value += this.innerText;
      },
      false
    );
  }

  var stringToOperator = {
    "+": function ( x, y ) {
      return +x + +y;
    },
    "-": function ( x, y ) {
      return +x - +y;
    },
    "*": function ( x, y ) {
      return +x * +y;
    },
    "/": function ( x, y ) {
      return +x / +y;
    }
  };

  $buttonErase.addEventListener(
    "click",
    function () {
      $display.value = "";
    },
    false
  );

  $buttonEquals.addEventListener(
    "click",
    function () {
      removeLastItemIfItIsAnOperator( $display.value );
      //calculation logic
      var allValues = $display.value.match( /\d+[-+*/]?/g );
      // console.log( allValues );
      $display.value = allValues.reduce( function ( accumulated, current ) {
        var firstValue = accumulated.slice( 0, -1 );
        var operator = accumulated.split( '' ).pop();
        var lastValue = removeLastItemIfItIsAnOperator( current );
        var lastOperator = isLastItemAnOperation( current ) ? current
          .split( '' ).pop() : '';
        switch ( operator ) {
          case '+':
            return ( Number( firstValue ) + Number( lastValue ) ) +
              lastOperator;
          case '-':
            return ( Number( firstValue ) - Number( lastValue ) ) +
              lastOperator;
          case '*':
            return ( Number( firstValue ) * Number( lastValue ) ) +
              lastOperator;
          case '/':
            return ( Number( firstValue ) / Number( lastValue ) ) +
              lastOperator;
        }
      } )
    },
    false
  );
} )( window, document );
