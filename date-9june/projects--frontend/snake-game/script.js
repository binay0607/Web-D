let inputDir = {x: 0, y: 0}; 
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');


let score=0;

let snakeArray=[{x:11, y:12}];
let food = {x: 6, y: 7};

let lastPainttime=0;
let speed=8;
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPainttime)/1000<1/speed){
        return;
    }
    lastPainttime=ctime;
    gameEngine();

}


function isCollided(snake){
    for(let i=1;i<snake.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            
            return true;
        }
    }

    if(snake[0].x>=22 || snake[0].x<=0 ||snake[0].y>=22 ||snake[0].y<=0){
        
        return true;
    }
    return false;
}

function gameEngine(){

    //logics
    if(isCollided(snakeArray)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0 };
        alert("Game Over. Press any key to play again!");
        snakeArray=[{x:11, y:12}];
        score=0;
        speed=8;
        scoreBox.innerHTML = "Score: " + score;
        musicSound.play();
    }

    //if snake eats the fruit
    if(snakeArray[0].x=== food.x && snakeArray[0].y===food.y){
        // speed+=1;
        snakeArray.unshift({x: snakeArray[0].x + inputDir.x, y: snakeArray[0].y + inputDir.y});
        //adds a new element in the front
        foodSound.play();
        score+=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
                hiscoreBox.innerHTML = "High-Score: " + hiscoreval;
            }
        scoreBox.innerHTML = "Score: " + score;
        
        let a=1,b=21;
        food={x:Math.round(a+(b-a)* Math.random()) , y: Math.round(a+(b-a)* Math.random())};
    }

    //moving snake
    // snakeArray.unshift({x: snakeArray[0].x + inputDir.x, y: snakeArray[0].y + inputDir.y});
    for(let i=snakeArray.length-2; i>=0;i--){
        snakeArray[i+1]= {...snakeArray[i]};
    }

    snakeArray[0].x += inputDir.x;
    snakeArray[0].y += inputDir.y;




    //Display snake
    container.innerHTML="";
    snakeArray.forEach((el, index)=>{
        console.log(el.x+" "+el.y);
        snakeElement= document.createElement('div');
        snakeElement.style.gridRowStart= el.x;
        snakeElement.style.gridColumnStart= el.y;

        if(index===0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('body');
        }
        container.appendChild(snakeElement);

    });

    //Display Food
    foodElement= document.createElement('div');
    foodElement.style.gridRowStart= food.x;
    foodElement.style.gridColumnStart= food.y;
    foodElement.classList.add('food');
    container.appendChild(foodElement);
}






let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High-Score: " + hiscore;
}


musicSound.play();
window.requestAnimationFrame(main);

window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "ArrowLeft":
            inputDir.x = 0;
            inputDir.y = -1;
            console.log("ArrowLeft");
            
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 0;
            inputDir.y = 1;
            
            break;
        default:
            break;
    }

}); 