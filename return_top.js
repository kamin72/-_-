$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $(".returnTop").addClass("fade");
    } else {
      $(".returnTop").removeClass("fade");
    }
  });
});
