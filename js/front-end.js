$(function(){
  var playerCharStats = new charStats
  $("#scenario1Form").submit(function(event){
    event.preventDefault();
    $("#scenario1").hide();
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    $("#scenario1Outcome-"+stat).show();
    playerCharStats.pushStatFirst(stat)
    console.log(playerCharStats);


  });
  $(".scenario1Complete").click(function(){
    $(".outcome").hide();
    $("#scenario2").show();

  });
  $("#scenario2Form").submit(function(event){
    event.preventDefault();
    $("#scenario2").hide();
    var stat = $("input:radio[name=scenario2Options]:checked").val();
    $("#scenario2Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $(".scenario2Complete").click(function(){
    $(".outcome").hide();
    $("#scenario3").show();

  });
  $("#scenario3Form").submit(function(event){
    event.preventDefault();
    $("#scenario3").hide();
    var stat = $("input:radio[name=scenario3Options]:checked").val();
    $("#scenario3Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $(".scenario3Complete").click(function(){
    $(".outcome").hide();
    $("#scenario4").show();

  });
  $("#scenario4Form").submit(function(event){
    event.preventDefault();
    $("#scenario4").hide();
    var stat = $("input:radio[name=scenario4Options]:checked").val();
    $("#scenario4Outcome-"+stat).show();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $(".scenario4Complete").click(function(){
    var stat = playerCharStats.decideEnd()
    console.log(stat);
    $(stat).show();
  });
});
