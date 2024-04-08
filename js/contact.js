function validateForm()                                    
{ 
    var name = document.forms["contactForm"]["name"];               
    var email = document.forms["contactForm"]["email"];    
    var message = document.forms["contactForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}


function sendEmail() {
Email.send({
    Host : "smtp.elasticemail.com",
    Port: "2525",
    Username : "tzrocky@yahoo.fr",
    Password : 'A244EF64168A770E987F9D9F292B438D4FCD',
    To : 'tzrocky@yahoo.fr',
    From : document.getElementById("email").value,
    Subject : "Ceci est un objet",
    Body : "Et ceci est le message"
}).then(
  message => alert(message)
);
}