//how to handle shopping cart when we dont  know the how much argumnt
//pass from the user in the function

function shoppingcart(...a){  //used rest operater it will store the all argument into
                              //array
    return a;
}
console.log(shoppingcart(30,67,55,44,78));


//function with object

let obj={
    name:"rohit",
    village:"meyari"

}

function objecthandle(anyObject){
   console.log(`first name is ${anyObject.name} and village is ${anyObject.village}`)
}

//objecthandle(obj);
//another method create a pass object directly into argumrnt

objecthandle({
    name:"singh",
    village:"muzffarpur"
})

//function with array

const myarray=[56,77,34,65,22]

function arrayimplement(arr){
    return (arr[1]);
}
//console.log(arrayimplement(myarray));
console.log(arrayimplement([67,50,78]));