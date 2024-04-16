const arr=[1,2,3,4]
let initialvalue=0
// let result=arr.reduce(function(accumulator,currentvalue){
//     console.log(`accumulater ${accumulator} currentvalue ${currentvalue}`);
//    return accumulator+currentvalue;
// })
// console.log(result);



//==========using arrow function==========

let fresult=arr.reduce((acc,initialv)=>acc+initialv)

console.log(fresult);

//===========perform reduce in the array of object===========

const arr2=[
    {
        item:"tv",
        price:2000
    },
    {
        item:"ac",
        price:2000
    },
    {
        item:"cooler",
        price:2000
    }
];

let totalprice=arr2.reduce((acc,items)=>acc+items.price,0)

console.log(`total price of the acessories: ${totalprice}`);

//find max value using reduce
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity);
// console.log(max);

//using for loop

// using for-each loop
// let sum1=0;
// arr.forEach(function(ar){ ///callback function
//     sum1=sum1+ar;
// })
// console.log(sum1);

//using while loop
let sum=0;
let i=0;
while(arr[i]<=arr.length){
    sum=sum+arr[i]
    i++;
}
console.log(sum);