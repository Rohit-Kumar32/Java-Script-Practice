 const name='rohitkumar';
 console.log(name.length);
 console.log(name[2])
 console.log(name.indexOf("t"));

//other way to declare string//
let string=new String('rohitkumar');
console.log(string)
console.log(typeof(string))                                              

//template literals//

let boy="rohit"
let boy1="raushan"

//output we want rohit is a friend of raushan//
let sentence=`${boy} is a friend of ${boy1}`
console.log(sentence)