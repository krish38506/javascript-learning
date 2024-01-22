// arrays

const myarr = [1,2,3,4,5]
const myheroes = ["anand","jha"]

const myarr2= new Array(0,1,2,3)
console.log(myarr[1])
// arrays method
//myarr.push(6)
//myarr.push(7)
// myarr.pop() remove last element
//myarr.unshift(9) // addelement at 0th position
//myarr.shift() // remove element from 0th position
//console.log(myarr)
//console.log(myarr.includes(9))
//console.log(myarr.includes(3))
//c/onsole.log(myarr.indexOf(9))
//console.log(myarr.indexOf(3))
const newarr = myarr.join()
console.log(myarr)
console.log(typeof myarr) // object
console.log(newarr) 
console.log(typeof newarr) // string

// slice, splice
console.log("A", myarr)

const myn1= myarr.slice(1,3) // include index 1 2 AND NOT 3
console.log(myn1)
console.log("B", myarr) // REMAIN same as original array 
const myn2= myarr.splice(1,3) 
console.log(myn2) // it will print index from 1 till 3 includes
console.log("C",myarr) // remove elements frome index 1 to 3 and print remaining array
