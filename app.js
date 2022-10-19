// !

// ?

// * DOM VARIABLES

const pageTitle = document.querySelector('h1')
const gridOfCells = document.querySelector('.grid')
const answerButton = document.querySelector('.answers')
const btnForNewGame = document.querySelector('#new-game')
const btnToEraseCell = document.querySelector('#erase')
const btnToUndo = document.querySelector('#undo')
const gridOfNum = document.querySelector('.number-grid')

// * ARRAYS

const arrayOfAnswersRow1 = [1,7,9,4,3,2,5,6,8]
const arrayOfAnswersRow2 = [6,5,3,8,9,7,1,2,4]
const arrayOfAnswersRow3 = [8,2,4,5,1,6,9,3,7]
const arrayOfAnswersRow4 = [9,1,5,6,8,3,7,4,2]
const arrayOfAnswersRow5 = [2,4,6,1,7,5,8,9,3]  
const arrayOfAnswersRow6 = [3,8,7,2,4,9,6,1,5]
const arrayOfAnswersRow7 = [5,6,1,7,2,4,3,8,9]
const arrayOfAnswersRow8 = [4,9,8,3,5,1,2,7,6]
const arrayOfAnswersRow9 = [7,3,2,9,6,8,4,5,1]

const arrayOfAnswers = arrayOfAnswersRow1.concat(arrayOfAnswersRow2).concat(arrayOfAnswersRow3).concat(arrayOfAnswersRow4).concat(arrayOfAnswersRow5).concat(arrayOfAnswersRow6).concat(arrayOfAnswersRow7).concat(arrayOfAnswersRow8).concat(arrayOfAnswersRow9)

class SudoduCell {
  constructor(){
    this.number = 0,
    this.isCorrect = 0,
    this.canBeEdited = 1,
    this.canEdit = 1,
    this.isSelected = 0
  }
}

// * CREATING GRIDS

// ? sudoku

const arrayOfSCellsObjs = []
const amountOfNumbersInGrid = arrayOfAnswers.length

const width = Math.sqrt(amountOfNumbersInGrid)
const newCellInArray = new SudoduCell
const numberInCell = newCellInArray.number

function createGrid() {
  for (let i = 0; i < amountOfNumbersInGrid; i++) { 
    const btnSud = document.createElement('button')
    btnSud.classList.add('cells')
    btnSud.setAttribute("id", `index-${i}`)
    btnSud.innerText = i  // ? Debugging trick, show the indexes.
    arrayOfSCellsObjs.push(btnSud) // ? Add my cell to my cells array.
    gridOfCells.appendChild(btnSud)
    btnSud.addEventListener('click', () => testFuncCell())
    btnSud.addEventListener('mouseover', () => hoverOverCellBeforeSelecting())
  }
}

createGrid()

const cellInGrid = document.querySelectorAll('.cells')


// ? number

const arrayOfNCellsObjs = []

function numberGrid() {
  for (let i = 0; i < 9; i++) {
    const btnNum = document.createElement('button')
    btnNum.classList.add('number-input')
    btnNum.innerText = i + 1 
    btnNum.setAttribute("id", `number-${i + 1}`)
    arrayOfNCellsObjs.push(btnNum) 
    gridOfNum.appendChild(btnNum)
    btnNum.addEventListener('click', () => testFuncNum()) // nb add arrow function to stop func from running immediately
  }
}
numberGrid()

const numbersInGrid = document.querySelectorAll('.number-input')

// // console.log(numbersInGrid)

// // console.log(arrayOfSCellsObjs)

function testFuncCell() { // this is the function that should run when button is clicked on
  console.log("Click me to change the contents of a cell on the grid.") 
}

function testFuncNum() { // this is the function that should run when button is clicked on
  console.log("Click me to select a number") 
}

function hoverOverCellBeforeSelecting() {
  console.log("You hovered over me!")
}

// // function numIntoSGrid() {
// //   console.log(numInputBtn.textContent)
// // }

// // numIntoSGrid()

// // // * CHECKING ANSWERS



// // // function checkNumber(numberInCell) {
// // //   if (numberInCell ===)
// // // }

// // const selectedSudokuCell = null
// // const selectedNumCell = null
// // let errors = 0