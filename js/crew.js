var pathname = window.location.pathname;
var crewId = pathname.slice(pathname.indexOf("-") + 1, pathname.indexOf("."));
console.log(crewId);

$(window).ready(() => {
  $(".preloader").css("display", "none");

  // body height on start
  $(".crew-body-container").css("min-height", `${setBodyHeigth()}px`);

  // body height on resize
  $(window).resize(() => {
    $(".crew-body-container").css("min-height", `${setBodyHeigth()}px`);
  });

  // set active link for crewmembers
  $(`#${crewId}`).children().addClass("crew-link-active");
  // active on click
  $(".crew-link").click((e) => {
    $(".crew-link").removeClass("crew-link-active");
  });
});

function setBodyHeigth() {
  return $(window).innerHeight() - $(".navbar-container").outerHeight() - 48;
}
