$(function(){
  var playerCharStats = new charStats
  $("#characterBar h5").click(function(){
    $("#characterBar p").slideToggle();
  });

  $("#scenario1Form").submit(function(event){
    event.preventDefault();
<<<<<<< HEAD
    $("#scenario1").hide();
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    $("#scenario1Outcome-"+stat).show();
    playerCharStats.pushStatFirst(stat)
    console.log(playerCharStats);


  });
  $(".scenario1Complete").click(function(){
    $(".outcome").hide();
    $("#scenario2").show();
=======
    $("#scenario1").slideUp(500);
    $("#scenario1Outcome").fadeIn(500).delay(500);
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    playerCharStats.pushStat(stat)
    $("#agilDisplay").html(playerCharStats.agility);
    $("#strDisplay").html(playerCharStats.strength);
    $("#charDisplay").html(playerCharStats.charisma);
    $("#intDisplay").html(playerCharStats.intelligence);


  });
  $("#scenario1Complete").click(function(){
    $("#scenario1Outcome").slideUp(500);
    $("#scenario2").fadeIn(500).delay(500);
>>>>>>> master

  });
  $("#scenario2Form").submit(function(event){
    event.preventDefault();
<<<<<<< HEAD
    $("#scenario2").hide();
=======
    $("#scenario2").slideUp(500);
    $("#scenario2Outcome").fadeIn(500).delay(500);
>>>>>>> master
    var stat = $("input:radio[name=scenario2Options]:checked").val();
    $("#scenario2Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    $("#agilDisplay").html(playerCharStats.agility);
    $("#strDisplay").html(playerCharStats.strength);
    $("#charDisplay").html(playerCharStats.charisma);
    $("#intDisplay").html(playerCharStats.intelligence);;

  });
<<<<<<< HEAD
  $(".scenario2Complete").click(function(){
    $(".outcome").hide();
    $("#scenario3").show();
=======
  $("#scenario2Complete").click(function(){
    $("#scenario2Outcome").slideUp(500);
    $("#scenario3").fadeIn(500).delay(500);
>>>>>>> master

  });
  $("#scenario3Form").submit(function(event){
    event.preventDefault();
<<<<<<< HEAD
    $("#scenario3").hide();
=======
    $("#scenario3").slideUp(500);
    $("#scenario3Outcome").fadeIn(500).delay(500);
>>>>>>> master
    var stat = $("input:radio[name=scenario3Options]:checked").val();
    $("#scenario3Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    $("#agilDisplay").html(playerCharStats.agility);
    $("#strDisplay").html(playerCharStats.strength);
    $("#charDisplay").html(playerCharStats.charisma);
    $("#intDisplay").html(playerCharStats.intelligence);;

  });
<<<<<<< HEAD
  $(".scenario3Complete").click(function(){
    $(".outcome").hide();
    $("#scenario4").show();
=======
  $("#scenario3Complete").click(function(){
    $("#scenario3Outcome").slideUp(500);
    $("#scenario4").fadeIn(500).delay(500);
>>>>>>> master

  });
  $("#scenario4Form").submit(function(event){
    event.preventDefault();
<<<<<<< HEAD
    $("#scenario4").hide();
=======
    $("#scenario4").slideUp(500);
    $("#scenario4Outcome").fadeIn(500).delay(500);
>>>>>>> master
    var stat = $("input:radio[name=scenario4Options]:checked").val();
    $("#scenario4Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    $("#agilDisplay").html(playerCharStats.agility);
    $("#strDisplay").html(playerCharStats.strength);
    $("#charDisplay").html(playerCharStats.charisma);
    $("#intDisplay").html(playerCharStats.intelligence);;

  });
<<<<<<< HEAD
  $(".scenario4Complete").click(function(){
    var stat = playerCharStats.decideEnd()
    console.log(stat);
    $(stat).show();
=======
  $("#scenario4Complete").click(function(){
    $("#scenario4Outcome").slideUp(500);
    $("#results").fadeIn(500).delay(500);
>>>>>>> master
  });
});
