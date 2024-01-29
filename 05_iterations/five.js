const coding =["anand","kumar", "jha"]
//coding.forEach(function(val){ 
//    console.log(val);
//})
// output
/*anand
kumar
jha*/

coding.forEach((val) => {
    console.log(val);
})
/* output
anand 
kumar
jha
*/

function printme(item){
    console.log(item)
}

coding.forEach(printme)
/*
anand
kumar
jha
*/

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
/*
anand 0 [ 'anand', 'kumar', 'jha' ]
kumar 1 [ 'anand', 'kumar', 'jha' ]
jha 2 [ 'anand', 'kumar', 'jha' ]
*/
const mycoding=[
    {
        a: "k",
        b: "d"
    }
    ,
    {
        a: "f",
        b: "h"
    }
    ,
    {
        a: "j",
        b: "m"
    }
]
mycoding.forEach((items)=>{
    console.log(items.a)
})

/*
k
f
j
*/
