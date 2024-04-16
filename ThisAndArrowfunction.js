const data={
    username:"rohit",
    password:"1234",
    welcome:function (){
        console.log(`welcome to this page ${this.username}`);
        //this keyword refers to the current context of the key value
        //in the object

        console.log(this);
    }
}


//data.welcome();
data.username="raushan";
//console.log(this); //this will return empty object 
//when we run into chrome browser console it will return windows object

//this keyword in the function

function value(){
    
    //console.log(this.roll);//undefined
    console.log(this);

}
//value();

//++++++++++ Arrow function++++++++++++

const value2=()=>{
    const cricket="virat";
    console.log(this);    //empty object
}
value2();

//arrow function

const sum=(a,b)=>{
    return(a+b);

}
//console.log(sum(3,9));

//other method

const sum1=(b,c)=>b+c;//dont need to write return keyword

//console.log(sum1(6,9));

//other method

const sum2=(v,z)=>(v+z)
console.log(sum2(7,34));