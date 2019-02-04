function charStats() {
  this.agility = 0;
  this.intelligence = 0;
  this.charisma = 0;
  this.strength = 0;
}

charStats.prototype.pushStat = function(input) {
  if (input == "a") {
    this.agility += 15;
  } else if (input == "i") {
    this.intelligence += 15;
  } else if (input == "c") {
    this.charisma += 15;
  } else if (input == "s") {
    this.strength += 15;
    }
  }





$(document).ready(function () {
  var playerCharStats = new charStats
  $('#submit-action').click(function(event) {
    event.preventDefault();
    var stat = $("input:radio[name=scene-select-1]:checked").val();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

    // $(".test").text(playerCharStats.agility);



});



});
