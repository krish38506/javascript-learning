/*switch (key) {   -------> basic syntax
    case value:
        
        break;

    default:
        break;
}*/

const month=3
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("no case matched")
        break;
}
// output mar if brek is not written after case 3 then it will execute all cases except default case