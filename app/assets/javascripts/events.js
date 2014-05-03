var popup_initialize = function() {
  $(".popup-gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
  });

  $(".room_popup").magnificPopup({
    type: 'image'
  });

};

$(document).ready(popup_initialize);