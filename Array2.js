let Name=["rohit","rohan","rahul","raushan"]

Name.pop();//remove element from the last
Name.push("XYZ");//add element in the last
console.log(Name);

//declare array using array constructor

let array1=new Array(5);

array1.push(78);
array1.push(67,55,33,7);
console.log(array1);


//declare array in other method

let array3=new Array(67,88,90,45);
console.log(array3);

let array4=[];
array4.push(78);
array4.push(80);
array4.push(65);
array4.push(34);

//for of loop

for(let value of array4){
    console.log(value);
}