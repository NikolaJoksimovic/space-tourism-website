var pathname = window.location.pathname;
var page_id = pathname.slice(pathname.indexOf("-") + 1, pathname.indexOf("."));
$(window).ready(() => {
  $(".preloader").css("display", "none");

  // active link effect
  $("#destination").addClass("link-active");
  $(`#${page_id}`).addClass("destination-link-active");
});
