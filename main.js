document.addEventListener('DOMContentLoaded', () => {
const width = 10;
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const ScoreDisplay = document.querySelector('#score');
const start = document.querySelector('#start');
//L
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

let currentPosition = 4;
let random = Math.floor(Math.random() *theTetrominos.length)
let current = theTetrominos[random][0];

function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino')
  })
}

function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino')
  })
}



})
