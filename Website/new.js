function validate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
   
       if(username.value.trim() == "" || password.value.trim()=="" || email.value.trim()=="" || phone.value.trim()==""){
        alert("Enter all the details");
        return false;
    }
    else if(username.value.length < 6){
        alert("username should be greater than 6 letters");
        return false;
    }
    else if(password.value.length < 6){
        alert("Password should be greater than 6 letters");
        return false;

    }
    else if(phone.value.lenght != 10){
        alert("Phone number should be 10 digit");
        return false;
    }
    else{
        true;
    }

}
