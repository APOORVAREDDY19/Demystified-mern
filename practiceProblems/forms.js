const firstName=document.querySelector("#name");
console.log(firstName);
const lastName=document.querySelector("#NAME");
console.log(lastName);
const option=document.querySelectorAll(".class")
console.log(option);


const registerbtn=document.getElementById("btn");

registerbtn.addEventListener("focus",function(){
    const firstNameValue=firstName.value;
    const lastNameValue=lastName.value;
    const optionValue=option.value;
    const Details={
        firstName:firstNameValue,
        lastName:lastNameValue,
        option:optionValue

    };
    console.log(Details);
    
});

