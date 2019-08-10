const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let win = array.find( function(s){
    if(s['result'] === 'W'){
      return s.year
    } else {
      return undefined
    }
  })
  if(win){
    return win.year
  }
}
 