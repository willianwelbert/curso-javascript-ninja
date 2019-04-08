( function () {
  'use strict';
  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/",

    'http://apps.widenet.com.br/busca-cep/api-de-consulta'

    onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

  var ajax = new XMLHttpRequest();
  var URL_API = `http://apps.widenet.com.br/busca-cep/api/cep.json?code=`;

  var $inputCEP = document.querySelector( '[data-js="CEPInput"]' );
  var $buttonCEP = document.querySelector( '[data-js="CEPButton"]' );
  var $feedback = document.querySelector( '.feedback' );

  var $responseAddress = document.querySelector( '[value="address"]' );
  var $responseDistrict = document.querySelector( '[value="district"]' );
  var $responseCity = document.querySelector( '[value="city"]' );
  var $responseState = document.querySelector( '[value="state"]' );

  function cleanCEP( cep ) {
    var onlyNumbers = cep.match( /\d/g );
    onlyNumbers.splice( -3, 0, '-' );
    return onlyNumbers.join( '' );
  }




  $buttonCEP.addEventListener( 'click', function () {
    $feedback.innerText = `Buscando informações para o CEP ${cep}...`;
    var cep = cleanCEP( $inputCEP.value );

    ajax.open( 'GET', URL_API + cep, true );
    ajax.onload = function () {
      var response = JSON.parse( this.responseText );
      if ( response.status === 1 ) {
        $feedback.style.color = 'var(--sucess-color)'
        $feedback.innerText = `Endereço referente ao CEP ${cep}:`;

        $responseAddress.value = response.address;
        $responseDistrict.value = response.district;
        $responseCity.value = response.city;
        $responseState.value = response.state;

      }
      if ( response.status === 0 ) {
        $feedback.style.color = 'var(--error-color)'
        $feedback.innerText = `Não encontramos o endereço para o CEP ${cep}.`;
      }
    }
    ajax.send()

  }, false )

} )();
