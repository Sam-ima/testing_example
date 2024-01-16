// console.log("Hello World!!");
// console.log("How are you?");
// nodmon                           fullform of npm:node package manager 
// 1.node filename
// npm init -y
// npm install nodemon
// npm start
// js is not sensitive
// js is both compiler and interpreter language

// console.log("I am fine");
// var a; //variable declaration
// no datatype is initialized since works on both bom=browser object model and dom=document object model
// var b="c";                                                      //a single character is also considered as string
// console.log(b);
// var d='Hello';
// console.log(d);
// var a=10;
// var b=20;
// console.log(a+b);
// var c='Hello';
// console.log(a+c);  //concatinate
// console.log(a+b);
// console.log("The sum of two number is:"+(a+b)+"\tThank you!");                                 //\t is escape charcter
// console.log(`The sum fo two numbers is ${a+b}\tThank you!`);                                   //to write multipe line on same line.
//data can be represented in two ways:xml:extensive markup language and json: javascript object notation:no-sql
// xml is used for data format, layout design,, data transfer, data configuration,
// in xml all tags are user defined not pre-defined but in html all tags are pre-defined.
// json don't have tags instead use array to store data.
// nodejs shows asynchronous behavoir and is single threaded eak choti ma eauta kaam matra jarxa and is faster
// vs-code is synchronous behavior i.e wait for request  
// function display(a,b){                                                        //declaring function
    // return a-b;
    // console.log("I am  general function/ Normal function:"+(a+b));
// }
// var sum=display(5,4);
// console.log(`The sum of two number is:${sum}`);
// console.log(`the sum fo two number is ${display(5,'8')}`);   //calliing function
// NaN is not a number 
// NaN ,null and undefined are variable.But '8' is considered as number.
// console.log("Hi!!!It's me Samima Miya.");
// var a=32;
// var b='Samima';
// console.log(`My name is ${b} and my roll number is ${a}.`);                   //the expression is called string interpolation
// //Creating objects
// const student={
//     f_name:"Samima",
//     l_name:"Miya",
//     age:21,
//     isPass:true
// };
// console.log(`My name is ${student.f_name} ${student.l_name}.`);
// console.log(`${student.age=student.age-1}`);
// console.log(a+b);
// console.log(a-b);     //not a number
// const product={
//     name:"parker jotter standard CT ball pen (Black)",
//     rating:4,
//     offer:5,
//     price:270
// };
// product.rating=3;
// console.log(product.rating);
// const profile={
//     username:"samimamiya",
//     isFollow:true,
//     posts:195,
//     following:5,
//     details:"My name is Samima"
// };
// console.log(profile.username);
// console.log(profile);
// console.log(typeof(profile));
// console.log(profile["username"]);
// var a=5;
// var b="5";
// console.log(a==b);
// var age=24;
// var result=age>18?"adult":"not adult";
// console.log(result);
// // var num=prompt("enter any number:");
// // console.log(num);

// // ternary operator:
// var age=20;
// age>=18?console.log("valid to vote."):console.log("not valid to vote.");
// const name = null ?? 'John';
// console.log(name); // 'John'


// var is functional scope .it can be redeclared and updated
// but let cannot be redeclared but can be updated.it is a block scope variable.
// var a=12;
// var a=34;
// let b=33;
// b=12;

// const can't be declared without value.it is also a block scope.
// const a=23;
// a=22;
// console.log(a);

// var x=30;
// var x=50;     //using var can redefine variable
// console.log(x);
// x=40;    //can re-assign variable value
// console.log(x);

// function display(){
//     if(true){
//         var y=99;
//         console.log(y);
//     }
//     console.log(y);
// }
// // console.log(y);     this is not applicable.
// display();
// console.log("Now let keyword.");
// // let p;      allowed
// // p=300;allowed
// let p=100;
// p=400;    //but can re-assigned variable using let keyword.
// // let p=400;     //can't redeclare variable using let keyword.
// console.log(p);   
// function show(){
//     if(true){
//         let r=300;
//         console.log(r);
//     }
//     // console.log(r);    //not allowed ,because let is block scope
// }
// show();
// if(true){
//     let r;
//     r=400;
//     console.log(r);
// }

// console.log("Now, using const keyword.");
// // const a;   //not allowed
// const a=12;     //must  be initialized variable
// // const a=0;    //re-delaration not allowed
// // a=900;    //re-assigned not allowed
// function visible(){
//     if(true){
//         const u=12;
//         console.log(u);
//     }
//     // console.log(u);     //const is a block scoped.using variable with const keyword are not allowed to access from outside of block
// }
// visible();
// if(true){
//     const u=45;
//     console.log(u);
// }

// console.log("Nullishing coalescing");
// var g;
// var h = null ?? "This is not allowed.";
// console.log(h);

// var i=console.log("Hello");
// console.log(i);
// // console.log(g);
// var j = 0??console.log("Hi");
// console.log(j);

// console.log("ternary operator");
// var m=10;
// var msg=m==12 ?"equal":"sorry";
// console.log(msg);



// //class 
// //if request is fulfilled then it is resolve else reject

// console.log("hello");
//await is always with asunc function.waiting for the response.

// const axios=require('axios');
// //then takes resolved function.
// function getData(){
//     // console.log("You can get data");
//     // axios.get('https://www.npmjs.com/package/axiom');
//     let response=axios.get('https://www.npmjs.com/package/axiom').then((response)=>{
//         console.log("Promise resolved");
//     }).catch(error=>{
//         console.log("Error found");
//     });
//     console.log(response);
// }
// console.log("I am here");
// getData();


// function delay(){
//     console.log("I am delayed");
//     let promise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("I am delayed too");
//         },5000)
//     }
//     )
//     return promise;
   
// }
// function fast(){
//     console.log("I am fast");
// }
// // let response=delay();
// // delay(); 
// fast();
// //in await we use try-catch 
// let response=delay().then((data)=>{
//     console.log("This is success",data);
// }).catch((err)=>{
//     console.log("This is error",err);
// })

// async function run(){
//     try{
//         let response=await delay();
//         console.log(response);
//         fast();
//     }
// }
