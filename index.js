// code your solution here
function superbowlWin(arr, index) {
     const result = arr.find(item => item.result === 'W')
     console.log(result)
     return (result ? result.year : undefined)
    
    
}


const record = [
{ year: "2018", result: "L"},
{ year: "2014", result: "N/A"},
{ year: "2013", result: "W"}
]
console.log(superbowlWin(record))