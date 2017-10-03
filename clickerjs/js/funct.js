function play(){

  var grill1 = "Grill 1";
  document.getElementById("name1").innerHTML = grill1;
  var grill2 = "Grill 2";
  document.getElementById("name2").innerHTML = grill2;


  var clickCount1 = 0;
  var clickCount2 = 0;
  var gr1 = document.getElementById('img-click-1');
  gr1.addEventListener('click', function(){
    clickCount1++;
    document.getElementById('num-clicks-1').innerHTML = clickCount1;
  }, false);

  var gr2 = document.getElementById('img-click-2');
  gr2.addEventListener('click', function(){
    clickCount2++;
    document.getElementById('num-clicks-2').innerHTML = clickCount2;
  }, false);
}

window.onload = function() {
  play();
};
