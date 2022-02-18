let direction = { x: 0, y: 0 };

const foodSound = new Audio('music/food.mp3');

const gameOverSound = new Audio('music/gameover.mp3');

const moveSound = new Audio('music/move.mp3');

const musicSound = new Audio('music/music.mp3');

let speed = 2;

let lastPaintTime = 0;


//step 1 make a game loop by calling window.requestAnimationFrame(main) repeatedly
//we use this function becuase it gives high fps with good optimization

// Game Functions
function main(ctime) {


    window.requestAnimationFrame(main);
    console.log(ctime);

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
    // Part 1: Updating the snake array.


    // Part 2: Render the snake and food on screen(Display).
    
}










// Main logic starts here 
window.requestAnimationFrame(main);