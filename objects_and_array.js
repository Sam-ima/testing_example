//javascript arrays:collection of data not necessary to be similar type or not.
let points=new Array(3);  //object 
// console.log("length of array points:",points.length);
points[0]=22;
points[1]=44;
points[2]=33;
points[3]=55;

// console.log(points.length);
// console.log(points[0]);
// console.log(points[3]);

// let number=new Array(5,4,3,6);
// console.log("Length of array number:",number.length);
// console.log(number[2]);
// number[4]=99;
// console.log(number[5]);

// let vehicles=['bus','bike','van'];
// console.log(vehicles[2]);
// vehicles[3]="car";
// console.log(vehicles);
// vehicles[4]=4;
// console.log("The length of vehicle is:",vehicles.length);
// for(var i=0;i<vehicles.length;i++){
//     console.log(vehicles[i]);
// }

// for(let a in vehicles){
//     console.log(vehicles[a]);    //a represents index so,used for array 
// }
// for(let a of vehicles){       //for-of is used for  object
//     console.log(a);
// }
// let place=["Pokhara",'Kathmandu',"Lalitpur"];
// console.log("The length of place is:",place.length);


// //map() method    :don't change the original data
// // var result=number.map((num)=>{
// //     return num*10;

// // })
// var result=number.map((num)=>num*10)    //short form of above.

// var result=number.map(function(num){
    // return num*10;
// 
// })
// // var result=number.map(multiplyByTen());
// // function multiplyByTen(num){
// //     return num*10;
// // }
// console.log("increased array",result);
// console.log("original array",number);
// var value=number.map((num)=>num*10);
// console.log("updated value is:",result);


// //OBJECTS IN JAVASCRIPT
// //wrapping all the data in a single variable is object.
// //in object single word key don't need ang quote but multi word key does
// var student={
//     name:"Ram",
//     age:15,
//     address:"Lalitpur",
//     'full name':"Ram Bahadur",
//     info: function(){          //inside  object function can also be written
//         return this.name+" "+this.address;     //if not given this then it will be wrong
//     }
// };
// console.log(student);
// console.log(student.name);   //one way
// console.log(student["name"]);     //second way
// console.log(student["address"]);
// // console.log(student.full name);
// console.log(student["full name"]);   //only one way for this property name
// console.log(student.info());
// for(let b in student){     
    // console.log(b);
// }
var obj1={
    name:"Samima",
    address:"lalitpur",
    faculty:"BE.IT",
    semester:"fourth",
    roll_no:32
};
var obj2={
    name:"Sarif",
    address:"Karputar",
    faculty:"HM",
    semester:"First",
    roll_no:22
};
var obj3={
    name:"Sima",
    address:"lalitpur",
    faculty:"BE.IT",
    semester:"fourth",
    roll_no:36
};
var obj4={
    name:"Roshni",
    address:"lalitpur",
    faculty:"BE.IT",
    semester:"fourth",
    roll_no:31
};
var obj5={
    name:"Ashika",
    address:"lalitpur",
    faculty:"BE.IT",
    semester:"fourth",
    roll_no:12
};
var obj6={
    name:"Nabina",
    address:"lalitpur",
    faculty:"BE.IT",
    semester:"fourth",
    roll_no:22
};
var students=[obj1,obj2,obj3,obj4,obj5,obj6];
// console.log(students[0]);
// for(let a in students){
    // console.log(`The information of student ${a} is:`);
    // console.log(students[a]);
// }

console.log("Hello");
for(let a in students){
    console.log("Details of :",students[a].name);
    console.log("\tName :",students[a].address);
    console.log("\tAddress :",students[a].faculty);
    console.log("\tSemester :",students[a].semester);
    console.log("\tRoll no :",students[a].roll_no);
}
console.log("This is me :",students[0].name);
console.log("I am from:",students[0].address);
console.log("I am from",students[0].faculty,"faculty");
console.log("I study on",students[0].semester,"semester");
console.log("My roll no is:",students[0].roll_no);