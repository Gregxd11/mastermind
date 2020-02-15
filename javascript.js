let board = [];
let playerGuess = [];
let guessOrder = [0, 0, 0, 0]
let guesses = 1 


function game(){
    computerBoard();
    $('#submit').click(playRound)
}

$('#reset').click(reset);

function playRound(){
    let checkIfEmpty = 0
    $('.player-choice').each(function(){
        if($(this).css('background-color') == 'rgb(255, 255, 255)'){
            checkIfEmpty += 1
        }
    })
    if(checkIfEmpty > 0 ){
        alert("You must select 4 colors.")
    } else {
        playerGuess.push(colorToInt($('#playerChoice1')));
        playerGuess.push(colorToInt($('#playerChoice2')));
        playerGuess.push(colorToInt($('#playerChoice3')));
        playerGuess.push(colorToInt($('#playerChoice4')));
        compareGuesses();
        guessResults(guesses);
        checkWinner();
        $('.player-choice').css('background-color', 'rgb(255, 255, 255')
        playerGuess = []
        guesses++
    }
}

function reset(){
    board = []
    playerGuess = []
    guesses = 1
    guessOrder = [0, 0, 0, 0]
    $('.empty-row').css({
        'background-color' : 'rgb(255, 255, 255)',
        'border' : 'solid black 2px'
    })
    $('.player-choice').css('background-color', 'rgb(255, 255, 255')
    game();
}

function checkWinner(){
    if(guessOrder[0] + guessOrder[1] + guessOrder[2] + guessOrder[3] == 8){
        alert('You win! It only took you ' + guesses + ' guesses!')
        $('#submit').unbind();
       showSolution();
    } else if(guesses >= 10){
        alert('You lose. Better luck next time!')
        showSolution();
        $('#submit').unbind();
    } else {
        guessOrder = [0, 0, 0, 0]
    }
}

function compareGuesses(){
    let comparisonBoardComp = [...board];
    let comparisonBoardPlayer = [...playerGuess];

    //First pass through array checking for exact matches
    for(let i = 0; i < 4; i++){
        if(comparisonBoardComp[i] == comparisonBoardPlayer[i]){
            comparisonBoardComp.splice(i, 1, 4); //Replaces original choice with 4 to mark exact match
            comparisonBoardPlayer.splice(i, 1, 4);
            guessOrder.splice(i, 1, 2);
        }
    }

    //Second pass through array checking for partial matches
    for(let i = 0; i < 4; i++){
        if(comparisonBoardPlayer[i] == 4){continue;}
        else if(comparisonBoardComp.includes(comparisonBoardPlayer[i])){
            guessOrder.splice(i, 1, 1);
            comparisonBoardComp.splice(comparisonBoardComp.indexOf(comparisonBoardPlayer[i]), 1); 
        }
    }
}

//Puts previous player guess into next row on gameboard
function guessResults(n){
    let row = "#row" + n
    $(row).children().each(function(index, element){
        if(playerGuess[index] == 0){
            $(this).css('background-color', 'rgb(98, 0, 167)')
            if(guessOrder[index] == 2){
                $(this).css('border', 'solid green 4px')
            } else if (guessOrder[index] == 1){
                $(this).css('border', 'solid #f48f00 4px')
            } else {
                $(this).css('border', 'solid red 4px')
            }
        } else if (playerGuess[index] == 1){
            $(this).css('background-color', 'rgb(0, 69, 167)')
            if(guessOrder[index] == 2){
                $(this).css('border', 'solid green 4px')
            } else if (guessOrder[index] == 1){
                $(this).css('border', 'solid #f48f00 4px')
            } else {
                $(this).css('border', 'solid red 4px')
            }
        } else if (playerGuess[index] == 2){
            $(this).css('background-color', 'rgb(167, 98, 0)')
            if(guessOrder[index] == 2){
                $(this).css('border', 'solid green 4px')
            } else if (guessOrder[index] == 1){
                $(this).css('border', 'solid #f48f00 4px')
            } else {
                $(this).css('border', 'solid red 4px')
            }
        } else {
            $(this).css('background-color', 'rgb(69, 167, 0)')
            if(guessOrder[index] == 2){
                $(this).css('border', 'solid green 4px')
            } else if (guessOrder[index] == 1){
                $(this).css('border', 'solid #f48f00 4px')
            } else {
                $(this).css('border', 'solid red 4px')
            }
        }
    })
}

function showSolution(){
    $('#computerCombination').children().each(function(index, element){
        if(board[index] == 0){
            $(this).css('background-color', 'rgb(98, 0, 167)')
        } else if (board[index] == 1){
            $(this).css('background-color', 'rgb(0, 69, 167)')
        } else if (board[index] == 2){
            $(this).css('background-color', 'rgb(167, 98, 0)')
        } else {
            $(this).css('background-color', 'rgb(69, 167, 0)')
        }
    })
}

function borderColor(){
    if(guessOrder[index] == 2){
        $(this).css('border', 'solid green 4px')
    } else if (guessOrder[index] == 1){
        $(this).css('border', 'solid orange 4px')
    } else {
        $(this).css('border', 'solid red 4px')
    }
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

//Changes background color of square selected by player dropdown
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


game();