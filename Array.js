//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let student=[85,97,44,37,67,80]

sum=0;
//for-of loop
for(let value of student){
 sum=sum+value;

}
let average=sum/6;
console.log(average);

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after All items have an offer of 10% OFF on them. Change the array to store final price after

let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);

