

const myObject = {
  someKey: "some value",
  hello: "World",
  js: "javascript foreach object",
}

Object.entries(myObject).forEach(([key, value]) => {
  console.log(key, value) // "someKey" "some value", "hello" "world", "js javascript foreach object"
})

//loop to create array of indices to map number to point of array

function findIndexOfNumbersToMatch(numArray, num) {
  const arrayOfIndices = []
  for (let i = 0; i < 9; i++) {
    let index = numArray.indexOf(num)
    return index
    arrayOfIndices.push(index)
  }
  console.log(arrayOfIndices)
}

findIndexOfNumbersToMatch(arrayOfAnswersRow1)

// console.log(findIndexOfNumbersToMatch(arrayOfAnswersRow1,9)) // this is to find the index of a number in the array

const arrayOfObjsInCells = []

function arrayOfObjs() {
  for (let i = 0; i < amountOfNumbersInGrid; i++) {
    arrayOfObjsInCells.push(newCellInArray)
  }
}

arrayOfObjs()

function createGrid() {
  // saw that it would be easier to create rows (r) and columns (c) from yt tut
  for (let r = 0; r < width; r++) { 
    for (let c = 0; c < width; c++) {
      const btnSud = document.createElement('button')
      btnSud.classList.add('cells')
      btnSud.setAttribute("id", 'need-to-figure-this-out')
      btnSud.innerText = ((width - r - c))  // ? Debugging trick, show the indexes.
      arrayOfSCellsObjs.push(btnSud) // ? Add my cell to my cells array.
      gridOfCells.appendChild(btnSud)
      btnSud.addEventListener('click', () => testFuncCell())
    }
  }
}
createGrid()

let nIntervalID = null

// function changeWhenHovered() {
//   if (!nIntervalID)
//   nIntervalID = setInterval ()
// }
  
// }

function hoverOverCellBeforeSelecting() {
  console.log("You hovered over me!")
  cellInGrid.classList.remove("hovered")
  event.target.classList.add("hovered") //depreciated but unsure of what to use instead
}