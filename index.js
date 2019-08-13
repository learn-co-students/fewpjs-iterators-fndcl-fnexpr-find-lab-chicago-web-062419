const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let sbw = array.find(sb => {
    if (sb['result'] === "W"){
      return sb.year
    } else {
      return undefined
    }
  })
  if(sbw){
    return sbw.year
  }
}