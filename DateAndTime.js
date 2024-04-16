let mydate=new Date();
/*console.log(mydate)
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.getDay());
console.log(mydate.toLocaleTimeString());
console.log(mydate.getDate());*/

let createdate=new Date(2024,0,22);
//console.log(createdate.toLocaleDateString());

//let createdate1=new Date("1-14-2024");
//console.log(createdate1.toLocaleString());

let mytimestamp=Date.now();
console.log(mytimestamp)//give the output in millisecond
console.log(createdate.getTime());
//==================//
//convert it into the second

console.log(Math.floor(Date.now()/1000));

/*'default': This indicates that you want to use the system's default locale settings for formatting the date.

{ weekday: "long" }: This is an options object passed to toLocaleString() specifying the formatting preferences. In this case, it specifies that you want the full name of the weekday ("long") to be included in the output. */

console.log(mydate.toLocaleString('default',{//print today day...saturday
    weekday:"long"
}))

