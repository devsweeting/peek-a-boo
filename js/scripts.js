$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass ("dark-background");
  });

  $("button#normal").click(function() {
    $("body").removeClass();
  });

// Fade ins
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
  $(".showsecond").click(function() {
    $(".second").fadeIn();
  });
  $(".showthird").click(function() {
    $(".third").fadeIn();
  });
  $(".showfourth").click(function() {
    $(".fourth").fadeIn();
  });
});
