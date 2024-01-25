function myname(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}
myname() /*
A
N
A
N
D*/
/*function addtwonumber(n1,n2){
    console.log(n1+n2);
}*/
//const result=addtwonumber(5,3);
//console.log("result is:" , result); // undefined
function addtwonumber(n1,n2){ //fun 2
    //let result=n1+n2
    //console.log("anand") /// agr ye line return k bad hoti to print na hoti lekin abhi hogi
    //return result
    return n1+n2; // aise bhi kr skte hn
}
//addtwonumber() // NaN
//addtwonumber(4,3) // 7 agr 3 ko string form me denge to kud hi conversion kr lega 4 ko string me
// simalary other conversion
const result=addtwonumber(5,3);
console.log("result is:" , result); // result is: 8  for fun 2
function loginusermessage(username){ // (username= "an") it will treat as a defult value if no value is given then it will use this
    if(username===undefined){ // if(!username) == same result // to avoid undefined
        console.log("please enter a user name")
        return;
    }
    return `${username} just logged in`
}
console.log(loginusermessage("anand")); // anand just logged in // if you dont pass anything in () then it return 
// undefined just logged in
console.log(loginusermessage()) // please enter a user name
//undefined


//... is spread as well as rest operator , which put everything in an array
function calculatecartpric(...num1){
    return num1;
}
console.log(calculatecartpric(200,1,222,2000)); // [ 200, 1, 222 ,2000]
function calculatecartprice(val1,val2,...num1){
    return num1;
}
console.log(calculatecartprice(200,1,222,2000)); // [ 222, 2000 ] 200 leliya value 1 ne and 1 value2 rest num1 me aa gya

// how to handle object in functions
const user={
    username: "anand",
    price: 2000
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user) // username is anand and price is 2000 if we use prices insted of price in user object then it will give
// undefined in the place of 2000
handleobject({ // we can pass object like this as well
    username: "sam",
    price: 2900
})
//result
// username is sam and price is 2900

// handling array inside functions
const myarray =[200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1];
}
console.log(returnSecondValue(myarray)) // 400
console.log(returnSecondValue([1,2,3,4,5])) // 2