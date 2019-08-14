// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(record) {
  let winning = record.find( obj => obj.result === "W")
  return winning ? winning.year : undefined
};

superbowlWin(record);