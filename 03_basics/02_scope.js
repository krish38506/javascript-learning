//let a =10
//const b=20
//var c= 30
let a =300 // global scope
//var c =300
if(true){ // local scope
    let a =10
    const b=20
     //var c= 30
     console.log("INNER: ",a) // INNER:  10

}
/*for(let i=0;i<array.length;i++){
    const element =array[i];
}*/
console.log(a)//10   through error ,, 300
//console.log(b) //20 because these are outofscope
//console.log(c)// 30 it will give 30 as a result,, it will still give 30 as a result if you not declear var inside if