// hamburger

$(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("open");
    $(".header-nav").fadeToggle();
  });
});