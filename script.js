function validatePassword() {
  var password1 = document.getElementById("pword").value;
  var password2 = document.getElementById("pword2").value;


  //seeing if each password matches
  if (password1 != password2) {
    alert("validation failed false");
    return false;
  }
  
  return true;
  
}
//making it to where these usernames cannot be used
function validateUserName(){
  var userNames = ["harry", "elizabeth", "shana"]
  var nameEntered = document.getElementById("user").value;

  if (userNames.includes(nameEntered.toLowerCase())) {
    alert("Name in use");
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
  