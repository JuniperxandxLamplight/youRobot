$(function(){
  var playerCharStats = new charStats
  $("#characterBar h5").click(function(){
    $("#characterBar p").slideToggle();
  });

  $("#scenario1Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    playerCharStats.pushStatFirst(stat);
    if (!stat){
      $("#scenario1Form").addClass("animated shake");
    } else{
      $("#scenario1Form").removeClass("animated shake");
      $("#scenario1").slideUp(500);
      $("#scenario1Outcome-"+stat).fadeIn(500).delay(500);
      $("#agilDisplay").html(playerCharStats.agility);
      $("#strDisplay").html(playerCharStats.strength);
      $("#charDisplay").html(playerCharStats.charisma);
      $("#intDisplay").html(playerCharStats.intelligence);
    };
  });
  $(".scenario1Complete").click(function(){
    $(".outcome").slideUp(500);
    $("#scenario2").fadeIn(500).delay(500);
  });

  $("#scenario2Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario2Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario2Form").addClass("animated shake");
    } else{
      $("#scenario2Form").removeClass("animated shake");
      $("#scenario2").slideUp(500);
      $("#scenario2Outcome-"+stat).fadeIn(500).delay(500);
      $("#agilDisplay").html(playerCharStats.agility);
      $("#strDisplay").html(playerCharStats.strength);
      $("#charDisplay").html(playerCharStats.charisma);
      $("#intDisplay").html(playerCharStats.intelligence);
    };
  });
  $(".scenario2Complete").click(function(){
    $(".outcome").slideUp(500);
    $("#scenario3").fadeIn(500).delay(500);
  });

  $("#scenario3Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario3Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario3Form").addClass("animated shake");
    } else{
      $("#scenario3Form").removeClass("animated shake");
      $("#scenario3").slideUp(500);
      $("#scenario3Outcome-"+stat).fadeIn(500).delay(500);
      $("#agilDisplay").html(playerCharStats.agility);
      $("#strDisplay").html(playerCharStats.strength);
      $("#charDisplay").html(playerCharStats.charisma);
      $("#intDisplay").html(playerCharStats.intelligence);
    };
  });
  $(".scenario3Complete").click(function(){
    $(".outcome").slideUp(500);
    $("#scenario4").fadeIn(500).delay(500);
  });

  $("#scenario4Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario4Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario4Form").addClass("animated shake");
    } else{
      $("#scenario4Form").removeClass("animated shake");
      $("#scenario4").slideUp(500);
      $("#scenario4Outcome-"+stat).fadeIn(500).delay(500);
      $("#agilDisplay").html(playerCharStats.agility);
      $("#strDisplay").html(playerCharStats.strength);
      $("#charDisplay").html(playerCharStats.charisma);
      $("#intDisplay").html(playerCharStats.intelligence);
    };
  });
  $(".scenario4Complete").click(function(){
    console.log(playerCharStats.decideEnd());
    $(".outcome").slideUp(500);
    var final = playerCharStats.decideEnd()
    $(final).fadeIn(500).delay(500);
  });

  $("#refreshButton").click(function(){
    location.reload();
  });
});
