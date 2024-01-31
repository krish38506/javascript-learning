const mynum=[1,2,3,4,5,6,7,8,9];
//const newnum=mynum.map((num)=> num+10); // agr scope use kroge to return krna pdega

//concept of chaining
const newnum=mynum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
console.log(newnum)
/*
// output
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19
]

chaining output
[
  11, 21, 31, 41, 51,
  61, 71, 81, 91
]
after ading .filtr()
[ 41, 51, 61, 71, 81, 91 ]
*/