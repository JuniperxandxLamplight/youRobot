function charStats() {
  this.agility = 0;
  this.intelligence = 0;
  this.charisma = 0;
  this.strength = 0;
  this.humanity = 0;
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
  } else if (input == "h") {
    this.humanity += 1;
    }
  }
  charStats.prototype.pushStatFirst = function(input) {
    if (input == "a") {
      this.agility += 18;
    } else if (input == "i") {
      this.intelligence += 18;
    } else if (input == "c") {
      this.charisma += 18;
    } else if (input == "s") {
      this.strength += 18;
    } else if (input == "h") {
      this.humanity += 1;
      }
    }




charStats.prototype.decideEnd = function() {
  if (this.humanity >= 3){
    return "#ending-h"
  } else if (this.agility > this.intelligence && this.agility > this.charisma && this.agility > this.strength) {
    return "#ending-a";
  } else if (this.strength > this.intelligence && this.strength > this.charisma && this.strength > this.agility) {
    return "#ending-s";
  }else if (this.charisma > this.intelligence && this.charisma > this.agility && this.charisma > this.strength) {
    return "#ending-c";
  }else if (this.intelligence > this.charisma && this.intelligence > this.strength && this.intelligence > this.agility) {
    return "#ending-i";
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
