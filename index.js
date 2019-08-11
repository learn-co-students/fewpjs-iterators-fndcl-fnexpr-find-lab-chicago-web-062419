// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

const superBowlWin = (record) => {
  record.find(record => {
    if (record.result === "W") {
    return record.year;
  } else {
    return "undefined"
  }
})
} 

superBowlWin(record)