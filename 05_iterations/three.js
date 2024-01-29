// for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

const greetings= "hello world!"
for(const greet of greetings){
  //  console.log(`each char is ${greet}`)
}

//maps 
// unique values, order fix
const map = new Map()
map.set('IN', 'india')
map.set('USA', 'united states of america')
map.set('fr','france')
map.set('IN', 'india')

/*console.log(map) /*Map(3) {
    'IN' => 'india',
    'USA' => 'united states of america',
    'fr' => 'france'
  }*/
for(const key of map){
    //console.log(key);
}
// output
/*[ 'IN', 'india' ]
[ 'USA', 'united states of america' ]
[ 'fr', 'france' ]*/
for(const [key,value] of map){
    console.log(key, ':-',value)
}
//output
/*IN :- india
USA :- united states of america
fr :- france*/
const myobject={
    'game1' : 'cod', // if you remove the quotes it will still give the same error
    'game2': 'gta'
}
for(const [key,value] of myobject){
    console.log(key, ':-',value)
}
// will give error, it will say my object is not iterable
