const gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let turn = 0;
    function writer(e) {
        console.log(e.target.textContent)
        if (turn % 2 == 0 && e.target.textContent == "") {
            console.log(e.target)
            e.target.textContent = "O";
            player1.style.backgroundColor="green";
            player2.style.backgroundColor="white";
            turn++;
        }
        else if (turn % 2 == 1 && e.target.textContent == "") {
            console.log(e)
            e.target.textContent = "X";
            player2.style.backgroundColor="green";
            player1.style.backgroundColor="white";
            turn++;
        }

    }
    function reset(){
        player1.style.backgroundColor="green";
        player2.style.backgroundColor="white";
        turn=0;
        board = ["", "", "", "", "", "", "", "", ""];
        arrayTILES.forEach(button => {
            button.textContent="";
        });
        
    }
    return { board, writer,reset }


})();

let TILES = document.querySelectorAll(".grid-div");
let arrayTILES = Array.from(TILES);
const reset=document.getElementById("reset");
reset.addEventListener("click",gameboard.reset)
const player1=document.getElementById("player-1");
const player2=document.getElementById("player-2");
player1.style.backgroundColor="green";

console.log(arrayTILES);
arrayTILES.forEach(button => {
    button.addEventListener('click', gameboard.writer);
});
