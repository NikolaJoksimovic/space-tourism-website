$(window).ready(() => {
  $(".preloader").css("display", "none");
  $(".menu-btn").click(() => {
    $("nav").addClass("nav-show");
  });
  $(".close-btn").click(() => {
    $("nav").removeClass("nav-show");
  });

  // active link effect
  $("#home").addClass("link-active");
  $(".link").click((e) => {
    $(".link").removeClass("link-active");
    $(e.target).removeClass("link-hover").addClass("link-active");
  });
});
