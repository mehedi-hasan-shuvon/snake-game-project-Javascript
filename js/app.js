let direction = { x: 0, y: 0 };

const foodSound = new Audio('music/food.mp3');

const gameOverSound = new Audio('music/gameover.mp3');

const moveSound = new Audio('music/move.mp3');

const musicSound = new Audio('music/music.mp3');

let speed = 2;

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

function gameEngine() {
    // Part 1: Updating the snake array and food.


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