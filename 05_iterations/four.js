// about for in loops
const myobject={
    a: "anand",
    k: "kumar",
    j: "jha"
}

for (const key in myobject) {
    //console.log(key);
}
/*a
k
j*/
for(const key in myobject){
    //console.log(`${key} shortcut is for ${myobject[key]}`);
}
/*a shortcut is for anand
k shortcut is for kumar
j shortcut is for jha*/

const arr=["prr","brr","crr","drr"]
for(const key in arr){
    console.log(key);
}
/*0
1
2
3*/
for(const key in arr){
    console.log(arr[key]);
}
/*prr
brr
crr
drr*/