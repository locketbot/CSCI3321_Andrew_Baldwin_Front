var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';
var b1, b1, b3, b4, b5, b6, b7, b8, b9;

function placeMarker(){
    if(!gameOver){
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        b4 = document.getElementById("b4").value;
        b5 = document.getElementById("b5").value;
        b6 = document.getElementById("b6").value;
        b7 = document.getElementById("b7").value;
        b8 = document.getElementById("b8").value;
        b9 = document.getElementById("b9").value;
        currentPlayerWon();
        if(b1 == ''){
            if(currentPlayer == 'X'){
                document.getElementById('b1').innerHTML = `X`;
                currentPlayer = 'O';
            } else { 
                document.getElementById('b1').innerHTML = `O`;
                currentPlayer = 'X';
            }
        }
        if(b2 == ''){
            if(currentPlayer == 'X'){
                document.getElementById('b2').innerHTML = `X`;
                currentPlayer = 'O';
            } else { 
                document.getElementById('b2').innerHTML = `O`;
                currentPlayer = 'X';
            }
        }
        if(b3 == ''){
            if(currentPlayer == 'X'){
                document.getElementById('b3').innerHTML = `X`;
                currentPlayer = 'O';
            } else { 
                document.getElementById('b3').innerHTML = `O`;
                currentPlayer = 'X';
            }
        }
        if(b4 == ''){
            if(currentPlayer == 'X'){
                b4 = "X";
                currentPlayer = 'O';
            } else { 
                b4 = "O";
                currentPlayer = 'X';
            }
        }
        if(b5 == ''){
            if(currentPlayer == 'X'){
                b5 = "X";
                currentPlayer = 'O';
            } else { 
                b5 = "O";
                currentPlayer = 'X';
            }
        }
        if(b6 == ''){
            if(currentPlayer == 'X'){
                b6 = "X";
                currentPlayer = 'O';
            } else { 
                b6 = "O";
                currentPlayer = 'X';
            }
        }
        if(b7 == ''){
            if(currentPlayer == 'X'){
                b7 = "X";
                currentPlayer = 'O';
            } else { 
                b7 = "O";
                currentPlayer = 'X';
            }
        }
        if(b8 == ''){
            if(currentPlayer == 'X'){
                b8 = "X";
                currentPlayer = 'O';
            } else { 
                b8 = "O";
                currentPlayer = 'X';
            }
        }
        if(b9 == ''){
            if(currentPlayer == 'X'){
                b9 = "X";
                currentPlayer = 'O';
            } else { 
                b9 = "O";
                currentPlayer = 'X';
            }
        }

    }
}

function currentPlayerWon(){
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('turn-text').innerHTML = `Player X won`;
            gameOver = true;
    }
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        document.getElementById('turn-text').innerHTML = `Player O won`;
            gameOver = true;
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
        b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('turn-text').innerHTML = "It's a Tie!";
        gameOver = true;
    }
    else {
        if (currentPlayer == 'X') {
            document.getElementById('turn-text').innerHTML = "Player X's Turn";
        }
        else {
            document.getElementById('turn-text').innerHTML = "Player O's Turn";
        }
    }
}