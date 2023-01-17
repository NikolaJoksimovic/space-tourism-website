$(window).ready(() => {
  $(".menu-btn").click(() => {
    $("nav").addClass("nav-show");
  });
  $(".close-btn").click(() => {
    $("nav").removeClass("nav-show");
  });
});
