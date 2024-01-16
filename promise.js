// async function weather(){
//     let pokharaWeather=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("10deg");
//         },2000)
//     })
//     let KtmWeather=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("3deg");
//         },5000)
//     })
//     console.log("Fetching Pokhara Weather Please Wait....");
//     let pokharaW=await pokharaWeather;
//     console.log("Fetched Pokhara Weather:" +pokharaW);

//     console.log("Fetching Kathmandu Weather Please Wait....");
//     let ktmW=await KtmWeather;
//     console.log("Fetched Kathmandu Weather:" +ktmW);
//     return[pokharaW,ktmW];

// }
// console.log("Welcome to weather control room");
// let promise=weather();
// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error Occurred");
// }).finally(()=>{
//     console.log("This is printed in both case either it is resoved or rejected");
// })
// // console.log(promise);
// // weather();

//     //if we write async keyword before function then it ensure that the function will return a promise.


// async 
function delay1(){
    let delayOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am delay1");
    },5000)
//    const Onedelay=await delayOne
   })
   return delayOne;
}
// delay1();



// async 
function delay2(){
    let delayTwo=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am delay2");
    },5000)
    // const TwoDelay =await delayTwo
})
return delayTwo;
}
// delay2();




// async 
function delay3(){
    let delayThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am delay3");
    },5000)
    // const ThreeDelay =await delayThree
})
return delayThree;
}
// delay3();




// async
//  function delay4(){
//     let delayFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am delay4");
//     },5000)
//     // const FoyrDelay =await delayFour
// })
// return delayFour;
// }

// // delay4();



// // async
//  function delay5(){
//     let delayFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am delay5");
//     },10000)
// })
// return delayFive;
// }
// // delay5();
// async function run(){


//     // let d1=await delay1();
//     // console.log(d1);
//     // let d2=await delay2();
//     // console.log(d2);
//     // let d3=await delay3();
//     // console.log(d3);
//     // let d4=await delay4();
//     // console.log(d4);
//     // let d5=await delay5();
//     // console.log(d5);

//     // let promise=[];
//     // promise.push(delay1());
//     // promise.push(delay2());
//     // promise.push(delay3());
//     // promise.push(delay4());
//     // promise.push(delay5());
    
// //all promise resolve navaya samma result print hunna.
// //     let result=await Promise.all(
// //         [
// //             delay1(),
// //             delay2(),
// //             delay3(),
// //             delay4(),
// //             delay5()
// //         ]

        
// //     );
// //     console.log(result);
// // }
// // run();

// //jun salinxa tai pahila print huncha


// // delay1().then((data)=>{
// //     console.log(data)
// // })
// //  delay2().then((data)=>{
// //     console.log(data)
// })
// delay3().then((data)=>{
//      console.log(data)
//  })
// delay4().then((data)=>{
//     console.log(data)
// })
//  delay5().then((data)=>{
//     console.log(data)
// })

//constructor function
//factory function

//new create new instanses

// function getData(name,age){
//     this.name=name;
//     this.age=age;
//     this.getName=()=>{
//         return this.name;
    // }
    // this.getAge=function(){
    //     return this.age;
    // }
// }
// getData.prototype.getAge=function(){   //here function has this context.while arrow function doesn't have this reference/function
//     return this.age;
// }
// getData.prototype.getAge=()=>{   //here function has this context.while arrow function doesn't have this reference/function
//     return this.age;
// }


// let person1=new getData('Samima',20);
// let person2=new getData('Sima',19);
// console.log(person1.getName());
// console.log(person1.getAge());

//
// var name;    //defining the name
// console.log(name);
// name="Samima";    //initiallizing the name

// var name="Samima";                        //if we print a name after declaring the name as let it will show error.but don't show error in var
// const name="Samima";                            //let ra const lie declare vanda pahila use garne lie temporary dead zone vaninxa.
// console.log(name);

//closure                                          

// let age=21;
// function valid(){
//     if (age<18){
//         console.log("valid for voting");
//     }
//     else{
//         console.log("NOt allowed to vote");
//     }
// }
// valid();


// const apiUrl = 'https://api.example.com/users/123';

// // Make a GET request using the Fetch API
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(userData => {
//     // Process the retrieved user data
//     console.log('User Data:', userData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// fetch("https://api.example.com/users/123").then(function(response){
//     console.log(response);
// })

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then((json) =>{                         //here json is parameter.
//     let image=json.images;
//     // for(let i=0;i<image.length;i++){
//         console.log(`Images ${image}`)
            
            //dest1} :${image[0]}`);
    // }
    // return console.log(json)

// }
// )

//destructure in array
// const array=[1,2,3,4,5,6,7,8];      //array
// // console.log(array[0]);
// let [a,b,...rest]=array;      //rest operator
// console.log(a);
// console.log(b);                     //NOTE;in array we use square bracket so we use same bracket while combining
// console.log(rest);

//spread operator:2ta aray lie autai ma rakhne
// let num1=[1,2,3,4,5,6];
// let num2=[7,8,9,10,11,12];
// let combined=[...num1,...num2];
// console.log(combined);

//object
// const Person={
//     name:"Samima",
//     roll:32,
//     age:21,
//     rest:{
//         faculty:"BE_IT",
//         year:2022,
//         getlocation:(a)=>{
//             return a;
//         }
//     }
// }

// let {name:FirstName,roll:Roll_No}=Person;               //let FirstName=Person.name;
// console.log(FirstName);




// console.log(Person);
// console.log(Person.rest.getlocation("Sanepa"));          
// console.log(Person?.adderss);                          //.variable
// console.log(Person.name);
// console.log(Person.rest?.getlocation("sanepa"));
// console.log(Person.rest.address?.("Lalitpur"));                 //method .

// console.log(Person.rest.district);


// const rest={
//     faculty:"BE_IT",
//     year:2022,
//     location:"Sanepa"
// }
// let combine={...Person,...rest};        //similarly, we use curly operator so we should use same while combining
// console.log(combine);
//object key :assigning key
// let {name:firstName,age:Age,Hobby}=Person;
// let {firstNamename}=Person;    //if name is already defined before tehn we should assign the name first
// console.log(firstName);



// function Sum(...num){          //spread operator
//     return num.reduce((a,b)=>a+b);
// }
// console.log(Sum(1,2,3,4,5));


