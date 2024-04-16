//create promise to handle asynchronus task in efficient way

const pr=new Promise(function(resolve,reject){
    //do any asynchronus task
    //like database call//network request//external api request
    setTimeout(function(){
        console.log("async task is completed")
        resolve();
    },1000)
})


pr.then(function(){
    console.log("completed sucessfully")
})