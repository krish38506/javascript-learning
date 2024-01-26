//let a =10
//const b=20
//var c= 30
let a =300 // global scope
//var c =300
if(true){ // local scope
    let a =10
    const b=20
     //var c= 30
   //  console.log("INNER: ",a) // INNER:  10

}
/*for(let i=0;i<array.length;i++){
    const element =array[i];
}*/
console.log(a)//10   through error ,, 300
//console.log(b) //20 because these are outofscope
//console.log(c)// 30 it will give 30 as a result,, it will still give 30 as a result if you not declear var inside if

//****************** scope in nested************************/
function one(){
    const username="anand"
    function two(){
        const website = "youtube"
       // console.log(username) // anand
    }
    //console.log(website)----> will give error bcz it is out of scope
    two() // agr hm isko comment out krde to anand kabhi print nhi hoga bcz ye kabhi execute nhi hoga
}
//one()

if(true){
    const username= "anand"
    if(username==="anand"){
        const website= "youtube"
       // console.log(username+ website); //anandyoutube
    }
    //console.log(website); // give error , bcz it is out of scope
}

//console.log(username); it is also out of scope


//*****************imp concept******************************************************************************* */ */
function addone(num){ // f1
    return num+1;
}
addone(5) // if we declare this before above function then no error will come
///    here then it will through out error -
const addtwo= function(num){ //f2          |
    return num+2                      //   |
}                                     //   |
                                      //   |
addtwo(5) // if we declare this -----------
// f1 and f2 both are functions but f2 is called expression function