// const pr=new Promise(function(resolve,reject){
//     //do any asynchronus task

//     setTimeout(function(){
//   console.log("asynk task here");
//   resolve();
//     },1000)
    
// })

// pr.then(function(){
//     console.log("async task completed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is here");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async task is completed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is here");
//         resolve({age:34,status:"marrital"})
//     })
// }).then(function(value){
//     console.log(value);
// })
//++++++++++++++++++++++++++++++++++++++++++++++++//
//promise 4

// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({name:"rohit",age:56})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })

// //consume the error
// promise4.catch(function(error){
//     console.log(error);
// })

//promise chaining

// const promise5=new Promise(function(resolve,reject){

//    setTimeout(function(){
//     error=false
//     if(!error){
//         console.log("async task is completed")
//         resolve({name:"rohit",age:23,village:"meyari"})
//     }else{
//         console.log("something went wrong");
//     }
   
//    },1000)

// })
// promise5.then(function(object){
//     console.log(object)
//     return object.name
// }).then(function(name){
//     console.log(name);
  
// }).then(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("task is either completed or not");
// })

//using async and await to handle asynchronus task........

const promise5=new Promise(function(resolve,reject){

    setTimeout(function(){
     error=true
     if(!error){
         console.log("async task is completed")
         resolve({name:"rohit",age:23,village:"meyari"})
     }else{
         console.log("something went wrong");
     }
    
    },1000)
 
 })
 async function asynchandle(){
    const response=await promise5
    console.log(response);
 }
 asynchandle();








