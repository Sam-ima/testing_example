//TEST ROUTE
//see if your internet is working
// fetch('//dummyjson.com/test')
// .then(res=>res.json())
// .then(console.log);

// fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');


//LOGIN USER AND GET TOKEN
// fetch('https://dummyjson.com/auth/login',{
//     method:'POST',
//     headers:{'Content-Type':'application/JSON'},
//     body:JSON.stringify({
//         username:'kminchelle',
//         password:'0lelplR',
//         expireInMins:60,
//     })
// })
// .then(res=>res.json())
// .then(console.log);


//GET CURRENT AUTH USER
// fetch('https://dummyjson.com/auth/me',{
//     method:'GET',
//     headers: {
//         'Authorization': 'Bearer /* YOUR_TOKEN_HERE */',
//     },
// })
// .then(res=>res.json())
// .then(console.log);


//GET ALL PRODUCTS
// fetch('https://dummyjson.com/products')
// .then(res=>res.json())
// .then(console.log);


//GET A SINGLE PRODUCT
// fetch('https://dummyjson.com/products/1') 
// .then(res=>res.json())
// .then(console.log);

//SEARCH PRODUCT
// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res=>res.json())
// .then(console.log);

//LIMIT AND SKIP PRODUCTS
// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res=>res.json())
// .then(console.log);

//GET ALL PRODUCT CATEGOIES
// fetch('https://dummyjson.com/products/categories')
// .then(res=>res.json())
// .then(console.log);


//GET PRODUCT OF A CATEGORY
// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res=>res.json())
// .then(console.log);

//ADD A NEW PRODUCT
// fetch('https://dummyjson.com/products/add',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         title:'BMW Pencil',
//     })
// })
// .then(res=>res.json())
// .then(console.log);

//UPDATE A PRODUCT
// fetch('https://dummyjson.com/products/1',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'iPhone Galaxy +1'
//     })
// })
// .then(res=>res.json())
// .then(console.log);

//DELETE A PRODUCT
// fetch('https://dummyjson.com/products/1',{
//     method:'DELETE',
// })
// .then(res=>res.json())
// .then(console.log);

//4.  GET ALL CARTS
// fetch('https://dummyjson.com/carts')
// .then(res=>res.json())
// .then(console.log);

//GET A SINGLE CART
// fetch('https://dummyjson.com/carts/1')
// .then(res=>res.json())
// .then(console.log);

//GET CARTS OF A USER
// fetch('https://dummyjson.com/carts/user/5')
// .then(res=>res.json())
// .then(console.log);

//ADD A NEW CART
// fetch('https://dummyjson.com/carts/add',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         userId:1,
//         products:[
//             {
//                 id:1,
//                 quantity:1,
//             },
//             {
//                 id:50,
//                 quantity:2,
//             },
//         ]
//     })
// })
// .then(res=>res.json())
// .then(console.log);


//UPDATE A CART
// fetch('https://dummyjson.com/carts/1',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         merge:true,
//         products:[
//             {
//             id:1,
//             quantity:1,
//             },
//         ]
//     })
// })
// .then(res=>res.json())
// .then(console.log);

//DELETE A CART
// fetch('https://dummyjson.com/carts/1',{
//     method:'DELETE',
// })
// .then(res=>res.json())
// .then(console.log);

//5. GET ALL RECIPES
// fetch('https://dummyjson.com/recipes')
// .then(res=>res.json())
// .then(console.log);

//GET A SINGLE RECIPIE
// fetch('https://dummyjson.com/recipes/1')
// .then(res=>res.json())
// .then(console.log);


//SEARCH RECIPIES
// fetch('https://dummyjson.com/recipes/search?q=Margherita')
// .then(res=>res.json())
// .then(console.log);


//LIMIT AND SKIP RECIPIES
// fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image')
// .then(res=>res.json())
// .then(console.log);

//GET ALL RECIPES TAGS
// fetch('https://dummyjson.com/recipes/tags')
// .then(res=>res.json())
// .then(console.log);

//GET RECIPES BY A TAG
// fetch('https://dummyjson.com/recipes/tag/Pakistani')
// .then(res=>res.json())
// .then(console.log);

//GET RECIPES BY MEAL TYPE
// fetch('https://dummyjson.com/recipes/meal-type/snack')
// .then(res=>res.json())
// .then(console.log);

//6.GET ALL USERS
// fetch('https://dummyjson.com/users')
// .then(res=>res.json())
// .then(console.log);

//GET CURRENT AUTH USER
// fetch('https://dummyjson.com/user/me',{
//     method:'GET',
//     headers:{
//         'Authorization':'Bearer /* YOUR_TOKEN_HERE */',
//     },
// })
// .then(res=>res.json())
// .then(console.log);


//GET A SINGLE USER
// fetch('https://dummyjson.com/users/1')
// .then(res=>res.json())
// .then(console.log);

//SEARCH USERS
// fetch('https://dummyjson.com/users/search?q=John')
// .then(res=>res.json())
// .then(console.log);

//Filter users
// fetch('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
// .then(res=>res.json())
// .then(console.log);

//LIMIT AND SKIP USERS
// fetch('https://dummyjson.com/users?limit=5&skip=10&select=firstName,age')
// .then(res=>res.json())
// .then(console.log);


//GET USER'S CARTS BY USER ID
// fetch('https://dummyjson.com/users/5/carts')
// .then(res=>res.json())
// .then(console.log);

//GET USER'S POST BY USER ID
// fetch('https://dummyjson.com/users/5/posts')
// .then(res=>res.json())
// .then(console.log);

//GET USER'S TODOS BY USER ID
// fetch('https://dummyjson.com/users/5/todos')
// .then(res=>res.json())
// .then(console.log);


//ADD A NEW USER
// fetch('https://dummyjson.com/users/add',{
//     method:'POST',
//     headers:{
//         'Content-Text':'application/json'
//     },
//     body:JSON.stringify({
//         firstName:'Samima',
//         lastName:'Miya',
//         age:21,
//     })
// })
// .then(res=>res.json())
// .then(console.log);


//UPDATE A USER
// fetch('https://dummyjson.com/users/1',{
//     method:'PUT',
//     headers:{
//         'Content-type':'application/json'
//     },
//     body:JSON.stringify({
//         lastName:'Owais'
//     })
// })
// .then(res=>res.json())
// .then(console.log);


// DELETE A USER
fetch('https://dummyjson.com/users/1',{
    method:'DELETE',
})
.then(res=>res.json())
.then(console.log);
