// DOM manipulation
// tree like representation
// console.log(document);
// manipulation:CRUD operatons
// create-update-retreive-delete         
const errorbtn= document.getElementById("error-btn");
console.log(errorbtn);
errorbtn.textContent="ERROR";


const successbtn= document.getElementById("success-btn");
console.log(successbtn);
successbtn.textContent="SUCCESS";


const infotext=document.getElementById("info-text");

function handleError(){
    console.log("error btn has been clicked");
    infotext.classList.add("error-text");
    infotext.textContent="error has been occured";
    
}
// console.log(handleError);


errorbtn.addEventListener("click",handleError);
 
function handlesucess(){
    console.log("success button has been clicked");
    infotext.classList.add("success-text");
    infotext.textContent="done";
    
}

successbtn.addEventListener("click",handlesucess);
