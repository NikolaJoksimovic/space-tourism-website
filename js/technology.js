var pathname = window.location.pathname;
var technologyId = pathname.slice(
  pathname.indexOf("-") + 1,
  pathname.indexOf(".")
);
console.log(technologyId);

$(window).ready(() => {
  $(".preloader").css("display", "none");

  // set active link
  $(`#${technologyId}`).addClass("active-link");
  $(".technology-link").click(() => {
    $(`#${technologyId}`).removeClass("active-link");
  });

  // body height on start
  $(".technology-body").css("min-height", `${setBodyHeigth()}px`);
  // body height on resize
  $(window).resize(() => {
    $(".technology-body").css("min-height", `${setBodyHeigth()}px`);
  });
});

function setBodyHeigth() {
  return $(window).innerHeight() - $(".navbar-container").outerHeight() - 48;
}
