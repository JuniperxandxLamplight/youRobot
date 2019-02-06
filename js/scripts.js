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
    this.humanity += 15;
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
      this.humanity += 18;
      }
    }




charStats.prototype.decideEnd = function() {
  if (this.agility > this.intelligence && this.agility > this.charisma && this.agility > this.strength && this.agility > this.humanity) {
    return "#ending-a";
  } else if (this.strength > this.intelligence && this.strength > this.charisma && this.strength > this.agility && this.strength > this.humanity) {
    return "#ending-s";
  }else if (this.charisma > this.intelligence && this.charisma > this.agility && this.charisma > this.strength && this.charisma > this.humanity) {
    return "#ending-c";
  }else if (this.intelligence > this.charisma && this.intelligence > this.strength && this.intelligence > this.agility && this.intelligence > this.humanity) {
    return "#ending-i";
  }else if (this.humanity > this.charisma && this.humanity > this.strength && this.humanity > this.agility && this.humanity > this.intelligence) {
    return "#ending-h";
  }



}
