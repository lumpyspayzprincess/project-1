# Project 1: "Souldoku"

## Description

In the first module of the course, we learned how to create a basic webpage using HTML5 and JavaScript.

This included getting familiar with tools such as VSCode (which was the integrated development environment/IDE), the command line (and CLIs), Git (where I created my first repo and added to it as the project progressed) and GitHub (where I could manage the project and deploy it).

I was given a two-week period to create a game which uses a grid, write the code for it and deploy a working iteration that could be accessed on the web.

I decided to create a game, which I’ve called “Souldoku”. It is a Sudoku game that uses the logic of Sudoku, where only unique numbers must be in a row, column and mini-grid. I chose this project as I’m a nerd that enjoys games like Wordle, Two Dots and Sudoku and wanted to create a project that I’d enjoy playing while fitting the ‘grid’ brief.

### Link to the gane

[HERE](https://lumpyspayzprincess.github.io/project-1/index.html)

## Getting Started/Code Installation

- Created the directory for the project 
- In VSCode, I used the HTML5 boilerplate to start the index.html file in the root
- Created the main.css file for the CSS
- Created the index.js file for the JavaScript

To work on JS locally, I had to install Node.js, referencing this documentation (https://nodejs.org/en/docs/).

Once node was installed, I was then able to use the terminal in VSCode with the keyword ‘npm’ (node package manager) to make changes to run the code.

## Timeframe & Working Team

- I worked independently on this
- Timeframe: 2 weeks


## Technologies Used

- Backend - JS/Node
- Frontend - CSS/JS/HTML
- Development tools: VSCode, GitHub


## Brief

The app must:
- Render a game in the browser
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)
- Be a working game, built by you, hosted somewhere on the internet
- Include a git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project; and a readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

## Planning

![whiteboard](/readme/whiteboard.png)

I used Excalidraw to create my sketches and create the pseudocode to figure out how the grade should look.

[Figma](https://www.figma.com/file/l1LtEfj9QcG6IgvStj36Bx/Souldoku?node-id=0%3A1)
I then used Figma to make more of an elaborate prototype for the look and behaviour of the game.

This was a single-person project, so I was responsible for the design, engineering and deployment of the project

## Build/Code Process

I decided to build a page that I knew I’d enjoy playing, as well as building, so I decided to build a Sudoku game.

First, I started by thinking about how I wanted the game to come together, so as I was planning, I’d written pseudo-code to demonstrate how I’d write the code if I was only using HTML.

Once that was done, I then listed all the different DOM elements that I’d need in my app.js file, which contained all of my JavaScript.

Once I had the DOM elements listed, I then started to think about the logic of the game.

As Sudoku games require each line horizontally and vertically to have a series of unique numbers between 1 and 9, I had to make sure that I didn’t repeat any numbers. I thought about randomising the numbers in an array, but at the time, my knowledge of JavaScript was not sufficient to write code that would ensure that I wouldn’t get any repeats of the numbers I needed in my array.

To get around that, I had multiple arrays of answers, with numbers between 1-9, that were predefined to ensure that the logic in the game was correct.

### Code

`
  const arrayOfAnswersRow1 = [1, 7, 9, 4, 3, 2, 5, 6, 8]
  const arrayOfAnswersRow2 = [6, 5, 3, 8, 9, 7, 1, 2, 4]
  const arrayOfAnswersRow3 = [8, 2, 4, 5, 1, 6, 9, 3, 7]
  const arrayOfAnswersRow4 = [9, 1, 5, 6, 8, 3, 7, 4, 2]
  const arrayOfAnswersRow5 = [2, 4, 6, 1, 7, 5, 8, 9, 3]
  const arrayOfAnswersRow6 = [3, 8, 7, 2, 4, 9, 6, 1, 5]
  const arrayOfAnswersRow7 = [5, 6, 1, 7, 2, 4, 3, 8, 9]
  const arrayOfAnswersRow8 = [4, 9, 8, 3, 5, 1, 2, 7, 6]
  const arrayOfAnswersRow9 = [7, 3, 2, 9, 6, 8, 4, 5, 1]
  `

`
  const arrayOfAnswers = arrayOfAnswersRow1.concat(arrayOfAnswersRow2).concat(arrayOfAnswersRow3).concat(arrayOfAnswersRow4).concat(arrayOfAnswersRow5).concat(arrayOfAnswersRow6).concat(arrayOfAnswersRow7).concat(arrayOfAnswersRow8).concat(arrayOfAnswersRow9)
`

`
  const arrayOfAnswersRow1a = [0, 0, 0, 4, 0, 2, 0, 6, 0]
  const arrayOfAnswersRow2a = [0, 5, 3, 0, 9, 7, 0, 0, 4]
  const arrayOfAnswersRow3a = [0, 2, 4, 5, 0, 6, 9, 0, 7]
  const arrayOfAnswersRow4a = [0, 0, 5, 6, 0, 3, 7, 4, 0]
  const arrayOfAnswersRow5a = [0, 0, 6, 0, 0, 5, 0, 0, 3]
  const arrayOfAnswersRow6a = [0, 0, 0, 2, 4, 9, 6, 0, 5]
  const arrayOfAnswersRow7a = [5, 6, 0, 7, 0, 4, 3, 0, 9]
  const arrayOfAnswersRow8a = [0, 9, 0, 0, 5, 0, 0, 9, 6]
  const arrayOfAnswersRow9a = [0, 3, 2, 0, 6, 0, 4, 0, 0]
`
`
  const arrayOfWhatsOnBoard = arrayOfAnswersRow1a.concat.(arrayOfAnswersRow2a).concat(arrayOfAnswersRow3a).concat(arrayOfAnswersRow4a).concat(arrayOfAnswersRow5a).concat(arrayOfAnswersRow6a).concat(arrayOfAnswersRow7a).concat(arrayOfAnswersRow8a).concat(arrayOfAnswersRow9a)`
`
  const startingArray = arrayOfWhatsOnBoard.map((numberInCell) => (numberInCell))`
`

Once that was done, I then created the grid by defining the width of the grid that was based on the length of the arrays that were being used. This ensured that every number in the array of arrays would then populate its own cell within the Sudoku grid.

#### DOM
`
  const amountOfNumbersInGrid = arrayOfAnswers.length
  const width = Math.sqrt(amountOfNumbersInGrid)
  function createGrid() {
    for (let iOfS = 0; iOfS < amountOfNumbersInGrid; iOfS++) {
    const btnSud = document.createElement('button')
    btnSud.classList.add('cells')
    btnSud.setAttribute("id", index-${iOfS})
    // btnSud.innerText = i  // ? Debugging trick, show the indexes.
   arrayOfSCellsObjs.push(btnSud) // ? Add my cell to my cells array.
   gridOfCells.appendChild(btnSud)
   btnSud.addEventListener('click', () => selectSCell(iOfS))
   btnSud.addEventListener('mouseover', () => hoverOverCellBeforeSelecting())
   btnSud.addEventListener('mouseout', () => noMoreHoverOrSelect())
 }
}
    // console.log(arrayOfSCellsObjs)
  createGrid()`

I was then able to use the same logic to create the number grid that input the numbers into the empty cells on the Sudoku grid.

I also added some very cool features!

#### Hovering over the cell to show that the cell will be selected:

`
function hoverOverCellBeforeSelecting() {
  // console.log("You hovered over me!")
  event.target.classList.add("hovered") //would like to not use 'event' if I can
}
`

This shows the cell that is being hovered by changing the class of the element.

`function noMoreHoverOrSelect() {
  // interval -> if (newValueInSCell != oldValueinSCell)
  // console.log("no more Hover!")
  event.target.classList.remove("hovered")}
`

The class of the cell in the HTML is managed by JS using the DOM. The JS adds “hovered” to the class of the element that has been hovered over with an event listener. The background colour in the CSS for elements with the “hovered” class is yellow, so the cell turns yellow. It is then removed with another event listener that works on with an interval to see if the cell is still hovered over. If not, the class is removed from the cell, the background is back to its original.

#### To win the game

`function completeGame()  {
  arrayOfAnswers.forEach((num, index) => {
    arrayOfSCellsObjs[index].innerText = num
    startingArray[index]= num
  })}
`

This forces the game to be completed by copying the numbers in the original array into the cells. This was useful for testing without inputting the numbers.

## Challenges

- #### Randomising the numbers

I initially wanted to create a game that randomly generated numbers that were inserted into the grid with each refresh of the game.

I stepped away from that idea as I had trouble making sure that the 81 numbers for the answers were put in an order where there was only one of each digit seen horizontally, vertically and within a grid, and there were enough empty cells to make the game challenging but not too difficult for the user.

I got around this by having a set of static arrays which included numbers between 0 and 9 that I knew logically matched the rules of the Sudoku that were displayed when the page loaded. Any cells with the “0” in its contents, had its contents set to `display: none` and were able to be edited by the user.

- #### Matching the number in the number grid to the cell grid

I managed to do this, but had to make sure that the data types were the same as I was using the “innerText” property to input numbers into the cells, which meant that I could not match the numbers as I wanted. 

- #### Aesthetics

I had trouble using Flexbox and CSS look exactly the way I wanted but needed more time.

## Wins

I've created a game that meets all the objectives of my brief!

It was a challenging but rewarding process, and I'm proud of what I accomplished. Along the way, I figured out how to customise a span to a gradient title, which was a great learning experience. I also found the perfect font from Google Fonts ([here](https://fonts.google.com/specimen/Press+Start+2P)), which really elevated the overall aesthetic.

I also made something that friends and family have tried for themselves and enjoyed, and gotten really impactful feedback from my peers that I’ve taken on board into my next projects.

There were no bugs in the finished product, which is something I was very pleased with also.

## Key Learnings/Takeaways

### More confidence with Flexbox

I have a better idea of what properties should be used and when; e.g. using ‘wrap’ for creating the grid, and ‘flex-grow’ to ensure that the overall grid element takes up a specific proportion of space in its parent element.

I'm also good at creating grids and understanding what contexts using grids would make sense.

### Better utilisation of arrays in JavaScript and their methods

I struggled with understanding how `NodeLists` seen on the webpage corresponded to arrays and how to use the querySelector to find the elements I want to work with. I know have a deeper understanding and am confident that I could do more with the elements more efficiently.

## Future Improvements

- ### Refactoring the code:
I’ve grown to enjoy using TypeScript and React and feel that the code would be cleaner and it would be easier to incorporate code that could make the game more difficult without repeating key parts of code.

I’d also like to remove any existing redundancies and repeated code and decrease my reliance on using the DOM to create and manipulate elements.

- ### Implement crayon interface 
In the future, I’d like for the game to use crayons instead of number grids (see Excalidraw).

I will need to create a transparent PNG and associate a number to a colour which will fill the crayon.

- ### Make the game random so there is a different grid when a user refreshes

- ### A timer

It would be nice to include a time that starts when the page loads and ends when the game is completed.

- ### An improved win screen

- ### Different levels

- ### The ability to play with others online



