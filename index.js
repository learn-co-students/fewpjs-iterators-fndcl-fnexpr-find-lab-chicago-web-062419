const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (records) => {
  let win = records.find(object => object.result === 'W')
    return win ? win.year : undefined
};
superbowlWin(records)


