$(window).ready(() => {
  $(".menu-btn").click(() => {
    $("nav").addClass("nav-show");
  });
  $(".close-btn").click(() => {
    $("nav").removeClass("nav-show");
  });

  // active link effect
  $(".link").click((e) => {
    $(".link").removeClass("link-active");
    $(e.target).removeClass("link-hover").addClass("link-active");
  });
  // hover link effect
  $(".link").hover((e) => {
    if (!$(e.target).hasClass("link-active")) {
      $(e.target).addClass("link-hover");
    } else {
      $(e.target).removeClass("link-hover");
    }
  });
});
