let admin = [
	{
		username:"Jan Siska",
		password:"7611074845",
		position:"admin"
	},
	{
		username:"Romina Melendez",
		password:"Chapulin",
		position:"user"
	},
	{
		username:"Esmeralda Morales",
		password:"Suegra",
		position:"user"
	},
	{
		username:"Rosta",
		password:"Halko",
		position:"admin"
	}

]

let loggedStatus = document.querySelector("#logged a");
let logged = false;
let loginFormStatus = false;
let loginForm = document.querySelector(".form-addUser");
let formErrorMessage = document.querySelector('#formErrorMessage');


// opens login form clicking on login status in right upoper corner

let openLoginForm = () => {
	if (loginFormStatus==false) {
		loginForm.style.display="block";
		loginFormStatus= true;
	}else {
		loginForm.style.display="none";
		loginFormStatus=false;
		formErrorMessage.textContent="";

		let userLogin = document.querySelector('#loginUser');
		let userPassword = document.querySelector('#loginPassword');
		userLogin.value="";
		userPassword.value="";
	}


}


// this function checks if the username and password in login object  match , changes login status and closes popup
let login = () => {
	let userLogin = document.querySelector('#loginUser');
	let userPassword = document.querySelector('#loginPassword');
	let formErrorMessage = document.querySelector('#formErrorMessage');

	for (i = 0; i < admin.length; i++ ) {
		if (userLogin.value == admin[i].username && userPassword.value == admin[i].password ) {
			loggedStatus.textContent="You are logged in, " + admin[i].username;
			loggedStatus.style.color="green";
			userLogin.value="";
			userPassword.value="";
			loginForm.style.display="none";
			logged=true;



		   return;
	   }else{
		   formErrorMessage.textContent="Incorrect password or username !!";
	   }
	}
}

// logout
let logout = () =>{
	loggedStatus.textContent ="you are logged out!!";
	loggedStatus.style.color="red";
	logged=false;
	loginForm.style.display="none";

}



//print all users on the screen


let displayUsers = () => {
	let text="<tr><th>Username</th><th>Password</th><th>Position</th><th></th></tr>";
	for (a = 0 ; a < admin.length ; a++) {
		text += '<tr><td>'+admin[a].username+'</td><td><sub>************</sub></td><td>'+ admin[a].position +'</td><td><button type="button"  class="delete" name="button"  onclick="deleteUser(this.value)" value="'+ a +'">Delete</button></td></tr>';
		console.log(text);

	}
	document.querySelector(".userList").innerHTML = text;

}
// remove users by getting value from clicked button

let deleteUser = (clicked) => {
	let valueBtn = clicked;
	console.log(valueBtn);
	admin.splice(valueBtn, 1);
	displayUsers();
}


//creates a new empty object
let newObject= {};

//function to add a new user to admin
let addUsers = () => {

	//get data from form input fields
	input1=document.querySelector('#input1');
	input2=document.querySelector('#input2');
	input3=document.querySelector('#select');


    //adds data from form to the new object
	newObject.username = input1.value;
	newObject.password = input2.value;
	newObject.position = input3.value;

	// adds the nwe object to the admin array
    admin.push(newObject);

	newObject = {};
	input1.value="";
	input2.value="";

	displayUsers();

}
