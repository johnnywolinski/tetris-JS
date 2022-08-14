document.addEventListener('DOMContentLoaded', () => {
const width = 10;
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const ScoreDisplay = document.querySelector('#score');
const start = document.querySelector('#start');
const colors = ['red', 'green', 'blue', 'yellow', 'brown']
let randomColor = Math.floor(Math.random() * 4);
const lTetromino = [
[1, width+1, width*2+1, 2],
[width, width+1, width+2, width*2+2],
[1, width+1, width*2, width*2+1],
[width, width*2, width*2+1, width*2+2]
]
const notZTetromino = [
  //codeherelater
]
const zTetromino = [
  [width*2, width+1, width+2, width*2+1],
  [0, width, width + 1, width*2+1],
  [width*2, width + 1, width + 2, width * 2 + 1],
  [0, width, width + 1, width*2+1]
]
const tTetromino = [
  [1, width, width+1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 2, width * 2 + 1]
]
const squareTetromino = [
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1]
]
const superTetromino = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width + 1, width +2, width + 3, width + 4],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width + 1, width +2, width + 3, width + 4]
]
const theTetrominos = [lTetromino, zTetromino, squareTetromino, superTetromino, tTetromino];
//let variables
let currentPosition = 4;
let random = Math.floor(Math.random() *theTetrominos.length)
let current = theTetrominos[random][0];
let currentRotation = 0;

function draw() {
  current.forEach(index => {
    squares[currentPosition + index].style.backgroundColor = colors[randomColor];
  })
}
function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].style.backgroundColor = 'purple'
  })
}
  function moveDown(){
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }
  function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    let random = Math.floor(Math.random() *theTetrominos.length)
    current = theTetrominos[random][currentRotation]
    randomColor = Math.floor(Math.random() * 4)
    currentPosition = 4
    draw()
  }
}
function moveLeft(){
  undraw();
  currentPosition -= 1;
  draw();
  freeze();
}
function moveRight(){
  undraw();
  currentPosition += 1;
  draw();
  freeze();
}
function changeRotation(){
  undraw();
  currentRotation++;
  if(currentRotation >=4){
    currentRotation = 0;
  }
 current[currentRotation] += 1;
  draw();
  freeze();
  console.log(currentRotation);
}

      timerId=setInterval(moveDown, 1000);
      timerId2=setInterval(changeRotation, 4000);

  })
