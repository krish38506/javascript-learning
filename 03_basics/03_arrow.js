const user = {
    username: "anand",
    price: 1000,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this) // adding this line, give result at a paarticular contest
    }
}

//user.welcomemessage(); //anand , welcome to website
/*anand , welcome to website // after using this
{
  username: 'anand',
  price: 1000,
  welcomemessage: [Function: welcomemessage]
}*/
//user.username = "sam"
//user.welcomemessage() //sam , welcome to website
/*sam , welcome to website after using this
{
  username: 'sam',
  price: 1000,
  welcomemessage: [Function: welcomemessage]
}*/
//console.log(this) //{}, no contest in global
/*function chup(){
    let username= "anand"
    console.log(this.username) // it will print undefiend
}
chup()*/
/*<ref *1> Object [global] {------------------> if you only use this in chup() function then it is output
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]*/
  /*const chup = function(){
    let username = "anand"
    console.log(this.username) // undefined, bcz we can not access variable like this in functionns like  objects
  }
  chup() */// undefned , reson is above






  //+++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++++
  // we can use => instead of function 
  /*const chup = ()=>{
    let username = "anand"
    console.log(this) 
  }
  chup()*/ // undefined, will behave same as function
  const addtwo = (num1,num2)=>{
    return num1+num2;  // explicit return usre of {}
  }
  console.log(addtwo(3,4)) //7
  /** same as above below */
  // implecit return without using {}
  const addtow =(num1,num2)=> num1+num2;// --------both are same----------|
  const adtow =(num1,num2)=> (num1+num2);/////---------------------------|

  const addto=(num1,num2)=> ({username: "anand"}) // object of {} pack krna hi pdega
  console.log(addtow(4,9))  //13
  console.log(addto(3,4)) // { username: 'anand' }