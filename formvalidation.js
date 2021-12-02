function validFname(){
    let first_name=document.getElementById('firstname').value
    if(first_name==""){
        displayMsg("firstname is required","fnameMsg","red")
        return false
    }
    else if(first_name.length<3){
        displayMsg("firstname must be more than 2 characters","fnameMsg","red")
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('Firstname only accepts alphabets',"fnameMsg","red")
        return false
    }

    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }

}

function validLname(){
    let last_name=document.getElementById('lastname').value
    if(last_name==""){
        displayMsg("Lastname is required","lnameMsg","red")
        return false
    }
    else if(last_name.length<3){
        displayMsg("Lastname must be more than 2 characters","lnameMsg","red")
        return false
    }

    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('Lastname only accepts alphabets',"lnameMsg","red")
        return false
    }

    else{
        displayMsg("valid lastname","lnameMsg","green")
        return true
    }
}

function validEmail(){
    let emails=document.getElementById('email').value
    if(emails==""){
        displayMsg("email is required","emailMsg","red")
        return false
    }

    else if(!emails.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email',"emailMsg","red")
        return false
    }

    else{
        displayMsg('valid email','emailMsg','green')
        return true
    }

}

function validPassword(){
    let password=document.getElementById('password').value
    if(password==""){
        displayMsg("Password is required","passwordMsg","red")
        return false
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,50}$/)){
        displayMsg("Password must include 1 capital 1 small letter 1 numeric value and a special character and should be more than 8 characters","passwordMsg","red")
        return false
    }

    else{
        displayMsg('Strong password','passwordMsg','green')
        return true
    }

}

function validForm(){
    if(validFname()&& validLname() && validEmail && validPassword()){
        return true
    }
    else{
        return false
    }
}


function displayMsg(message,idValue, colorValue){
    document.getElementById(idValue).innerHTML=message
    document.getElementById(idValue).style.color=colorValue
}
