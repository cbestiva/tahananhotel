var initialize = function() {

  var jssor_slider_starter = function(containerId) {
  // var options = {$AutoPlay: true};
    var options = {
      $AutoPlay: true,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $ChanceToShow: 2,
        $AutoCenter: 2
      }
    };
    var jssor_slider1 = new $JssorSlider$(containerId, options);
  };

  jssor_slider_starter('slider1_container');
};

$(document).ready(initialize);