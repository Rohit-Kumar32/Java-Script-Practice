const arr=["rohit","raushan","ram","shyam"];

for (const key in arr) {
    console.log(arr[key]);
   
}
//this is the major diffrence between for of or for in

//for each loop using in array

const arr2=["rjs","pks","nks","tks"];



// arr2.forEach(function (data){
//     console.log(data);

// })

//using arrow function in foreach loop

arr2.forEach((data,index,ar)=>{//call back function
    //console.log(data,index,ar);
})

//for-each in array of object

const array=[
    {
        college:"cu",
        uid:"22mca20211"
    },
    {
        college:"pu",
        uid:"22mca20216"
    },
    {
        college:"du",
        uid:"22mca20270"
    },
]

array.forEach((detail)=>{
    console.log(detail.college);
})