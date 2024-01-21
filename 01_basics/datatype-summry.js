// on the basis of accessing data in memory
// primative (pass by value)

// 7 types 
// string , Number,Boolen, null, undefined, Symbol,BigInt
const score=100
const scorevalue=100.3

const isLogged=false
const outsidetemp=null
let useremail; // aleardy undefined
const id=Symbol('123')
const anotherid =Symbol('123');
console.log(id==anotherid); // false
const bignumber=223334444448439393n // declaearing big int for large numebers


// reference (Non primative)
// Arrys, objects , functions datatypes of all is function, function =object function


/*JavaScript is a dynamically typed language. This means that variable
 types are determined at runtime, and you do not need to explicitly declare 
 the type of a variable before using it. You can assign different types 
 of values to a variable during its lifetime.cc

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare 
the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they
 require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to 
potential runtime errors if not handled carefully. Static typing, on the
 other hand, provides better type safety at the cost of some initial verbosity and strictness.*/
 const heroes=["spiderman","batman","captain"] // declearition of arrays
 // anything which is in {} are considerd to be object
 let mybio={
    name: "anand",
    age: 20,        // object
 }
 // function decleariotion
 const myFunction=function(){
    console.log("hello world");
 }
 console.log(typeof bignumber)
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 /*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */
//****************************************************************************************************************** */


// memory
// stack(primitive),heap(non-primitive)
//stack== copy of original value
// heap==refrence of original value

let myname = "anand"
let anothername=myname
anothername= "jha"
console.log(myname)
console.log(anothername) // because it a primitve datatype and another name is copy and not refrenece of my name

let userone ={
    email: "a@b.com",
    upi: "u@pi.com"
}
let usertwo=userone
usertwo.email="jha@email.com"
console.log(userone.email)
console.log(usertwo.email)