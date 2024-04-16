//singleton object

//let myobj=new Object;

myobj={}

myobj.name="rohit";
myobj.id=567;
myobj.lastname="singh";

//console.log(myobj);

//object inside object

let obj1={
    firstname:{
        name:"rahul",
        lastname:{
            name:"kumar"
        }
    }
}
//console.log(obj1.firstname.lastname);

//merge/combined the object

obj3={1:"a",2:"b"};
obj4={3:"b",4:"c"};

//let obj5=Object.assign({},obj3,obj4);
//console.log(obj5);

//second method

let obj5={...obj3,...obj4}//spread the object and store it into obj5
console.log(obj5);