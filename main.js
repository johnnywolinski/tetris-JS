document.addEventListener('DOMContentLoaded', () => {
const width = 10;
let k = 0;
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
let row0 = squares.slice(190, 200);
let row1 = squares.slice(180, 190);
let row2 = squares.slice(170, 180);
let row3 = squares.slice(160, 170);
let row4 = squares.slice(150, 160);
let row5 = squares.slice(140, 150);
let row6 = squares.slice(130, 140);
let row7 = squares.slice(120, 130);
let row8 = squares.slice(110, 120);
let row9 = squares.slice(100, 110);
let rows = [row0,row1,row2,row3,row4,row5,row6,row7,row8,row9];
rows.forEach(function( item, index, array){
  rows[index].forEach(function( item1, index1, array1){
  rows[index][index1].style.backgroundColor = 'purple';
  console.log("nothing")

})})
console.log(rows)
const ScoreDisplay = document.querySelector('#score');
const start = document.querySelector('#start');
const colors = ['red', 'green', 'blue', 'yellow', 'brown']
let randomColor = Math.floor(Math.random() * 4);

const lTetromino =
  [[1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2, width*2+1],
  [width, width*2, width*2+1, width*2+2]]
const zTetromino =
  [[width*2, width+1, width+2, width*2+1],
  [0, width, width + 1, width*2+1],
  [width*2, width + 1, width + 2, width * 2 + 1],
  [0, width, width + 1, width*2+1]]
const sTetromino =
  [[0, 1, width + 1, width + 2],
  [1, width, width + 1, width * 2],
  [0, 1, width + 1, width + 2],
  [1, width, width + 1, width * 2]]
const tTetromino = [
  [1, width, width+1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1]]
const squareTetromino =
  [[0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1]]
const superTetromino =
  [[1, width + 1, width * 2 + 1, width * 3 + 1],
  [width + 1, width +2, width + 3, width + 4],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width + 1, width +2, width + 3, width + 4]]
const theTetrominos = [lTetromino, sTetromino, zTetromino, squareTetromino, superTetromino, tTetromino];

let currentPosition = 4;
let random = Math.floor(Math.random() *theTetrominos.length)
let current = theTetrominos[random][0];
let currentRotation = 0;

function draw() {
  current.forEach(index => {
    squares[currentPosition + index].style.backgroundColor = colors[randomColor];
  })}
function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].style.backgroundColor = 'purple'
  })}

function control(e){
  if(e.keyCode === 37){
  moveLeft();
}
else if(e.keyCode === 39){
    moveRight();
  }
else if(e.keyCode === 40){
  moveDown();
}
else if(e.keyCode === 38){
  rotate();
}
}
document.addEventListener('keydown', control)

/*
function checkRows(){
  for(let i = 0, k = 0; i <=9; i++){
    if (rows[0][i].classList.contains('taken')){
      k++;}
    else if(!row0[i].classList.contains('taken')){
      k = 0;
      break;}
    if(k === 10){
      k = 0;
      undrawRow();}



  }
}

function undrawRow(){
  for (i = 0; i <=9; i++){
    row0[i].style.backgroundColor = 'purple';
    row0[i].classList.remove('taken');

  }
}

*/
function freeze(){
  if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
  current.forEach(index => squares[currentPosition + index].classList.add('taken'))
  random = Math.floor(Math.random() *theTetrominos.length)
  current = theTetrominos[random][currentRotation]
  randomColor = Math.floor(Math.random() * colors.length)
  currentPosition = 4
  draw()}
}

function moveDown(){
  undraw();
  currentPosition += width;
  draw();
  freeze();
  }


function moveLeft(){
  undraw();
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
  if(!isAtLeftEdge){
  currentPosition -= 1;
}
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition +=1;
  }
  draw();
}
function moveRight(){
  undraw();
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
  if (!isAtRightEdge){
    currentPosition += 1;
    if(rows[0][0].backgroundColor != 'purple')
    {console.log(rows[0][0].backgroundColor)}
  }
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition -=1;
  }
  draw();
}

function rotate(){
  undraw();
  currentRotation++;
  if(currentRotation === current.length){
    currentRotation = 0;
  }
  current = theTetrominos[random][currentRotation];
  draw();
}
timerId=setInterval(moveDown, 1000);

  })
