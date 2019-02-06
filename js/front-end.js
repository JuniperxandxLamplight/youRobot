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

    if (final === "#ending-i") {
      $("body").css('background-image', 'url(http://s3.amazonaws.com/assets.vision.org/uploadedimages/Home/Articles/winter2016-fourhorsemen-lead.jpg)');
      $("body").css('background-color', 'grey');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-a") {
      $("body").css('background-image', 'url(https://images.unsplash.com/photo-1532178324009-6b6adeca1741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3496&q=80)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'grey');
      $("body").css('color', '#51FFC1');
      $("button").css('color', '#51FFC1');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-c") {
      $("body").css('background-image', 'url(https://images.unsplash.com/photo-1510885154241-75e69f87acae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'grey');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-s") {
      $("body").css('background-image', 'url(https://www.incimages.com/uploaded_files/image/1940x900/getty_624678524_361747.jpg)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'grey');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
  });


  $("#refreshButton").click(function(){
    location.reload();
  });
});
