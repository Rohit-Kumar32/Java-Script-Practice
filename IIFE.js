//IIFE (Immediately Invoked Function Expressions)

(function college(){   //Name iife
    console.log("connected");
})();

// it is use to overcome the problem to function used the global variable
//that is not required in the function
// remove the global scope pollution we used iife

//using arrow function

((name)=>{   //unnamed iife
    console.log(`connected 2 ${name}`);
})("raushan");


