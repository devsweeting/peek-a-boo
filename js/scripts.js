$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#original").click(function() {
    $("body").removeClass();
  });

// Fade ins
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
  $(".showsecond").click(function() {
    $(".first").addClass("box-text");
    $(".second").fadeIn();
  });
  $(".showthird").click(function() {
    $(".second").addClass("box-text");
    $(".third").fadeIn();
  });
  $(".showfourth").click(function() {
    $(".third").addClass("box-text");
    $(".fourth").fadeIn();
  });
});
