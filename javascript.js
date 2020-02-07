let board = []


function init(){
    createBoard();
}

function game(){
    
}

function createBoard(){
    for(let i = 0; i < 4; i++){
        board.push(Math.floor(Math.random() * 4 ))
    }
}

init();
console.log(board)
