//create a object literals

const mySym= Symbol["location"];//declare symbol datatype

let data={
    name:"rohit",
    city:"samastipur",
    "last name":"thakur",
    [mySym]:"mylocation1",   //add symbol key to the object
    pin:78,
    friends:["raushan","rahul","rakesh"]
}
//access a data in the object
console.log(data.name);
console.log(data.city);
//dont access last name to this method

//other approach to access a data

console.log(data["city"]);
console.log(data["pin"]);
console.log(data["last name"]);
console.log(data[mySym]);
console.log(typeof(data[mySym]));

//update the object value

data.city="patna";
//console.log(data.city);

//freeze the object we cant change the any value in the object

Object.freeze();
data.pin=78;
//console.log(data.pin);
data.pin=70;
//console.log(data.pin);


//create a function

data.greeting=function(){
    console.log("welcome to this plateform");
}
data.greeting2=function(){
    console.log(`hello user, ${this.name}`);
}
console.log(data.greeting());
console.log(data.greeting2());

