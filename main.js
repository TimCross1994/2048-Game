let score = 0;
let best = 0;
let count = 0;
let board = [0, 0, 0, 0];

var populateBoard = [
    [0, 0, 2, 2], //0
    [0, 2, 2, 0], //1
    [2, 2, 0, 0], //2
    [2, 0, 0, 2], //3
    [0, 2, 0, 2], //4
    [2, 0, 2, 0] ///5
]

function generateNumber() {
    return populateBoard[Math.floor(Math.random() * 5)];
}

var newTile00 = document.getElementById("R0C0");
var newTile01 = document.getElementById("R0C1");
var newTile10 = document.getElementById("R1C0");
var newTile11 = document.getElementById("R1C1");

init();

function init() {
    var moveTile = document.getElementsByClassName("newTile");
    // var playNumber =generateNumber();
    // var tile = moveTile[playNumber];

    board = Array.from(generateNumber());
    render()

}

function initialPopulate(boardArray) {
    for (i = 0; i < 2;) {
        var checkElem = null;
        var assign = boardArray[generateNumber()]
        if (checkElem !== assign)
            var assign = boardArray(generateNumer())
        return boardArray[generateNumber()]
    }

};

function render() {
    newTile00.textContent = board[0];
    newTile01.textContent = board[1];
    newTile10.textContent = board[2];
    newTile11.textContent = board[3];

}
function randomNum() {
    return Math.floor(Math.random()* board.length)
}
function addNumTwo() {
    if (count === 3 || count > 3) {
        for(i = 0; i< board.length; i++){
            if (board[i] === 0) {
                board[i] = 2
                console.log(count, "countttttt")
                break
            } 
        }
        console.log(count, "countttttt")
        count = 0
    }
}
// function winLose() {
//     for(i=0; i< board.length; i++) {
//         if(board.Array === 16) {
//             alert("You win");
//             console.log("Eureka")
//         } 
//     }
// };
// let board = [2,2,2,2]
// const check = () => {
//     let newNum= 0;
//     for (let i= 0; i < board.length; i++) {
//         if (board[i]!== 0) {
//             console.log("hit")
//             checkNum += 1;
//         }
//     }
//     if (checkNum === board.length) {
//         alert("you lose")
//     } else {
//         newNum = 0
//     }
// }
//     for (let i = 0; i < 4; i++) {
//         for(let j = 0; j < 4; j++) {
//             if(board[i][j] == 0) {
//                 return false;
//             }
//         if(i !== 3 && board[i][j] === board[i][j+1]) {
//             return false;
//         }
//         if (j !== 3 && board[i][j] === board[i + 1][j]) {
//             return false;
//         }  
//         }
    
//         return true; 
//     }
// };      
    


document.onkeydown = function (e) {
    console.log(board)
    switch (e.key) {
        case 'ArrowUp':
            addNumTwo();
            count += 1
            if (board[0] == board[2] || board[1] == board[3]) {
                console.log("0 == 2")
                if (board[0] == board[2]) {
                    board[0] = board[0] + board[2]
                    board[2] = 0
                    // render()
                }
                if (board[1] == board[3]) {
                    console.log("1 == 3")
                    board[1] = board[1] + board[3]
                    board[3] = 0
                    // render()
                    // break
                }
                render()
            } else if (board[0] == 0) {
                console.log("0 == 0")
                board[0] = board[2]
                board[2] = 0
                render()
                break
            } else if (board[1] == 0) {
                console.log("1 == 0", "hit4")
                board[1] = board[3]
                board[3] = 0
                render()
                break
            }
            // up arrow
            console.log(e.key)
            break;
        case 'ArrowDown':
            count += 1
            addNumTwo();
            if (board[2] == board[0] || board[3] == board[1]) {
                console.log("2 == 0")
                if (board[2] == board[0]) {
                    board[2] = board[2] + board[0]
                    board[0] = 0
                    // render()
                }
                if (board[3] == board[1]) {
                    console.log("3 == 1")
                    board[3] = board[3] + board[1]
                    board[1] = 0
                    // render()
                    // break
                }
                render()
            } else if (board[2] == 0) {
                console.log("00 == 00")
                board[2] = board[0]
                board[0] = 0
                render()
                break
            } else if (board[3] == 0) {
                console.log("1 == 0")
                board[3] = board[1]
                board[1] = 0
                render()
                break
            }
            // up arrow
            console.log(e.key)
            break;

        case 'ArrowLeft':
            count += 1
            addNumTwo();
            if (board[0] == board[1] || board[2] == board[3]) {
                console.log("1 == 3")
                if (board[0] == board[1]) {
                    board[0] = board[0] + board[1]
                    board[1] = 0
                    // render()
                }
                if (board[2] == board[3]) {
                    console.log("2 == 3")
                    board[2] = board[2] + board[3]
                    board[3] = 0

                }
                render()
            } else if (board[0] == 0) {
                console.log("0 == 0")
                board[0] = board[1]
                board[1] = 0
                render()
                break
            } else if (board[2] == 0) {
                console.log("1 == 0")
                board[2] = board[3]
                board[3] = 0
                render()
                break
            }
            // up arrow
            console.log(e.key)
            break;

        case 'ArrowRight':
            count += 1
            addNumTwo();
            if (board[1] == board[0]) {
                board[1] = board[1] + board[0]
                board[0] = 0
                // render()
            }
            if (board[3] == board[2]) {
                console.log("2 == 3")
                board[3] = board[3] + board[2]
                board[2] = 0

                // render()
            } else if (board[1] == 0) {
                console.log("0 == 0", "hit2")
                board[1] = board[0]
                board[0] = 0
                render()
                break
            } else if (board[3] == 0) {
                console.log("1 == 0", "hit3")
                board[3] = board[2]
                board[2] = 0
                // render()
            }
            render()
    }
    // up arrow
    console.log(e.key)
    render()
};