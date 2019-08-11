const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

// Create a function called superBowlWin to take in argument of an array
// use .find()
// if the element's result was a "w" then return that elements year
// else return 'undefined'

const superBowlWin = (record) => {
  record.find(record => {
    if (record.result === "W") {
    return record.year;
  } else {
    return "undefined"
  }
})
} 

// Invoking the function
superBowlWin(record)