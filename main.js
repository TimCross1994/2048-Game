let Score = 0;
let Best = 0;
let board = [0, 0, 0 ,0];

var populateBoard = 
[
[0,0,2,2],//0
[0,2,2,0],//1
[2,2,0,0],//2
[2,0,0,2],//3
[0,2,0,2],//4
[2,0,2,0]///5
]
function generateNumber() {
    return populateBoard[Math.floor(Math.random()*5)]; 
}


document.getElementById("Score");
document.getElementById("Best");

function init() {
    var moveTile =document.getElementsByClassName("newTile");
    // var playNumber =generateNumber();
    // var tile = moveTile[playNumber];
    
    var newTile00 = document.getElementById("R0C0");
    var newTile01 = document.getElementById("R0C1");
    var newTile10 = document.getElementById("R1C0");
    var newTile11 = document.getElementById("R1C1");
    board = Array.from(generateNumber());

    newTile00.textContent = board[0];
    newTile01.textContent = board[1];
    newTile10.textContent = board[2];
    newTile11.textContent = board[3];

}
function initialPopulate(boardArray) {
    for(i= 0; i<2;) {
        var checkElem = null;
    var assign = boardArray[generateNumber()]
    if(checkElem !== assign)
    var assign = boardArray(generateNumer())
    return boardArray[generateNumber()]
    }
    
};
init();

document.onkeydown = function (e) {
    console.log(e.key);
    switch (e.key) {
        case 'ArrowUp':
        function moveTile() {
        if(board[0] === board[2]) {
            board[0] === board[0] + board[2];
            return board[0]
        }
        if(board[1] === board[3]) {
            board[1] === board[1] + board[3]
            return board[1];
        }
        for(i = 0; i <=0; i++)
            // up arrow
            console.log("Move Tiles Up")
            break;
        case 'ArrowDown':
            function mvoeTile() {
                if(board[2] === board[0])
                board[2] === board[2] + board[0]
                return board[2];
            }
            if(board[3] === board[2])
            board[3] === board[3] + board[2]
            return board[3];
            console.log("Move Tiles down")
            // down arrow
            break;
        case 'ArrowLeft':
        function moveTile() {
            if(board[0] === board[1])
            board[0] === board[0] + board[1]
            return board[0]
        }
         } else {
             if(board[0] | )

            }
            if(board[2] === board[3])
            board[2] === board[2] + board[3]
            return board[2];
            console.log("Move tiles left")
            // left arrow
            break;
        case 'ArrowRight':
            if(board[1] === board[0])
            board[1] === board[1] +
            console.log("Move tiles right")
            // right arrow
    }
};