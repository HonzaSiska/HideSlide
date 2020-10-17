var open = true;
var aboutUsStatus = false;
var portfolioStatus = false;
var galleryStatus = false;
var contactStatus = false;
var mapStatus = false;

let slider = function() {

  let getBox = document.querySelector(".box");
  let getBoxUl = document.querySelector(".box ul");
  let getArrow = document.querySelector(".top-slide-button")

  if (open == false) {
    getBox.style.height = "100px";
    getBoxUl.style.visibility = "visible";
    getBoxUl.style.opacity = "1";
    getArrow.innerHTML = "▲";
    open = true;

  } else {
    getBox.style.height = "0px";
    getBoxUl.style.visibility = "hidden";
    getBoxUl.style.opacity = "0";
    getArrow.innerHTML = "▼";
    open = false;
  }
}
// this function takes you to ABOUT US section, makes full height and makes text visible, adds border to the bottom of paragraph and disables the class .aboutus to remove hover or reverts the changes based on  AboutUsStatus true or false
function aboutUs() {
	if (aboutUsStatus == false) {

		let openAboutUsSection = document.querySelector('.aboutus');
		openAboutUsSection.style.height = "500px"; //opens the paragraph

		openAboutUsSection.style.borderBottom  = "solid 1px lightgrey";

		let openAboutUsParaf = document.querySelector('#aboutUsParaf');
		openAboutUsParaf.style.visibility = "visible";
		openAboutUsParaf.style.opacity = 1;
		openAboutUsParaf.style.transitionDelay = "all 3s ease-in-out";
		openAboutUsParaf.style.transition = "all 3.5s ease-in-out";
		openAboutUsParaf.style.display = "block";


		aboutUsStatus = true;
	}else {
		let openAboutUsSection = document.querySelector('.aboutus');


		openAboutUsSection.style.height = "62px";//closes the paragraph
		openAboutUsSection.style.borderBottom  = "solid 1px lightgrey";

		let openAboutUsParaf = document.querySelector('#aboutUsParaf');
		openAboutUsParaf.style.visibility = "hidden";
		openAboutUsParaf.style.opacity = 0;
		openAboutUsParaf.style.transition = "all 1s ease-in-out";



        aboutUsStatus = false;

	}
}
// this function takes you to PORTFOLIO section, makes full height and makes text visible, adds border to the bottom of paragraph and disables the class .aboutus to remove hover or reverts the changes based on  portfolioStatus true or false
function portfolio() {
	if (portfolioStatus == false) {

		let openPortfolioSection = document.querySelector('.portfolio');

		openPortfolioSection.style.height = "550px"; //opens the paragraph
		openPortfolioSection.style.borderBottom  = "solid 1px lightgrey";

		let openPortfolioParaf = document.querySelector('#portfolioParaf');
		openPortfolioParaf.style.visibility = "visible";
		openPortfolioParaf.style.opacity = "1";
		openPortfolioParaf.style.transitionDelay = "all 3s ease-in-out";
		openPortfolioParaf.style.transition = "all 3.5s ease-in-out";
		portfolioStatus = true;
	}else {
		let openPortfolioSection = document.querySelector('.portfolio');

		openPortfolioSection.style.height = "62px";//opens the paragraph
		openPortfolioSection.style.borderBottom  = "solid 1px lightgrey";

		let openPortfolioParaf = document.querySelector('#portfolioParaf');
		openPortfolioParaf.style.visibility = "hidden";
		openPortfolioParaf.style.opacity = "0";
		openPortfolioParaf.style.transition = "all 3s ease-in-out";
        portfolioStatus = false;

	}
}
//colapse and open gallery
 function gallery() {
	if (galleryStatus == false) {

		let openGallerySection = document.querySelector('.gallery');
		openGallerySection.style.height = "450px"; //opens gallery

		openGallerySection.style.borderBottom  = "solid 1px lightgrey";

		document.querySelector('.background').borderBottom = 0;

		let openCarousel = document.querySelector('.carousel');
		openCarousel.style.visibility = "visible"
		openCarousel.style.opacity = 1;
		openCarousel.style.transition = "all 3s ease-in-out";
		galleryStatus = true;
	}else {
		let openGallerySection = document.querySelector('.gallery');

		openGallerySection.style.height = "62px";//closes gallery
		openGallerySection.style.borderBottom  = "solid 1px lightgrey";

		let openCarousel = document.querySelector('.carousel');
		openCarousel.style.visibility = "hidden";
		openCarousel.style.opacity = 0;
        galleryStatus = false;

	}
}

