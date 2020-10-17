var carousel = ["img/panorama.jfif","img/autumnBW.jpg", "img/uhlirakBW.jpg", "img/uhlirakBW2.jpg", "img/Harta.jpg"];
var counter = 0;

function pictureSlide() {
  setTimeout(function() {

    document.getElementById('banner-img').src = carousel[counter];


    counter += 1;
    if (counter > carousel.length - 1) {
      counter = 0;
    }

    pictureSlide()
  }, 4000);

}
