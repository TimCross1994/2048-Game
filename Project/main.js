let Score = 0;
let Best = 0;
document.getElementById("Score");
document.getElementById("Best");

function init() {
    var moveTile =document.getElementsByClassName("newTile");
    var playNumber =generateNumber();
    var tile = moveTile[playNumber];
    document.getElementById("R0C0").textContent = 2;
    document.getElementById("R0C1").textContent = 2;

    
   
}

function generateNumber() {
   return Math.floor(Math.random()*4);
}
init();

document.onkeydown = function (e) {
    console.log(e.key);
    switch (e.key) {
        case 'ArrowUp':
        
            // up arrow
            console.log("Move Tiles Up")
            break;
        case 'ArrowDown':
            console.log("Move Tiles down")
            // down arrow
            break;
        case 'ArrowLeft':
            console.log("Move tiles left")
            // left arrow
            break;
        case 'ArrowRight':
            console.log("Move tiles right")
            // right arrow
    }
};