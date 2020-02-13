// let board = [];
// let playerGuess = [];


// function init(){
//     computerBoard();
//     game();
// }


// function game(){
//     $('#submit').click(function(){
//         if($('.player-choice').css('background-color') == 'rgb(255, 255, 255)'){
//             alert("You must select 4 colors.")
//         } else {
//             playerGuess.push(colorToInt($('#playerChoice1')));
//             playerGuess.push(colorToInt($('#playerChoice2')));
//             playerGuess.push(colorToInt($('#playerChoice3')));
//             playerGuess.push(colorToInt($('#playerChoice4')));
//             compareGuesses();
//         }
//     })
// }

// function compareGuesses(){
//     let comparisonBoardComp = [...board];
//     let comparisonBoardPlayer = [...playerGuess]
//     let guessOrder = [0, 0, 0, 0]
//     let exactMatch = 0;
//     let noMatch = 0;
//     let partialMatch = 0;
//     for(let i = 0; i < 4; i++){
//         if(board[i] == playerGuess[i]){
//             comparisonBoardComp.splice(i, 1);
//             comparisonBoardPlayer.splice(i, 1);
//             guessOrder.splice(i, 1, 2);
//             exactMatch++
//         }
//     }
//     let boardLength = comparisonBoardComp.length
//     for(let i = 0; i < boardLength ; i++){
//         console.log(boardLength)
//         if(comparisonBoardComp.includes(comparisonBoardPlayer[i])){
//             comparisonBoardComp.splice(comparisonBoardComp.indexOf(comparisonBoardPlayer[i]),1);
//             partialMatch++
//         }
//         else{noMatch++}
//     }
//     console.log('exact')
//     console.log(exactMatch);
//     console.log('partial')
//     console.log(partialMatch)
//     console.log('none')
//     console.log(noMatch)
//     console.log("Player board:" + playerGuess)
// console.log("Computer board:" + board)
// console.log("Computer comparision:" + comparisonBoardComp)
// console.log("Player comparision:" + comparisonBoardPlayer)
// console.log(guessOrder)
// }



// function computerBoard(){
//     for(let i = 0; i < 4; i++){
//         board.push(Math.floor(Math.random() * 4 ))
//     }
// }

// function colorToInt(color){
//     let bgColor = color.css('background-color')
//     if( bgColor == 'rgb(98, 0, 167)'){
//         return 0
//     } else if(bgColor == 'rgb(0, 69, 167)'){
//         return 1
//     } else if(bgColor == 'rgb(167, 98, 0)'){
//         return 2
//     } else {
//         return 3
//     }
// }

// $('.color-select').click(function() {
//     if($(this).hasClass("player-color-purple")){
//         $(this).parentsUntil(".selection-bar").css('background-color', '#6200a7');
//     }
//     else if($(this).hasClass("player-color-blue")){
//         $(this).parentsUntil(".selection-bar").css('background-color', '#0045a7');
//     }
//     else if($(this).hasClass("player-color-yellow")){
//         $(this).parentsUntil(".selection-bar").css('background-color', '#a76200');
//     }
//     else if($(this).hasClass("player-color-green")){
//         $(this).parentsUntil(".selection-bar").css('background-color', '#45a700');
//     }
// })


// init();
function testlogic(){
    let board = [3, 2, 1, 2]
    let comparisonBoardComp = [3, 2, 1, 2];
    let comparisonBoardPlayer = [1, 2, 2, 3];
    let guessOrder = [0, 0, 0, 0]
    let exactMatch = 0;
    let noMatch = 0;
    let partialMatch = 0;
    for(let i = 0; i < 4; i++){
        if(comparisonBoardComp[i] == comparisonBoardPlayer[i]){
            comparisonBoardComp.splice(i, 1, 4);
            comparisonBoardPlayer.splice(i, 1, 4);
            guessOrder.splice(i, 1, 2);
            exactMatch++
        }
    }
    comparisonBoardComp = comparisonBoardComp.filter(x => x < 4)
    comparisonBoardPlayer = comparisonBoardPlayer.filter(x => x < 4)
    let boardLength = comparisonBoardComp.length
    for(let i = 0; i < boardLength; i++){
        console.log("looper")
        if(comparisonBoardComp.includes(comparisonBoardPlayer[i])){
            comparisonBoardComp.splice(comparisonBoardComp.indexOf(comparisonBoardPlayer[i]), 1);
            if(guessOrder[i] !== 2){
                console.log("kkr")
                guessOrder.splice(board.indexOf(comparisonBoardPlayer[i]), 1, 1);
            }
            partialMatch++;
        } else{noMatch++;}
    }
    console.log('exact')
    console.log(exactMatch);
    console.log('partial')
    console.log(partialMatch)
    console.log('none')
    console.log(noMatch)
    console.log("Computer comparision:" + comparisonBoardComp)
    console.log("Player comparision:" + comparisonBoardPlayer)
    console.log(guessOrder)
}
testlogic();