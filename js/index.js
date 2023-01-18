$(window).ready(() => {
  $(".menu-btn").click(() => {
    console.log("show");
    $("nav").addClass("nav-show");
  });
  $(".close-btn").click(() => {
    console.log("hide");
    $("nav").removeClass("nav-show");
  });
});
