function play(){
  var player1 = 0;
  var player2 = 0;

  var $head = $('head');
  var $body = $('body');
  $('head').append('<link rel="stylesheet" type="text/css" href="css/style.css">');

  var currentPlayer = $('players').val();
  document.getElementById('result').innerHTML = player1;
  $('#players').change(function(){
    var currentPlayer = $(this).val();
    $("#my-img").attr('src', 'img/pic-'+currentPlayer+'.jpg');
  });

  $('#my-img').click(function(e) {
    if(currentPlayer == 0){
      player1++;
      document.getElementById('result').innerHTML = player1;
    } else {
      player2++;
      document.getElementById('result').innerHTML = player2;
    }
  });
}



window.onload = function() {
  play();
};

// var gr2 = document.getElementById('img-click-2');
// gr2.addEventListener('click', function(){
//   clickCount2++;
//   document.getElementById('num-clicks-2').innerHTML = clickCount2;
// }, false);

// jQuery
// $('#my-elem').click(function(e) {
//   //the element has been clicked... do stuff here
// });
