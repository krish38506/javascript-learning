const coding =["c++","python","js","golang"]

/*const value=coding.forEach((items)=>{
      //console.log(items); //undefined aayega hi aayega for eachloop me return k time
      //return items;
})*/
//console.log(value); 

const mynums=[1,2,3,4,5,6,7,8,9,10]

//const newnums=mynums.filter((num)=>num>4);
/*const newnums=mynums.filter((num)=>{  // jb scope open krdoge {} lga k to return ka use krna pdega
     return num>4
});*/
const newnums=[]
mynums.forEach((nums)=>{
      if(nums>4){
            newnums.push(nums)
      }
      return newnums
})

//console.log(newnums); //[ 5, 6, 7, 8, 9, 10 ],, [ 5, 6, 7, 8, 9, 10 ] ,, [ 5, 6, 7, 8, 9, 10 ]same output

const books = [
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
      { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
      { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
      { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
      { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
      { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
      { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
      { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    let userbook=books.filter((bk)=>bk.genre==="History")
    userbook=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==="History"})
    console.log(userbook)
// output
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
 output 2
 [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]

otput 3
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
