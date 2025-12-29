
 const fullNameInput=document.getElementById("fullname")


const emailInput=document.getElementById("email")


const passwordInput=document.getElementById(password)


const registerbtn=document.getElementById("register-btn");


registerbtn.addEventListener("click",function(){
    const fullNameValue=fullNameInput.value;
    const emailValue=emailInput.value;
    const passwordValue=passwordInput.value;

    const submissionDetails={
        fullName: fullNameValue,
        email:emailValue,
        password:passwordValue
    };
    console.log(submissionDetails);
    


});


 
