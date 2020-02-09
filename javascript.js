let board = [];
let playerGuess = [];


function init(){
    createBoard();
    game();
}

function game(){
    for(let i = 0; i < 4; i++){
    playerGuess.push(parseInt(window.prompt("Please enter a number 0-3")));
    }
    compareGuesses();

    console.log(playerGuess)
}

function compareGuesses(){
    let comparisonBoard = [...board];
    let exactMatch = 0;
    let partialMatch = 0;
    let noMatch = 0
    for(let i = 0; i < 4; i++){
        if(board[i] == playerGuess[i]){comparisonBoard.splice(i, 1); exactMatch++}
    }
    for(let i = 0; i < 4; i++){
        if(comparisonBoard.includes(playerGuess[i])){comparisonBoard.splice(comparisonBoard.indexOf(playerGuess[i]),1); partialMatch++}
        else{noMatch++}
    }
    console.log('exact')
    console.log(exactMatch);
    console.log('partial')
    console.log(partialMatch)
    console.log('none')
    console.log(noMatch)
    console.log("comparison board")
    console.log(comparisonBoard);
    //go through board and look for exact matches
    //with remaining numbers look for partial match
}

function createBoard(){
    for(let i = 0; i < 4; i++){
        board.push(Math.floor(Math.random() * 4 ))
    }
}

init();
console.log("Normie board")
console.log(board);
