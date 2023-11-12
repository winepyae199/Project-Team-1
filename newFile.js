$(".back").bind("click", function (e) {
  e.preventDefault();
  $(".hightlight-wrapper").animate({
    scrollLeft: "-=" + step + "px",
  });
});
