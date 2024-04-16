//scope in function 

function add(num){
    const username="rohit"

    function add1(num1){
        const name="rahul";
        console.log(username);
    }
    //console.log(name);// not accessible
    add1();
}
add(6);

// ++++++++++++++++ Intresting ++++++++++++++++++++++++
sum();
function sum(){
    console.log("this is sum");
}

add6();
const add6=function(){  //store the function into variable
    console.log("this is devide");
}


