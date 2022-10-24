function validatePassword() {
  var password1 = document.getElementById("pword").value;
  var password2 = document.getElementById("pword2").value;


  //seeing if each password matches
  if (password1 != password2) {
    alert("Error: passwords don't match");
    return false;
  }
  
  return true;
  
}
//making it to where these usernames cannot be used
function validateUserName(){
  var userNames = ["harry", "elizabeth", "shana"]
  var nameEntered = document.getElementById("user").value;

  if (userNames.includes(nameEntered.toLowerCase())) {
    alert("Username in use");
    return false;
  }
  
  return true;
}

//runs all validations
function validateMyForm() {

  if (validateUserName() && validatePassword()) {
    return true;
  }
  
  return false;
}

//grabs the p1canvas DOM
var canvas  = document.getElementById("p1canvas");

if (canvas.getContext) {   
var ctx = canvas.getContext('2d');
               
ctx.fillStyle = '#ffffeb';
ctx.font = 'Bold 10px Arial';
               
ctx.fillText('Happy Fall!', 30, 80);
               
} 
else {
  alert('Something Went Wrong');
}
  