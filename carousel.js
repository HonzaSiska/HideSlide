var carouselItems = ["img/autobusak.jpg", "img/freudenthal.jpg","img/nadrazi.jpg","img/namesti.jpg","img/namesti2.jpg","img/petrin.jfif","img/sladovna-homepage.jpg","img/zamek.jpg","img/zamek2.jpg","img/Harta.jpg"]
var url_1, url_2, url_3;



var setPictures = function () {
	// set first picture in the carousel with picture from the array
	let firstImage = document.querySelector('#firstPic')
	firstImage.style.backgroundImage = 'url('+carouselItems[0]+')';
	firstImage.style.backgroundSize = "cover";
	url_1 = carouselItems[0]; // link for enlarging image after click

	// set second picture in the carousel with picture from the array
	let secondImage = document.querySelector('#secondPic')
	secondImage.style.backgroundImage = 'url('+carouselItems[1]+')';
	secondImage.style.backgroundSize = "cover";
	url_2 = carouselItems[1]; // link for enlarging image after click

	// set third picture in the carousel with picture from the array
	let thirdImage = document.querySelector('#thirdPic')
	thirdImage.style.backgroundImage = 'url('+carouselItems[2]+')';
	thirdImage.style.backgroundSize = "cover";
	url_3 = carouselItems[2]; // link for enlarging image after click

}
//this function moves carousel the right
var next = function () {

	var lastArrayItem = carouselItems[carouselItems.length-1];//stores last item in the array in a variable

	var newArray = []; // empty array to be filled with the last item of the carousel

	newArray.push(lastArrayItem); // insert last item from the carousel

	carouselItems.pop();//removes last item from the array
	var temporaryArray = newArray.concat(carouselItems); // inserts the last item in the first place by concatenating the new array
	carouselItems = temporaryArray; // updating the cartousel

	setPictures();

}
//this function moves carousel the left
var previous = function () {

	var firstArrayItem = carouselItems[0];//stores first item in the array in a variable

	var newArray = []; // empty array to be filled with the first item of the carousel

	newArray.push(firstArrayItem); // insert first item from the carousel

	carouselItems.shift();//removes first item from the array
	var temporaryArray = carouselItems.concat(newArray); // inserts the first item in the first place by concatenating the new array
	carouselItems = temporaryArray; // updating the cartousel

	setPictures();

}

//this function opens picture in a new large window
var enlarge = function () {
	document.querySelector('.largeImageContainer').style.display = "block";
	document.querySelector('.largeImageContainer').style.backgroundColor = "grey";
	document.querySelector('#bigPicture').style.display="block";
	document.querySelector('#bigPicture').src = url_1;
	//getImageSource = url_1;
}
var enlarge2 = function () {
	document.querySelector('.largeImageContainer').style.display = "block";
	document.querySelector('.largeImageContainer').style.backgroundColor = "grey";
	document.querySelector('#bigPicture').style.display="block";
	document.querySelector('#bigPicture').src = url_2;
    //getImageSource = url_2;
}
var enlarge3 = function () {
	document.querySelector('.largeImageContainer').style.display = "block";
	document.querySelector('.largeImageContainer').style.backgroundColor = "grey";
	document.querySelector('#bigPicture').style.display="block";
	document.querySelector('#bigPicture').src = url_3;
	//getImageSource = url_3
}


// button to change to next large picture
let largeImageNext;
largeImageNext = () => {
	var getImageSource = document.querySelector('#bigPicture').src; // gets link reference to the large picture

	var getImageSourceIndex = getImageSource.search("img"); // finds index of img

	getImageSource = getImageSource.slice(getImageSourceIndex  ) // removes everything before img to get same format in the array of pics

	var imageIndex = carouselItems.indexOf(getImageSource);// gets index of image in the array

	//condition 1 is valid if when last picture of the array is displayed
	if (imageIndex == carouselItems.length -1) {
		imageIndex = 0;
		document.querySelector('#bigPicture').src = carouselItems[imageIndex];
		console.log(imageIndex);
		console.log(carouselItems[imageIndex] + "end");
	}else {
		document.querySelector('#bigPicture').src = carouselItems[imageIndex +1];
		console.log(imageIndex+ 1);
		console.log(carouselItems[imageIndex + 1]);
	}
}

// button to change to previous large picture
let largeImageBack;
largeImageBack = () => {
	var getImageSource = document.querySelector('#bigPicture').src; // gets link reference to the large picture

	var getImageSourceIndex = getImageSource.search("img"); // finds index of img

	getImageSource = getImageSource.slice(getImageSourceIndex  ) // removes everything before img to get same format in the array of pics

	var imageIndex = carouselItems.indexOf(getImageSource);// gets index of image in the array

	//condition 1 is valid if when last picture of the array is displayed
	if (imageIndex ==  0) {
		imageIndex = carouselItems.length -1;
		document.querySelector('#bigPicture').src = carouselItems[imageIndex];
		console.log(imageIndex);
		console.log(carouselItems[imageIndex] + "end");
	}else {
		document.querySelector('#bigPicture').src = carouselItems[imageIndex -1];
		console.log(imageIndex- 1);
		console.log(carouselItems[imageIndex - 1]);
	}
}



// close button
var closeImage;
closeImage = () =>{

	document.querySelector('.largeImageContainer').style.display = "none";
	document.querySelector('#bigPicture').style.display="none";
}
