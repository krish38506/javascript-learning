//const tinderuser = new Object() // 1way to declear an object it is a singleton object
//console.log(tinderuser) // {}
const tinderuser = {} // another way to declear object, non singleton object
//console.log(tinderuser) // {}
tinderuser.id ="123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
console.log(tinderuser) // { id: '123abc', name: 'sammy', isloggedin: false }
const regularuser = {
    email: "k@gmail.com",
    fullname: {
        userfullname:{
            firstname: "anand",
            lastname: "jha"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname) // anand
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}
//const obj3 ={obj1,obj2}
//console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// {}--> act as a new object and all other act as a source
//const obj3 =Object.assign({},obj1,obj2,obj4) // will give exact output, but it better to use {}-->act as target and all other act as sourece, inside assign


// most of the time we use this
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const user =[
    {
        id: 1,
        email: "a@b.c"
    },
    {
        id: 2,
        email: "b@b.c"
    },
    {
        id: 3,
        email: "c@b.c"
    }
]
//console.log(user[1].email) // b@b.c
console.log(tinderuser)
console.log(Object.keys(tinderuser))  // [ 'id', 'name', 'isloggedin' ] in form of array
console.log(Object.values(tinderuser)) // [ '123abc', 'sammy', false ] in form of array
console.log(Object.entries(tinderuser)) // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]
console.log(tinderuser.hasOwnProperty('isloggedin')) // true
console.log(tinderuser.hasOwnProperty('islogged')) // false


const course ={
    coursename: "timepass",
    price: 1000,
    courseinstructior: "anand"
}
//const {courseinstructior}= course
const {courseinstructior: instructor}= course
//console.log(courseinstructior) // anand
console.log(instructor) // anand

// JASON is an API
// JASON is similar to object but without any name
//{
 //   "name": "anand",
 //   "coursename" :"kuch nahi",
  //  "price": "free"
//}
// API can be in form of array as well
// like this
[
    {},
    {},
    {}
]