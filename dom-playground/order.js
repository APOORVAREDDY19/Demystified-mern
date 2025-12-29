const unOrderedList=document.querySelector(".unordered-list");
// console.log(unOrderedList);


const firstListItem=document.querySelector(".list-item");
// console.log(firstListItem);


const allListItems=document.querySelectorAll(".list-item");
// console.log(allListItems);
// console.log(typeof allListItems);
// console.log(allListItems.length);

const listItemsArray=[];


for (let key = 0; key < allListItems.length; key++) {
   console.log(key);
   const listItem=allListItems[key];
   console.log(listItem);
   listItemsArray.push(listItem);
}
console.log(listItemsArray);


// if condition truthly falsly values
const user={};
const evenNums=[];
let username="";


if (user) 
{
  console.log(user);
   
   
}
if (evenNums) {
   console.log(evenNums);  
}
if (username) {
   console.log(username);
   
}







