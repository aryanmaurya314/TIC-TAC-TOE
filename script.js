console.log("Wecome to Tic Tac Toe");
let music = new Audio('music/music.mp3');
let turnSound = new Audio('music/ting.mp3');
let gameOverSound = new Audio('music/gameover.mp3');
let turn = "X";
let gameOver = false;

// function to change turn 
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "180px";
            gameOverSound.play();
        }
    })
}

// game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', (e) => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.box-text');
    Array.from(boxTexts).forEach(e => {
        e.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})
