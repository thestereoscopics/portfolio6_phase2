function Dice() {

}

var eachDie = new Dice()

eachDie.addDieOnClick = function() {
  $('#roller button.add_dice').on('click', function() { 
    eachDie.addDie();
  });
}

eachDie.addDie = function (){
  var myDie = $('<div class="die">0</div>')
  myDie.appendTo('.dice')

  $(myDie).on('click', function() {
    yahtzee.rollDie(myDie)
  });
}

function YahtzeeCup() {

}

var yahtzee = new YahtzeeCup()

yahtzee.getRandomValue = function() {
  return Math.floor((Math.random()*6)+1);
}

yahtzee.rollDie = function(die) {
  $(die).text(yahtzee.getRandomValue());
}

yahtzee.rollAllDie = function() {
  $('.die').each(function(k, die) {
    yahtzee.rollDie(die);
  });
}

yahtzee.rollAllDieOnClick = function() {
  $('#roller button.roll_dice').on('click', function() {
    yahtzee.rollAllDie();
  });
}

$(document).ready(function() {
  eachDie.addDieOnClick()
  yahtzee.rollAllDieOnClick()
});
