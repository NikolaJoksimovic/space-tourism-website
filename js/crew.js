$(window).ready(() => {
  $(".preloader").css("display", "none");

  // body height on start
  $(".crew-body-container").css("min-height", `${setBodyHeigth()}px`);

  // body height on resize
  $(window).resize(() => {
    $(".crew-body-container").css("min-height", `${setBodyHeigth()}px`);
  });
});

function setBodyHeigth() {
  return $(window).innerHeight() - $(".navbar-container").outerHeight() - 48;
}
