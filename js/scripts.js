$(document).ready(function() {
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
