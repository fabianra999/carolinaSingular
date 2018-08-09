$(window).scroll(function () {
  var windowScroll = $(window).scrollTop();

  $("#layoutParallax .parallax").children(".layer").each(function () {
    var layer = $(this);
    var yPos = -(windowScroll * layer.data('speed') / 200);
    layer.css({
      "transform": "translate3d(0px, " + yPos + "px, 0px)"
    });
    //console.info("THIS LAYER", layer.data('speed'));
  });

});