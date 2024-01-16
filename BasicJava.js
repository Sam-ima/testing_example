//DAY-->1
//variable declaration
//initially var keyword was used to declare any variable 
//var keyword is used to redefine and update variable 
// var a=24;
// var a=34;
// a=55;
// console.log("The value of a:",a);

// //where let is used to updata the value only it cannot be redefined
// let b=40;
// b=30;
// console.log("The value of b:",b);

// //const keyword is used to keep the value constant. it cannot be updated neither can be redefined
// const c=90;
// console.log("The value of c:",c);


// //function in javascript
// function sum(x,y){
//     return x+y;
// }
// console.log("The sum of two  number is:",sum(5,5));
// var s=sum(2,2);
// console.log(s);

//if-else statement with function
// let a=20;
// let b=0;
// function division(a,b){
//     if(b==0){
//         throw "Division by zero.";
//     }
//     else{
//         return a/b;
//     }
// }
// console.log("the result is:",division(a,b));

//array in javascript
// let items=[1,2,3,4];
// var len=items.length;    //using  length property we can find the length of an item
// console.log("The length of items array is:",len);
// console.log("The length of array is:",items.length);
// console.log(items[0]);
// for(i=0;i<items.length;i++){
//     console.log(`The array number of ${i} index is ${items[i]}`);
// }

//use of for-of loop
// for(let a of items){
//     console.log(a);
// }

//array is auto growing 
//initializing array
// let arr=new Array();    //when the size isn't fixed
// let arr=array(10);
// let arr=new Array(9,70,55,44);
// console.log(arr[0]);

//second way of initailizing the array
// let colors=["red","yellow","Pink","Blue"];
// console.log("The length of color arary is:",colors.length);
// // console.log(colors[0]);
// for(let color of colors){
//     console.log(color);
// }

// let mountains=["Everest","Fuji","Nanga Parbat"];
// for(let mountain of mountains){
//     console.log(mountain);
// }
// console.log("the size of array is:",mountains.length);

//BASIC OPERATIONS ON ARRAY
//ADDING ELEMENT AT THE END OF AN ARRAY
// let seas=["Black sea","Caribbean sea","North sea","Baltic sea"];
// console.log("Array before operation:",seas);
// seas.push("Red sea");
// console.log("Array after operation:",seas);

//ADDING ELEMENT AT THE BEGINNING OF AN ARRAY
// seas.unshift("Red ses");
// console.log("after operation :",seas);

//DELETING ELEMENT AT THE END OF ARRAY
// var dele=seas.pop();
// console.log("The last deleted element is:",dele);
// console.log(seas);

// var f_dele=seas.shift();
// console.log("First deleted element is:",f_dele);
// console.log(seas);

//FINDING THE INDEX OF AN ARRAY
// let index=seas.indexOf("Caribbean sea");
// console.log(index);
// console.log("the index of Caribbean sea is:",seas.indexOf("Caribbean sea"));
// console.log(Array.isArray(seas));
// let arr=Array.isArray(seas);
// console.log(arr);

// console.log("hello");


//DAY-->2
//objects:it is the collection of key-value pair.
// let person={
//     firstName:"John",
//     lastName:"Doe"
// };
// console.log(person);
// //these are the two ways to display the value of an object.
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person['firstName']);
// console.log(person['lastName']);

// let address={
//     'building no':3930,               //Not a good practice to have space between property name.
//     street:"North 1st street",
//     state:'CA',
//     country:'USA'
// };
// console.log(address);
// console.log(address.street);
// console.log(address['country']);
// console.log(address["building no"]);
// console.log(address.building no);    Not possible

// person.firstName="Samima";
// console.log(person);
// person.lastName="Miya";
// console.log(person);
// person.age=21;                   //adding new property on person object
// console.log(person);
// delete person.age;
// console.log(person);                //after deletion
// console.log(person.age);                   //already deleted


// let employee={
//     firstName:'Peter',
//     lastName:'Doe',
//     employeeId:1
// };
// console.log(employee);
// console.log(employee.firstName);
// console.log("The last name is:",employee.lastName);
// console.log('employeeId' in employee);
// console.log("name" in employee);

// DAY-->3
//Function in javascript
// function say(message){     //passing parameter
    // console.log(message);
// }
// say('Hello');      //calling the function or involing   //passing argument
// console.log("hello");

// let result=say('Hello');
// console.log(result);
// function add(a,b){
    // return a+b;     //returning value
// }
// let sum=add(4,5);    //invoking function
// console.log("Sum:",sum);

// function say(message){
    // if(!message){
        // return;
    // }
    // console.log(message);
// }
// say('Hello');       //return message
// say();           return nothing

// function add(){
    // let sum=0;
    // for(let i=0;i<arguments.length;i++){
        // sum+=arguments[i];
    // }
    // return sum;
// }
// console.log("The sum of a and b is:",add(4,5,6,5));   //involing function  //passing argument
// function add(a, b) {
//     return a + b;
// }

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }

// let result = average(10, 20, sum);

// console.log(result);

// function show(){
    // console.log('Anonymoue function');
// }
// show();
// let show=function(){
    // console.log('Anonymous function');
// };
// show();
// setTimeout(function(){
    // console.log("Execute in 1 second"),1000
// });
//simple function
// function show(){
    // console.log('Simple Function');
// }
// show();

//Anonymous function
// let show=function(){
    // console.log('Anonymous function');
// };
// show();

//arrow function
// let show=()=>{
//     console.log('Arrow function');
// }
// show();
// let sum=(a,b)=>{
//     return a+b;
// }
// let add=sum(4,5);
// console.log('the sum of a and b is:',add(5,4));
// setTimeout(function(){
    // console.log('Hello World'),1000
// });
// function add(a,b){
    // return a+b;
// }
// let sum=add;
// console.log("The sumof tw variable is:",add(2,3));
// console.log("sum is:",sum(3,3));

// let message="Welcome to Javascript";
// console.log(message);

// let counter=120;
// console.log(typeof(counter));      //number type variable
// let count="hello";   
// console.log(typeof(count));            //string type variable
// let co=true;
// console.log(typeof(co));         //boolean type variable

// let a;
// console.log(a);    //a is declared but not initialized
// console.log(typeof(a));

// let b=null;
// console.log(typeof(b));
// let name='I\'m Samima Miya and I live in Sanepa Lalitpur.';
// console.log(name);

// let a=120;
// console.log(typeof(a));
// let b='hi';
// console.log(typeof(b));
// b='hello';
// console.log(b);

// let c=true;
// console.log(typeof(c));
// let d;
// console.log(typeof(d));
// let e=null;
// console.log(typeof(e));
// let 

