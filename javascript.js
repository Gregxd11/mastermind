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
}

function compareGuesses(){
    let comparisonBoardComp = [...board];
    let comparisonBoardPlayer = [...playerGuess]
    let exactMatch = 0;
    let noMatch = 0;
    let partialMatch = 0;
    for(let i = 0; i < 4; i++){
        if(board[i] == playerGuess[i]){
            comparisonBoardComp.splice(i,1);
            comparisonBoardPlayer.splice(i, 1);
            exactMatch++
        }
    }
    let boardLength = comparisonBoardComp.length
    for(let i = 0; i < boardLength ; i++){
        console.log(boardLength)
        if(comparisonBoardComp.includes(comparisonBoardPlayer[i])){
            comparisonBoardComp.splice(comparisonBoardComp.indexOf(comparisonBoardPlayer[i]),1);
            partialMatch++
        }
        else{noMatch++}
    }
    console.log('exact')
    console.log(exactMatch);
    console.log('partial')
    console.log(partialMatch)
    console.log('none')
    console.log(noMatch)
    console.log("Player board:" + playerGuess)
console.log("Computer board:" + board)
console.log("Computer comparision:" + comparisonBoardComp)
console.log("Player comparision:" + comparisonBoardPlayer)
}

function createBoard(){
    for(let i = 0; i < 4; i++){
        board.push(Math.floor(Math.random() * 4 ))
    }
}

init();

