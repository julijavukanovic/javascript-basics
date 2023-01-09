let age=32;
let userName='Max';
let hobbies=['Sports','Cooking','Reading'];
let job={
title: 'Developer',
place:'New York',
salary:50000
};
let adultYears;

function calculateAdultYears(userAge){
   let result;
   result=userAge-18;
   return result;
};
adultYears=calculateAdultYears(age);
console.log(adultYears);
age=45;
adultYears=calculateAdultYears(age);
console.log(adultYears);

let person={
   name:'Max',
   greet(){
     console.log('Helloo!');
   }
};
person.greet();