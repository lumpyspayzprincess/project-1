// !

// ?

// * DOM VARIABLES & EVENT LISTENERS

const pageTitle = document.querySelector('h1')
const gridOfCells = document.querySelector('.grid')
const gridOfNum = document.querySelector('.number-grid')
const arrayOfSCellsObjs = []

const answerButton = document.querySelector('.answers')
answerButton.addEventListener('click', () => matchCell())


const btnForNewGame = document.querySelector('#new-game')
btnForNewGame.addEventListener('click', () => resetGame())
function resetGame() {
  // console.log("Reset game!")
  arrayOfWhatsOnBoard.forEach((num, index) => {
    arrayOfSCellsObjs[index].innerText = num
  })
}

const btnToEraseCell = document.querySelector('#erase')
btnToEraseCell.addEventListener('click', () => eraseCell())
function eraseCell() {
  // console.log("Clear cell!")
  // arrayOfSCellsObjs[indexOfSelectedSCellindexOfSelectedSCell].classList.add("hide")
  // clear cell should only happen when isCorrect != 1, else nothing works
  console.log(arrayOfSCellsObjs[indexOfSelectedSCell])
  arrayOfSCellsObjs[indexOfSelectedSCell].innerText = "0"
}


// const btnToUndo = document.querySelector('#undo')
// btnToUndo.addEventListener('click', () => undoMove())
// function undoMove() {
//   // console.log("Undo last move.")
//   // need to return "original value of cell"

// }


const numbersInGrid = gridOfNum.querySelector('number-input')
// const myArrayOfNumInputs = Array.from(numbersInGrid)
// console.log(numbersInGrid); //why doesn't this worrrrk

// const editedCell = document.querySelector('')

// * ARRAYS

const arrayOfAnswersRow1 = [1, 7, 9, 4, 3, 2, 5, 6, 8]
const arrayOfAnswersRow2 = [6, 5, 3, 8, 9, 7, 1, 2, 4]
const arrayOfAnswersRow3 = [8, 2, 4, 5, 1, 6, 9, 3, 7]
const arrayOfAnswersRow4 = [9, 1, 5, 6, 8, 3, 7, 4, 2]
const arrayOfAnswersRow5 = [2, 4, 6, 1, 7, 5, 8, 9, 3]
const arrayOfAnswersRow6 = [3, 8, 7, 2, 4, 9, 6, 1, 5]
const arrayOfAnswersRow7 = [5, 6, 1, 7, 2, 4, 3, 8, 9]
const arrayOfAnswersRow8 = [4, 9, 8, 3, 5, 1, 2, 7, 6]
const arrayOfAnswersRow9 = [7, 3, 2, 9, 6, 8, 4, 5, 1]

const arrayOfAnswers = arrayOfAnswersRow1.concat(arrayOfAnswersRow2).concat(arrayOfAnswersRow3).concat(arrayOfAnswersRow4).concat(arrayOfAnswersRow5).concat(arrayOfAnswersRow6).concat(arrayOfAnswersRow7).concat(arrayOfAnswersRow8).concat(arrayOfAnswersRow9)

const arrayOfAnswersRow1a = [0, 0, 0, 4, 0, 2, 0, 6, 0]
const arrayOfAnswersRow2a = [0, 5, 3, 0, 9, 7, 0, 0, 4]
const arrayOfAnswersRow3a = [0, 2, 4, 5, 0, 6, 9, 0, 7]
const arrayOfAnswersRow4a = [0, 0, 5, 6, 0, 3, 7, 4, 0]
const arrayOfAnswersRow5a = [0, 0, 6, 0, 0, 5, 0, 0, 3]
const arrayOfAnswersRow6a = [0, 0, 0, 2, 4, 9, 6, 0, 5]
const arrayOfAnswersRow7a = [5, 6, 0, 7, 0, 4, 3, 0, 9]
const arrayOfAnswersRow8a = [0, 9, 0, 0, 5, 0, 0, 9, 6]
const arrayOfAnswersRow9a = [0, 3, 2, 0, 6, 0, 4, 0, 0]

const arrayOfWhatsOnBoard = arrayOfAnswersRow1a.concat(arrayOfAnswersRow2a).concat(arrayOfAnswersRow3a).concat(arrayOfAnswersRow4a).concat(arrayOfAnswersRow5a).concat(arrayOfAnswersRow6a).concat(arrayOfAnswersRow7a).concat(arrayOfAnswersRow8a).concat(arrayOfAnswersRow9a)

const startingArray = arrayOfWhatsOnBoard.map((numberInCell) => (numberInCell))



// * CREATING GRIDS

// ? sudoku
const amountOfNumbersInGrid = arrayOfAnswers.length

const width = Math.sqrt(amountOfNumbersInGrid)

function createGrid() {
  for (let iOfS = 0; iOfS < amountOfNumbersInGrid; iOfS++) {
    const btnSud = document.createElement('button')
    btnSud.classList.add('cells')
    btnSud.setAttribute("id", `index-${iOfS}`)
    // btnSud.innerText = i  // ? Debugging trick, show the indexes.
    arrayOfSCellsObjs.push(btnSud) // ? Add my cell to my cells array.
    gridOfCells.appendChild(btnSud)
    btnSud.addEventListener('click', () => selectSCell(iOfS))
    btnSud.addEventListener('mouseover', () => hoverOverCellBeforeSelecting())
    btnSud.addEventListener('mouseout', () => noMoreHoverOrSelect())
  }
}

