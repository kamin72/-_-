$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $(".returnTop").addClass("fade");
    } else {
      $(".returnTop").removeClass("fade");
    }
  });
});
