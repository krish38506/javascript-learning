const username= [] // !empty string true, empty string false, empty array is considerd to be true
if(username){
    console.log("have user name")// have user name
}
else{
    console.log("fuck off")
}
// falsy valuees

// false, 0, -0, BigInt 0n,"", null, undefined, NaN

//truthy values
//"0",'false'," ",[],{},function(){}
if(username.length===0){
    console.log("array is empty"); //array is empty
}

const emptyobj ={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")  //object is empty
}
// Nullesh coalescing operator(??): null undefined

let val1;
//val1=5??10
//val1 =null??10
//val1= undefined?? 7
val1= undefined?? 10??15
console.log(val1) //5,10,7,10


// Ternary operator

//condition ? true : false
const ice =100
ice>80? console.log("more than 80"): console.log("less than 80"); //more than 80