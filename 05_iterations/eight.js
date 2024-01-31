const mynum=[1,2,3]

/*const mytotal = mynum.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval;
},0)
console.log(mytotal); //6
*/
const mytotal =mynum.reduce((acc,currval)=>(acc+currval),0)
console.log(mytotal); //6
/*
output
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

const shoppingcart=[
    {
        item: "food",
        price: 3
    }
    ,
    {
        item: "foo",
        price: 2
    }
    ,
    {
        item: "fook",
        price: 4
    }
    ,
    {
        item: "foot",
        price: 5
    }
]
const ans=shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log(ans); //14