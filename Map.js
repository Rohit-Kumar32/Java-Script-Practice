//using map function when we want to apply special function in each element

arr=[4,5,6,7,8,9];

let value=arr.map((nums)=>nums*2)

//console.log(value);

//chaining ==>multiple map function and filter function used in single statement

let value1=arr.map((nums)=>nums*2)
              .map((nums)=>nums+1)
              .filter((nums)=>nums>10)

              console.log(value1);
                     