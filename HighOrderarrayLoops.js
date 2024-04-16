//for of loops

arr=[6,7,8,9];

for (const x of arr) {
    console.log(x);
    
}

const string="hello world";

for (const greets of string) {
    console.log(greets);
    
}

//for of loop in map

const map=new Map();

map.set("in","india");
map.set("fr","france");
map.set("amr","america");

//console.log(map);

//using for of loop

for (const [key,value] of map) {
    //console.log(key,":-"+value);
    
}

//using for of loop in object

obj={
    age:"67",
    lastname:"rohit",
    dob:"2001"
}

 //for (const [key,value] of obj); //this is not working here
//   { console.log(key,value);
    
// }

// for-in loop in object

const obj1={
    py:"python",
    cpp:"c++",
    jv:"java",
    cu:"chandigarh university"
}

//using for in loop

for (const key in obj1) {
    //console.log(`${key} full form is:${obj1[key]}`);
   
}

//using for in loop in array
