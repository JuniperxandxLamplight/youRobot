$(function(){
  var playerCharStats = new charStats
  $("#scenario1Form").submit(function(event){
    event.preventDefault();
    $("#scenario1").hide();
    $("#scenario1Outcome").show();
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);


  });
  $("#scenario1Complete").click(function(){
    $("#scenario1Outcome").hide();
    $("#scenario2").show();

  });
  $("#scenario2Form").submit(function(event){
    event.preventDefault();
    $("#scenario2").hide();
    $("#scenario2Outcome").show();
    var stat = $("input:radio[name=scenario2Options]:checked").val();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $("#scenario2Complete").click(function(){
    $("#scenario2Outcome").hide();
    $("#scenario3").show();

  });
  $("#scenario3Form").submit(function(event){
    event.preventDefault();
    $("#scenario3").hide();
    $("#scenario3Outcome").show();
    var stat = $("input:radio[name=scenario3Options]:checked").val();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $("#scenario3Complete").click(function(){
    $("#scenario3Outcome").hide();
    $("#scenario4").show();

  });
  $("#scenario4Form").submit(function(event){
    event.preventDefault();
    $("#scenario4").hide();
    $("#scenario4Outcome").show();
    var stat = $("input:radio[name=scenario4Options]:checked").val();
    playerCharStats.pushStat(stat)
    console.log(playerCharStats);

  });
  $("#scenario4Complete").click(function(){
    $("#scenario4Outcome").hide();
    $("#results").show();
  });
});
