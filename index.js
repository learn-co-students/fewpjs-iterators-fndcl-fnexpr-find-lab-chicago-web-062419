const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArr){
  //console.log(objArr)
  //const myKeys = Object.keys(objArr)
  let myWin = objArr.find((key)=>{
    return key['result'] === 'W'
  })
  
  if(myWin == null)
    return
  else{
   return myWin['year']
  }

    //return myWin['year']

  
}
