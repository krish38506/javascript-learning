const score =100;
console.log(score) //100

const balance = new Number(100) // object
console.log(balance)//[Number: 100]

console.log(balance.toString().length)
console.log(balance.toFixed(2));
const on=123.8966
console.log(on.toPrecision(4))
const hundreds = 1000000
console.log(hundreds.toLocaleString()) // convert to us standards 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

  
//****************************************************************mathsssssssssss************************** */
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6)) //5 
console.log(Math.ceil(4.2))//5 
console.log(Math.floor(4.9)) //4    

console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) //x >=0&& x<=1
console.log(Math.floor(Math.random()*10)+1) // vaue shoud be >1 && <=9

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+10)
console.log(Math.floor(Math.random()*(max-min+1))+10) // kiske beech me value chaiye