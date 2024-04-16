let myobj={}
myobj.name="rohit";
myobj.age=45;
myobj.location="samstipur";
//define object inside the array
let array=[
     {
        email:"connect01@mail.com",
        password:5667
     },
     {
        email:"connect01@mail.com",
        password:5667
     },
     {
        email:"connect01@mail.com",
        password:5667
     },
     {
        email:"connect01@mail.com",

        
        password:5667
     }
]
//access the object inside the array
console.log(array[1].email);

console.log(myobj);
//access the keys of the object
console.log(Object.keys(myobj));
//access the value of the object
console.log(Object.values(myobj));
console.log(Object.entries)

//check the particular properties available or not in object
console.log(myobj.hasOwnProperty("lastname"))

//object de-Structure

const{location:loc}=myobj;
console.log(loc);