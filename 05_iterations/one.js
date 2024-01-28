//for

for(let i=0;i<=10;i++){
    const element =i;
   // console.log(element)
}
// will print 0 to 10

for(let i=0;i<=10;i++){
    const element =i;
    if(element==5){
    //    console.log("5 is a best number")
    }
   // console.log(element)
}

for(let i=0;i<=10;i++){
    console.log(`outer loop is: ${i}`)
    for(let j=0;j<=10;j++){
        //console.log(`inner loop value is ${j} , inner loop us ${i}`)
       // console.log(i+ '*'+j + ' = '+ i*j)
    }
}

let myarray=["anand", "prahlad", "jha"]
console.log(myarray.length)
for(let i=0;i<myarray.length;i++){
    const element =myarray[i]
    //console.log(element)
}

for(let i=0;i<=20;i++){
    if(i==5){
        //console.log("detected: 5")
        break;
    }
    //console.log(`value is: ${i}`)
}
for(let i=0;i<=20;i++){
    if(i==5){
        console.log("detected: 5")
        continue;
    }
    console.log(`value is: ${i}`)
}