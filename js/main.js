var objUsers = [
{
	username: "jordan",
	password: "password1"
},
{
	username: "mike",
	password: "password2"
},
{
	username: "Brian",
	password: "password3"
}
]

function logIn() {
	var user = document.getElementById("username").value
	var pass = document.getElementById("password").value

	for(i=0; i < objUsers.length; i++)
		if (user == objUsers[i].username && pass == objUsers[i].password){
			console.log("You have successfully logged in!")
			return
		} else { 
			console.log("The username or password you typed in are incorrect. Please try again")

		}
	}

function register() {
	var newUsername = document.getElementById(newUsername).value
	var newPassword = document.getElementById(newPassword).value

	var newUser = [
	{ }
	]

	objUsers.push(newUsername, newPassword)

	for (i=0; i < objUsers.length; i++) {
		if (newUsername == objUsers[i].username || newPassword == objUsers[i].password) {
			console.log("You're username ")
		}
	}
}