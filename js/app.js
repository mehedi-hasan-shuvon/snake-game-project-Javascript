let inputDir = { x: 0, y: 0 };

const foodSound = new Audio('music/food.mp3');

const gameOverSound = new Audio('music/gameover.mp3');

const moveSound = new Audio('music/move.mp3');

const musicSound = new Audio('music/music.mp3');

let score = 0;

let speed = 5;

let lastPaintTime = 0;

let snakeArr = [
    //point to be noted that in javascript (x,y)=(0,0) is in the left top position
    { x: 13, y: 15 }
]

let food = { x: 6, y: 7 };

//step 1 make a game loop by calling window.requestAnimationFrame(main) repeatedly
//we use this function becuase it gives high fps with good optimization

// Game Functions
function main(ctime) {


    window.requestAnimationFrame(main);
    // console.log(ctime);

    /*checking if paint time is less then a certain speed
    so that we can main fps and also if its false we update our last paint time in the else.
    */
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    } else {

        lastPaintTime = ctime;

        gameEngine();
    }
}

function isCollide(snake) {

    //if snake hits its own body
    for (let i = 1; i < snakeArr.length; i++) {
        // const element = array[i];
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }


    }
    //if snake hits the border
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }



    return false;
}

function gameEngine() {
    // Part 1: Updating the snake array and food.

    //if colide happens reset the game
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!");
        snakeArr = [
            { x: 13, y: 15 }
        ]
        musicSound.play();
        score = 0;

    }

    //if snake has eaten the food, increment the score and regenerate the food.
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

        let a = 2;
        let b = 16;
        // to generate a random number between a range the equation is  Math.round(a + (b - a) * Math.random())
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }


    //moving the snake
    // we have to right shift the snake body
    for (let i = snakeArr.length - 2; i >= 0; i--) {

        //destucturing problem
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;





    // Part 2: Render the snake and food on screen(Display).

    //Display the snake
    const board = document.getElementById('board');
    board.innerHTML = "";

    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        //if it is the head of the snake then red
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            // the body of the snake purple
            snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);
    });

    //Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}







// Main logic starts here 
window.requestAnimationFrame(main);

window.addEventListener('keydown', function (e) {
    inputDir = { x: 0, y: 1 } //Start the game
    moveSound.play();
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUP pressed");
            inputDir.x = 0;
            inputDir.y = -1;

            break;
        case "ArrowDown":
            console.log("ArrowDown pressed");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft pressed");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight pressed");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});