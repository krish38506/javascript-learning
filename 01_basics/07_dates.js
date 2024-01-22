  // dates

  let mydate= new Date()
  console.log(mydate)
  console.log(mydate.toString())
  console.log(mydate.toDateString())
  console.log(mydate.toLocaleString())
  console.log(typeof mydate) // object
  let mycreatedate=new Date(2024,0,21) // month start with 0
  let mycreatedat=new Date(2024,0,21,5,41) // month start with 0
  let mycreateda=new Date("01-24-2024") // month start with 0
  console.log(mycreatedate.toDateString())
  console.log(mycreatedat.toLocaleString())
  console.log(mycreateda.toLocaleString())
  let mytimestamp= Date.now();

  console.log(mytimestamp)
  console.log(mycreateda.getTime()) // int ms
  console.log(Math.floor(Date.now()/1000)); // in sec

  let newdate =new Date()
  console.log(newdate)
  console.log(newdate.getMonth()+1)
  console.log(newdate.getDay())
  newdate.toLocaleString('default',{
    weekday: "long"
  })