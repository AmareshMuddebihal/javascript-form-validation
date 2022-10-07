function validateForm()

{
    var name = document.contactForm.name.value;
    
    var pwd = document.contactForm.password.value;

    if(name==null ||name == "")
    {
        alert( "Please enter name");
    } 
    else if (pwd==" ")
    {
        alert("pwdErr", "Please enter pwd");
    }
    if(pwdErr == true)

    {
        return false;
    } else
    
    {
        confirm("form ok")
        return true;

    }
    




};
