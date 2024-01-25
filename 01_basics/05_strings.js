const name="anand"
const repocount =50

//console.log(name + repocount + " value")
console.log(`hello my name is ${name} and my repocount is ${repocount}`) // ` back textm
const gamename=new String('anand-jh-a') // give key value pair
console.log(gamename.__proto__); // give prototype
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('d'));
const newString =gamename.substring(0,5) // only positive value if you provide -ve value here at strart it will auto it to 0
console.log(newString)
const anotherstring=gamename.slice(-6, 5) // we can give negative value as well here // result=d
console.log(anotherstring)
// trim remove starting space and end space
const ns1="   anand   "
//console.log(ns1)//     anand 
//console.log(ns1.trim()) //anand
const url= "https://anand.com/anand%40jha"
////console.log(url.replace('%40','-'))
////console.log(url.includes('anand')) // true
//console.log(gamename.split('-')); // give aray without - and seprated