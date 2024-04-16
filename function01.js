//create a function
function myadat(number1,number2){
    console.log(number1+number2)
}
//myadat(56,"78");

function mydata(number1, number2){
    console.log( number1+number2);

}
 sum=mydata(67,89);
 //when we store the function return value into variable it will undefined

//console.log(sum);

function mydata1(n1,n2){
     sum=n1+n2;
    return sum;
}
let value=mydata1(6,8);
//console.log(value);

//some message with user name

// function usermessage(name){
//     return `welcome to this page ${name}`;
// }
// console.log(result=usermessage("Rohit"));

function usermessage(name="rks"){
    if(name===undefined){
        console.log("enter a valid user name");
        return
    }
    return `welcome to this page ${name}`;
}
console.log(result=usermessage());




