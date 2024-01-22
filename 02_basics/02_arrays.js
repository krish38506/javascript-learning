const hero1 = ["a","b","c"]
const hero2 =["d","e","f"]
//hero1.push(hero2)
//console.log(hero1); // [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ] after push operation
//console.log(hero1[3][1]) //e not a good practice
//hero1.concat(hero2)
//console.log(hero1) //[ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
//const allheros = hero1.concat(hero2)
//console.log(allheros) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// spread alteranate of concate
//const allheros = [...hero1,...hero2]
//console.log(allheros) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// spreading arrays inside arrays using flat
//const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const realanotherarr= anotherarray.flat(Infinity)
//console.log(realanotherarr) /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  //]*/
  console.log(Array.isArray("anand")) //false
  console.log(Array.from("anand")) //[ 'a', 'n', 'a', 'n', 'd' ]
  console.log(Array.isArray(Array.from("anand"))) //true
  console.log(Array.from({name: "anand"})) //[] intersting
  let s1=100
  let s2=200
  let s3=300

  console.log(Array.of(s1,s2,s3)) //[ 100, 200, 300 ]