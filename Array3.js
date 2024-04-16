//concatenation method
let hmarks=[56,88,44,34,56];
let umarks=[58,98,32,56,77];
let name=["rohit","rohan","xyz"];

//let combined=hmarks.concat(umarks,name);
//console.log(combined)

//unshift and shift method

//hmarks.unshift("00");//add the element in first position
//hmarks.shift();//deleted first item in the array
//console.log(hmarks);


//console.log(hmarks.slice(1,3));//basically kaatna

//hmarks.splice(1,2,90,91);//change original array add,remove,replace
//console.log(hmarks);

//add element using splice()

hmarks.splice(1,0,100);
console.log(hmarks);

//replace element

hmarks.splice(2,1,500);
console.log(hmarks);

// delete element
hmarks.splice(1,1);
console.log(hmarks);