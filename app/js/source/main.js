(function() {
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('#btn').click(doStuff);
    $('#btnTwo').click(doMoreStuff);
    $('#btnThree').click(doEvenMore);
    $('#btnFour').click(doEvenMoreStuff);
    $('#btnFive').click(doAllTheStuff);
    $('#btnSix').click(doStuff6);
    $('#btnSeven').click(doStuff7);
  }

  function doStuff(){
    $('h1').css('color', 'red');
    $('h2').css('background-color', '#ef3');
    $('h3').text('Wes Mangum');
  }

  function doMoreStuff() {
    $('#btn').text('Walker');
  }

  function doEvenMore() {
    $('body').addClass('alert');
  }

  function doEvenMoreStuff() {
    $('body').removeClass('alert');
  }

  function doAllTheStuff() {
    $('body').toggleClass('alert');
  }

  function doStuff6() {
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }

  function doStuff7() {
    var x = $('#tb1').val();
    $('h2').css('color', x);
  }

})();
