const arr=[1,2,3,4,5,6,7,8,9];
//filter always takes call back function and special condition
// const newarr=arr.filter((num)=>(num>4))
// console.log(newarr);

// const newarr1=arr.filter(function(num1){
//     return num1>5;
// })
// console.log(newarr1);

//using for each loop

const arr2=[]
arr.forEach((data) => {
   if(data>4){
    arr2.push(data);
   
   }
    
})
//console.log(arr2);

const newarr3=arr.filter((result)=>(result>4))

console.log((newarr3));