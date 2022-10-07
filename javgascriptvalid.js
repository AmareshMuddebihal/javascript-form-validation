function printError(elemId, hintMsg)
 {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() 
{
    var name = document.contactForm.name.value;
    
    var pwd = document.contactForm.password.value;
    var name = document.contactForm.User_name.value;
    var country = document.contactForm.country.value;
    var email = document.contactForm.email.value;
    
    var mobile = document.contactForm.mobile.value;
    var zipcode = document.contactForm.zipcode.value;
    var gender = document.contactForm.gender.value;


   
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    if(name == "")
    {
        printError("nameErr", "Please enter name");
    } 
    else 
    {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) 
        {
            printError("nameErr", "Enter valid name");
        } 
        else 
        {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if(email == "") 
    {
        printError("emailErr", "enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) 
        {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if(mobile == "") {
        printError("mobileErr", "Please enter mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if(country == "Select") 
    {
        printError("countryErr", "Please select country");
    } else {
        printError("countryErr", "");
        ountryErr = false;
    }
    if(gender == "") 
    {
        printError("genderErr", "Please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++)
     {
        if(checkboxes[i].checked) 
        {
            hobbies.push(checkboxes[i].value);
        }
    }
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) 
    {
        return false;
    } else {
    var dataPreview = "You've entered the following details: \n" +"user id: " + name + "\n" +"Email Address: " + email + "\n" +"Mobile Number: " + mobile + "\n" +"Country: " + country + "\n" +"Gender: " + gender + "\n";

    if(hobbies.length) 
    {
        dataPreview += "Hobbies: " + hobbies.join(", ");
    }
    alert(dataPreview);
}
};