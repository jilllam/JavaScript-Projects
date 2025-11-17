//This variable keeps track of whose turn it is.
let activePlayer = 'X';

//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//Cache body element for disableClick()
const body = document.body;

//This variable keeps track of whether the game has ended.
let gameOver = false;

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {

    //This condition ensures a square has not been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber)) && !gameOver) {

        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);

        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = "url('images/x.png')";
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = "url('images/o.png')";
        }

        //squareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);

        //This calls a function to check for any win conditions and set gameOver if needed.
        if (checkWinConditions()) {
            gameOver = true; 
        }

        //This condition is for changing the active player.
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';

        //This function plays placement sound.
        audio('media/place.mp3');

        //This condition disables clicking temporarily.
        disableClick();

        //Only call computerTurn if the game is not over
        if (!gameOver) {
            setTimeout(function() { computerTurn(); }, 1000);
        }

        //Returning true is needed for our computerTurn() function to work.
        return true;
    }

    //If the square has already been selected or game is over, return false.
    return false;
}

//This function results in a random square being selected by the computer.
function computerTurn() {

    //This boolean is needed for our while loop.
    let success = false;

    //This variable stores a random number 0-8.
    let pickASquare;

    //This loop keeps running until an unused square is found or gameOver.
    while (!success && !gameOver) {

        //A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));

        //This condition calls placeXOrO and returns true if the square has not been selected yet.
        if (placeXOrO(pickASquare)) {

            //This changes our boolean and ends the loop.
            success = true;
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
function checkWinConditions() {
    // X win conditions
    if (arrayIncludes('0X','1X','2X')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); return true; }

    // O win conditions
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); return true; }

    // Tie condition
    else if (selectedSquares.length >= 9) {
        audio('media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
        return true;
    }

    return false;
}

//This function checks if an array includes 3 strings. It is used to check for
//each win condition.
function arrayIncludes(squareA, squareB, squareC){
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    return a && b && c;
}

//This function makes our body element temporarily unclickable.
function disableClick () {
    body.style.pointerEvents = 'none';
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for 
//placement sound('../media/place.mp3')
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2;
    let x = x1, y = y1;
    let animationLoop;

    function animateLineDrawing(){
        animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clearCanvas() {
        cancelAnimationFrame(animationLoop);
        c.clearRect(0, 0, 608, 608);
    }

    // prevent clicks during win animation
    disableClick(); 
    // play win sound
    audio('media/winGame.mp3'); 
    // start animation
    animateLineDrawing(); 
    //reset game and clear canvas
    setTimeout(function() {
        clearCanvas(); 
        resetGame(); 
        // reset gameOver for new game
        gameOver = false; 
    }, 1000);
}

// Reset the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
    activePlayer = 'X';
    gameOver = false;
}
