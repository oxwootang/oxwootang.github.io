$(document).ready(function () {
  // Put your JavaScript behavior here
  $(".tabs li").on("click", function(e) {
//  debugger;
    e.preventDefault();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".active").show();
    var tabHref = $(this).children().attr('href');
    $(tabHref).show();
    console.log($(tabHref).siblings());
    $(tabHref).siblings().not(".tabs").not("h1").hide();
  });
});
