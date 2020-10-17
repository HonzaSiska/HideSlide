window.addEventListener('load' , () => {
	setTimeout(function(){
		let long;
		let lat;
		let temperatureDescription = document.querySelector('.temperature-description');
		let temperatureDegree = document.querySelector('.temperature-degree');
		let locationTimezone = document.querySelector('.location-timezone');
		let farCels =document.querySelector('.farCels');
		let wholeWeek = document.querySelector('#week');






		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					console.log(position);

					long = position.coords.longitude;
					lat = position.coords.latitude;
					const proxy ="http://cors-anywhere.herokuapp.com/"; // to make sure this works on localhost
					const api = `${proxy}https://api.darksky.net/forecast/4ad872ee4b45b07191aea8d2527dd779/${lat},${long}`;
					console.log(api);


					fetch(api)
						.then(response => {
								return response.json();
						})
						.then(data => {
							console.log(data);
							const {temperature, summary, icon} = data.currently; // pulles temperature , summary from json object currently
							const week = data.daily;
							console.log(week.summary);
							wholeWeek.innerHTML = week.summary;





							temperatureDegree.textContent = temperature; // gets temperature from json and changes updates
							temperatureDescription.textContent = summary;  // gets summary from json and updates
							locationTimezone.textContent = data.timezone; // gets timezone from json and updates
							farCels.textContent="F";






							//set iconID
							setIcons(icon, document.querySelector(".icon"));

							// change to F or celsius

							farCels.addEventListener('click', () =>
						{
							if(farCels.textContent==="F"){

								temperatureDegree.textContent = Math.floor((temperature-32) * (5/9));
								farCels.textContent="C";
							}else{
								temperatureDegree.textContent = Math.floor(temperature);
								farCels.textContent="F";


							}
						})




						});
				});

		}
		function setIcons(icon, iconID) {
			const skycons = new Skycons({color: "white"}); // creates new object skycon and sets color to black
			const currentIcon = icon.replace(/-/g, "_").toUpperCase(); // takes the icon we fetched and changes dashes to undersores and all to upper case
			skycons.play(); // start of animation  , function from skycons.js
			return skycons.set(iconID, Skycons[currentIcon]);

		}
		
	},5000)

});




// weather popup
var closeButtonStatus = false;
var closeButton;
closeButton = () => {
	let closeWeather = document.querySelector(".location");
	if (closeButtonStatus==false) {
		closeWeather.style.display="block";
		closeWeather.style.opacity = 1;
		closeWeather.style.transition="all 2s"
		closeButtonStatus = true;

	} else {
		closeWeather.style.display="none";
		closeWeather.style.opacity = 0;
		closeWeather.style.transition="all 2s"
		closeButtonStatus = false;
	}
}
