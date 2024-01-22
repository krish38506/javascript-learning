// singleton
//Object.create // ye hota h constructor method object create krne ka or isi me singleton bnta h

// object literals

const mysym = Symbol("key1")
const jsuser = { // it is a object, name is auto assumed string by system on anand side we can use string,boolen ..etc
    name: "anand",
    "full name": "anand jha" ,// not able to access this with dot. in console
    [mysym]: "mykey1", // <- use instead of this ->mysym: "mykey1",
     age: 20,
     location: "delhi",
     email: "anand@google.com",
     isloggedin: false,
     lastloggedindays: ["mon","sun"]
}

//methods of accesing objects
//console.log(jsuser.email) // m-1 anand@google.com
//console.log(jsuser["email"]) // anand@google.com
//console.log(jsuser["full name"]) // if we use dot full name here it will give error
//console.log(jsuser.mysym) // mykey1
//console.log(typeof jsuser.mysym) //string not symbol
//console.log(jsuser[mysym]) // to access symbol
//console.log(typeof jsuser[mysym]) //string not symbol
jsuser.email = "jha@google.com"
//Object.freeze(jsuser) not able to change anything from this because of using this function
jsuser.email = "a@bc.d" // it will not change because it is already freez
//console.log(jsuser) // when we use [] in mysm it will also show its datatype symbol
jsuser.greeting = function(){ // declearing function
    console.log("hello js user");
}
jsuser.greetingtwo = function(){ 
    console.log(`hello js user ${this.name}`); // it is called string interpolation accesing data of another object using this
}
//console.log(jsuser.greeting) // undefind [Function (anonymous)]
console.log(jsuser.greeting()) // give error becuse we freeze it initially but now after commenting it is giving hello js user
console.log(jsuser.greetingtwo()) // hello js user anand
//