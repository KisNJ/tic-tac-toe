const gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let turn = 0;
    let winner=false;
    function writer(e) {

        if(winner==false){
            if (turn % 2 == 0 && e.target.textContent == "") {

                e.target.textContent = "O";
                board[(e.target.dataset.value) - 1] = "O";
                player1.style.backgroundColor = "white";
                player2.style.backgroundColor = "green";
                turn++;
            }
            else if (turn % 2 == 1 && e.target.textContent == "") {
    
                e.target.textContent = "X";
                board[(e.target.dataset.value) - 1] = "X";
                player2.style.backgroundColor = "white";
                player1.style.backgroundColor = "green";
                turn++;
            }
            checkwinner();
            
            
        }

    }
    let winningCondtions = {
        1: [0, 1, 2],
        2: [3, 4, 5],
        3: [6, 7, 8],
        4: [0, 3, 6],
        5: [1, 4, 7],
        6: [2, 5, 8],
        7: [0, 4, 8],
        8: [2, 4, 6]
    }
    function checkwinner() {
        if (turn >= 5) {
            let numInput = 0;
            for (let condition in winningCondtions) {

                if (board[winningCondtions[condition][0]] == board[winningCondtions[condition][1]] && board[winningCondtions[condition][1]] == board[winningCondtions[condition][2]] && board[winningCondtions[condition][0]] != "" && board[winningCondtions[condition][1]] != "" && board[winningCondtions[condition][2]] != "") {
                    
                    if (turn % 2 == 0) {
                       
                        header.textContent="Player 2 wins";
                        winner=true;
                    } else {
                        
                        header.textContent="Player 1 wins";
                        winner=true;
                    }
                    
                    for (let i = 0; i < 3; i++) {
                        
                        arrayTILES[winningCondtions[condition][i]].style.backgroundColor="green";
                    }
                    player2.style.backgroundColor = "white";
                    player1.style.backgroundColor = "white";
                }
            }


        }
        if(turn==9){
            header.textContent="Tie";
        }
    }

    function reset() {
        player1.style.backgroundColor = "green";
        player2.style.backgroundColor = "white";
        header.textContent="Tic Tac Toe";
        turn = 0;
        winner=false;
        board = ["", "", "", "", "", "", "", "", ""];
        arrayTILES.forEach(button => {
            button.textContent = "";
            button.style.backgroundColor="white";
        });

    }
    return { board, writer, reset }


})();


    let TILES = document.querySelectorAll(".grid-div");
    let arrayTILES = Array.from(TILES);
    const reset = document.getElementById("reset");
    reset.addEventListener("click", gameboard.reset)
    const player1 = document.getElementById("player-1");
    const player2 = document.getElementById("player-2");
    player1.style.backgroundColor = "green";
    const header=document.getElementById("header");
    
    
    
    
    arrayTILES.forEach(button => {
        button.addEventListener('click', gameboard.writer);
    });
 
