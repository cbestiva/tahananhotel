var initialize = function() {

  var jssor_slider_starter = function(containerId) {
    var options = {
      $AutoPlay: true,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $ChanceToShow: 2,
        $AutoCenter: 2
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $ChanceToShow: 2,
        $AutoCenter: 1
      }
    };

    var jssor_slider1 = new $JssorSlider$(containerId, options);

    function ScaleSlider() {
      var minReserveWidth = 255;
      var parentWidth = $('#slider1_container').parent().width();
      if (parentWidth) {
        jssor_slider1.$SetScaleWidth(parentWidth);
      } 
      else {
        window.setTimeout(ScaleSlider, 30);
      }
    }
    ScaleSlider();
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
      $(window).bind('resize', ScaleSlider);
    }
  };

  jssor_slider_starter('slider1_container');

};

$(document).ready(initialize);