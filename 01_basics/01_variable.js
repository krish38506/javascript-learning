const accountId=144553
let accountEmail="anand@google.com"
var accountPassword="1234"
accountCity="jaipur"
let accountState;
//accountId=112 not possible to assign another variable
console.log(accountId)
accountEmail="a@b.com"
accountPassword="331"
accountCity="delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//accountState will print undefined because it is not assing any value
/* prefer not to use var
because of issue in block scope and functonal scope
*/