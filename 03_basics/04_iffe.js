// iffe


(function chup(){
    // named iffe
    console.log(`DB CONNECTED`)
})();  // DB CONNECTED , direct execution without printing chup(), ; lgana compuslory h yaha pe , terminate krne k lie
// global scope k pollution se kai bar problem hoti h , usse hatane k lie hmne iffe ka use kiya h
//chup() //DB CONNECTED



((name)=>{
     // unnamed iffe
    console.log(`DB CONNECTED TWO ${name}`)
})('anand');//DB CONNECTED TWO, DB CONNECTED TWO anand ,jo alg se likhte the na exeution k lie chup() usi trh isko () treat kiya
// jaa skta h , or argument pass kiya jaa skta h