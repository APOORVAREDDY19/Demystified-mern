const FIRSTNAME=document.querySelector("#FIRST");

const LASTNAME=document.querySelector("#LAST");

const ROLLNO=document.getElementById("ROLL");

const ADDRE=document.querySelectorAll(".ADDRESS");

const register=document.getElementById("register");

const PHONE=document.getElementById("PH");

const SEARCH=document.getElementById("search");


register.addEventListener("click",function(){
    const FIRSTNAMEValue=FIRSTNAME.value;
    const LASTNAMEValue=LASTNAME.value;
    const ROLLNOValue=ROLLNO.value;
    const ADDREValue=ADDRE.value;
    const SEARCHValue=SEARCH.value;
    const PHONEValue=PHONE.value;

    const studentsArr=[];
    

    
    const studentDetails={
        FIRSTNAME:FIRSTNAMEValue,
        LASTNAME:LASTNAMEValue,
        ROLLNO:ROLLNOValue,
        ADDRE:ADDREValue,
        PHONE:PHONEValue,
        SEARCH:SEARCHValue

    };
    studentsArr.push(studentDetails);
    
    console.log(studentDetails);
    console.log(studentsArr);

    function getStudentDetails(ROLLNO){
        for(let index=0;index <studentsArr.length;index++){
            if(studentsArr[index].ROLLNO==ROLLNO){
                return studentsArr[index];
            }
        }
    }

    

});



