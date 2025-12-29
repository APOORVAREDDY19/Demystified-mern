
// //it creates its own environment that is lexical environment
// function counter(){
//    let count =0;


//    function increment(){
//     count =count +1;
//     console.log("count:",count);
//     return count;
//    }

//    function decrement(){       
//     count =count-1;
//     console.log("count:",count);
//     return count;
//    }

//    const funcArr=[increment,decrement];
//    return funcArr;
// }
// const[increment,decrement]=counter();
// increment();
// decrement();

let numOne=1;
let numTwo=2;
const out=()=>{
   let numThree=numOne+numTwo;
   console.log(numOne);
      console.log(numTwo);
         console.log(numThree);
         
        const inner= ()=>{
           let numFour=numThree+numOne;
           console.log(numFour);
         }
         return inner;

}
const returnedinner=out();
returnedinner();