// console.log(arrayOfSCellsObjs)

createGrid()

//input number into each s cell //used startingArray so the contents can be changed and match arrayOfAnswers
startingArray.forEach((num, index) => {
  arrayOfSCellsObjs[index].innerText = num
})

// change arrayOfAnswers to other array containing numbers

const cellInGrid = document.querySelectorAll('.cells')
const clickedOnSCell = document.querySelectorAll('clicked-on')




// ? number

const arrayOfNCellsObjs = []


function numberGrid() {
  for (let iOfN = 0; iOfN < 9; iOfN++) {
    const btnNum = document.createElement('button')
    btnNum.classList.add('number-input')
    const numValue = iOfN + 1
    btnNum.innerText = Number(numValue)
    btnNum.value = numValue
    btnNum.setAttribute("id", `number-${numValue}`)
    arrayOfNCellsObjs.push(btnNum)
    gridOfNum.appendChild(btnNum)
    btnNum.addEventListener('click', () => selectNCell(iOfN)) // nb add arrow function to stop func from running immediately
    btnNum.addEventListener('mouseout', function () {
      // btnNum.classList.remove("clicked-on")
    })
  }
}
numberGrid()

// ? CREATE ARRAY OF OBJS TO MATCH NUM TO

class SudoduCell {
  constructor() {
    this.number = 0,
      this.isCorrect = 0,
      this.canBeEdited = 1,
      this.canEdit = 1,
      this.isSelected = 0
  }
}
const newCellInArray = new SudoduCell()
const numberInCell = newCellInArray.number
// const arrayOfObjsMatch =  []
let num = null // num is the index of the cell that has been selected -> need event listener to reassign num to index of cell selected

// num = 0

// function createArrayToMatchNums() {
//   for (let i = 0; i < amountOfNumbersInGrid; i++) { 
//     arrayOfObjsMatch.push(newCellInArray)
// }

// createArrayToMatchNums()

// function fillSomeAns() {
// for ((i % 3 === 0); i < amountOfNumbersInGrid; i++) {
//       newCellInArray.number[i] = arrayOfAnswers[i]
//       return newCellInArray.number[i]
//     }


// console.log(arrayOfObjsMatch)



// function thisCellIsCorrect() {
//   this.isCorrect = 1
//   this.canBeEdited = 0
//   this.canEdit = 0
//   this.isSelected = 0
//   return this.isCorrect
//   return this.canBeEdited
//   return this.canEdit
//   return this.isSelected
// }

// * GAME CONTROLS

let userInputCell = null
let cellOnSGrid = null

let indexOfSelectedNCell = -1
let valueOfNCell = null

function selectNCell(iOfN) { // when a cell from the number grid is clicked on, the value of the cell is saved and changes the value of the starting array
  indexOfSelectedNCell = iOfN
  valueOfNCell = iOfN + 1
  // console.log(valueOfNCell)
  arrayOfSCellsObjs[indexOfSelectedSCell].innerText = valueOfNCell
  startingArray[indexOfSelectedSCell] = valueOfNCell
  // console.log(indexOfSelectedNCell,startingArray)
  if (valueOfNCell === startingArray[indexOfSelectedSCell])
 unSelectThis()
}


let indexOfSelectedSCell = -1

function selectSCell(iOfS) { // this is the function that should run when button is clicked on
  indexOfSelectedSCell = iOfS
  // console.log(iOfS)
  arrayOfSCellsObjs[iOfS].classList.add('clicked-on')
  const buttonClicked = arrayOfSCellsObjs[indexOfSelectedSCell]
  // console.log(buttonClicked)
  let whateverIsInSCell = buttonClicked.innerText
  // if (arrayOfSCellsObjs[indexi].innerText !== "0")
  //   arrayOfSCellsObjs[iOfS].classList.remove('hide')
  console.log(whateverIsInSCell)

}



function matchCell() {
  const gameWon = startingArray.every((num, i) => {
    return arrayOfSCellsObjs[i].innerText === num
  })
  if (gameWon) {
    alert("Congratulations! You've won the game!")
  } else {
    alert("Still a bit more to do! Keep trying.")
  }
}
// have a feeling it has to do with data types




function hoverOverCellBeforeSelecting() {
  // console.log("You hovered over me!")
  event.target.classList.add("hovered") //would like to not use 'event' if I can
}


function noMoreHoverOrSelect() {
  // interval -> if (newValueInSCell != oldValueinSCell)
  // console.log("no more Hover!")
  event.target.classList.remove("hovered")
  // event.target.classList.remove("clicked-on") 
}

// arrayOfSCellsObjs[iOfS]



function hideContents() {
  for (let indexi = 0; indexi < arrayOfAnswers.length; indexi++)
    if (arrayOfSCellsObjs[indexi].innerText === "0") {
      arrayOfSCellsObjs[indexi].classList.add("hide")
    } else {
      arrayOfSCellsObjs[indexi].classList.remove("hide")
    }
}

setInterval(hideContents, 10)

function unSelectThis() {
  if (arrayOfSCellsObjs[indexOfSelectedSCell].innerText !== 0)
    arrayOfSCellsObjs[indexOfSelectedSCell].classList.remove("clicked-on")
  console.log(arrayOfSCellsObjs[indexOfSelectedSCell])
}

function completeGame()  {
  arrayOfAnswers.forEach((num, index) => {
    arrayOfSCellsObjs[index].innerText = num
  })
}