//colapse and open contact
 function contact () {
	if (contactStatus == false) {

		let openContactSection = document.querySelector('.contact');
		openContactSection.style.height = "500px"; //opens contact

		openContactSection.style.borderBottom  = "solid 1px lightgrey";

		document.querySelector('.background').borderBottom = 0;

		let contactContent = document.querySelector('.contactContent');
		contactContent.style.visibility = "visible"
		contactContent.style.opacity = 1;
		contactContent.style.transition = "all 3s ease-in-out";

		document.querySelector('#mapButton').style.visibility="visible"
		contactStatus= true;
	}else {
		let openContactSection = document.querySelector('.contact');

		openContactSection.style.height = "62px";//closes contact
		openContactSection.style.borderBottom  = "solid 1px lightgrey";

		let contactContent = document.querySelector('.contactContent');
		contactContent.style.visibility = "hidden";
		contactContent.style.opacity = 0;

		document.querySelector('#mapButton').style.visibility="hidden"
        contactStatus = false;

	}

}

let openMap = () => {
	if (mapStatus == false) {
		let openContactSection = document.querySelector('.contact');
		openContactSection.style.height = "850px"; //opens map
		document.querySelector('#mapButton').innerHTML="▲";
		mapStatus = true;
	} else {
		let openContactSection = document.querySelector('.contact');
		openContactSection.style.height = "500px"; //closes map
		document.querySelector('#mapButton').innerHTML="▼";
		mapStatus = false;
	}
}

  var object = [{
      "Description": "San Geronimo",
      "Thumbnail": "https://drive.google.com/thumbnail?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM",
      "FullSize": "https://drive.google.com/open?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM"
    },

    {
      "Description": "Momotombo",
      "Thumbnail": "https://drive.google.com/thumbnail?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9",
      "FullSize": "https://drive.google.com/open?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9"
    },

    {
        "Description": "San Geronimo",
        "Thumbnail": "https://drive.google.com/thumbnail?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM",
        "FullSize": "https://drive.google.com/open?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM"
      },

      {
        "Description": "Momotombo",
        "Thumbnail": "https://drive.google.com/thumbnail?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9",
        "FullSize": "https://drive.google.com/open?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9"
	},
	{
        "Description": "San Geronimo",
        "Thumbnail": "https://drive.google.com/thumbnail?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM",
        "FullSize": "https://drive.google.com/open?id=1lFLUIYrHx0rqLFwuvjRYoKUzqKwMojtM"
      },

      {
        "Description": "Momotombo",
        "Thumbnail": "https://drive.google.com/thumbnail?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9",
        "FullSize": "https://drive.google.com/open?id=1nEj4EEGleH-RojwIMJN3RUsXR1Q5UCr9"
	}
];

var output = '';
var getPictures = function() {
   for ( i = 0; i < object.length; i++) {
	   output += '<div class="grid_cell"><h3>' + object[i].Description +'</h3><img src="' + object[i].Thumbnail + '"></div>';
   }
   //output += '';
   document.querySelector(".pictures_grid").innerHTML = output;
}
// pops up a message and dims the background
function popup() {
	setTimeout(function() {

      document.querySelector('.popup_item').style.display="block";
	  document.querySelector('.popup').style.display="block";
	  document.querySelector('.trans').style.display="block";


  }, 2000);
}
function closePopUp() {
	document.querySelector('.popup_item').style.display="none";
	document.querySelector('.popup').style.display="none";
	document.querySelector('.trans').style.display="none";
}

// Title text from invisible to large

document.addEventListener('load', textSmallToLarge());
var count = 0;
var text = document.querySelector("#homeTown");
function textSmallToLarge() {
	setTimeout(function() {

		if (count < 150) {
			count += 1;

			text.style.fontSize = count + 'px';

			textSmallToLarge();


		}
		else {

		}


	}, 0.5);
}

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var email = document.querySelector('#email');
window.addEventListener('load', (event) => {
  firstName.value="";
  lastName.value="";
  email.value="";
});
