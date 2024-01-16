// console.log("hello");
function sum(){
    let a=50;
    let b=60;
    let sum=a+b;
    console.log(sum);
}
sum();

//anonymous function :it doesn't have name
var sum=function(){
    let a=50;
    let b=60;
    let sum=a+b;
    console.log(sum);
}
sum();   //sum is a function as well as a variable
//arrow function
var sum=()=>{
    let a=540;
    let b=60;
    let sum=a+b;
    console.log(sum);
}
sum();

//return type function,parameterized function
function Addition(r,s){
    console.log(`${r+s}`);
}
Addition(4,6);

//using arrow function
var add=(r,s)=>{
    console.log(`the sum is ${r+s}.`);
}
add(8,8);

//using anonymous function
var add=function(r,s){
    console.log(`The sum is:${r+s}.`);
}
add(9,9);


//ternary operator
// let age=20;
// let message;
// age>=18?

// nodejs is event trigger function

//call-back function using arrow function   .this is time event.
setTimeout(()=>{
    console.log("All Good!");
},2000);
//1sec=1000 millisecond

setTimeout(welcome,3000);
function welcome(){
    console.log("Hello Welcome");
}
setTimeout(function(){
    console.log("I am anonymous function.");
},4000);
