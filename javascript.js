let board = [];
let playerGuess = [];


function init(){
    computerBoard();
    game();
}


function game(){
    $('#submit').click(function(){
        if($('.player-choice').css('background-color') == 'rgb(255, 255, 255)'){
            alert("You must select 4 colors.")
        } else {
            playerGuess.push(colorToInt($('#playerChoice1')));
            playerGuess.push(colorToInt($('#playerChoice2')));
            playerGuess.push(colorToInt($('#playerChoice3')));
            playerGuess.push(colorToInt($('#playerChoice4')));
            compareGuesses();
        }
    })
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

function computerBoard(){
    for(let i = 0; i < 4; i++){
        board.push(Math.floor(Math.random() * 4 ))
    }
}

function colorToInt(color){
    let bgColor = color.css('background-color')
    if( bgColor == 'rgb(98, 0, 167)'){
        return 0
    } else if(bgColor == 'rgb(0, 69, 167)'){
        return 1
    } else if(bgColor == 'rgb(167, 98, 0)'){
        return 2
    } else {
        return 3
    }
}

$('.color-select').click(function() {
    if($(this).hasClass("player-color-purple")){
        $(this).parentsUntil(".selection-bar").css('background-color', '#6200a7');
    }
    else if($(this).hasClass("player-color-blue")){
        $(this).parentsUntil(".selection-bar").css('background-color', '#0045a7');
    }
    else if($(this).hasClass("player-color-yellow")){
        $(this).parentsUntil(".selection-bar").css('background-color', '#a76200');
    }
    else if($(this).hasClass("player-color-green")){
        $(this).parentsUntil(".selection-bar").css('background-color', '#45a700');
    }
})


init();

