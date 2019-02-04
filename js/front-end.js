$(function(){
  $("#scenario1Form").submit(function(event){
    event.preventDefault();
    $("#scenario1").hide();
    $("#scenario1Outcome").show();

  });
  $("#scenario1Complete").click(function(){
    $("#scenario1Outcome").hide();
    $("#scenario2").show();

  });
  $("#scenario2Form").submit(function(event){
    event.preventDefault();
    $("#scenario2").hide();
    $("#scenario2Outcome").show();

  });
  $("#scenario2Complete").click(function(){
    $("#scenario2Outcome").hide();
    $("#scenario3").show();

  });
  $("#scenario3Form").submit(function(event){
    event.preventDefault();
    $("#scenario3").hide();
    $("#scenario3Outcome").show();

  });
  $("#scenario3Complete").click(function(){
    $("#scenario3Outcome").hide();
    $("#scenario4").show();

  });
  $("#scenario4Form").submit(function(event){
    event.preventDefault();
    $("#scenario4").hide();
    $("#scenario4Outcome").show();

  });
  $("#scenario4Complete").click(function(){
    $("#scenario4Outcome").hide();
    $("#results").show();
  });
});
