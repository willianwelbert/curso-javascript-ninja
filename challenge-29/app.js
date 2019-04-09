( function ( DOM, doc ) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var ajax = new XMLHttpRequest();
  ajax.open( 'GET', 'company.json', true )
  ajax.onload = function () {
    var response = JSON.parse( this.responseText );
    var companyDataParagraph = doc.createElement( 'p' );
    var companyDataText = `${response.name} | ${response.phone}`;
    companyDataParagraph.append( companyDataText );
    doc.querySelector( '.header' ).appendChild( companyDataParagraph );
  }
  ajax.send();

  var $imageURLinput = new DOM( '[data-js="image"]' );
  var $carModelinput = new DOM( '[data-js="brand-model"]' );
  var $carYearinput = new DOM( '[data-js="year"]' );
  var $carPlateinput = new DOM( '[data-js="plate"]' );
  var $carColorinput = new DOM( '[data-js="color"]' );
  var $registerButton = new DOM( '[data-js="register"]' );

  var $catalog = new DOM( '.catalog-body' );

  //função makeCatalogCell = para repetir var newImageCell = doc.createElement( 'td' ); -> var imagevalue = $imageURLinput.get()[ 0 ].value;

  $registerButton.on( 'click', function ( e ) {
    e.preventDefault();
    console.log( 'cadastro' );
    var newLine = doc.createElement( 'tr' );
    var newImageCell = doc.createElement( 'td' );
    var imagevalue = $imageURLinput.get()[ 0 ].value;
    newImageCell.append( imagevalue );
    newLine.append( newImageCell );
    $catalog.get()[ 0 ].append( newLine );

  } )


} )( window.DOM, document );
