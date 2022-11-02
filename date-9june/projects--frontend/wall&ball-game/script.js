let inputDir = {x: 0, y:0}; 
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');


let score=0;
let a=[18,19,20,21,22];

let snakeArray=[{x:11, y:12}];
// let food = {x: 6, y: 7};

let lastPainttime=0;
let speed=10;
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPainttime)/1000<1/speed){
        return;
    }
    lastPainttime=ctime;
    gameEngine();

}



var obstacles=[];
// var av=2,bv=20;
// for(var i=0;i<10;i++){
//     obstacles.push({x:Math.round(av+(bv-av)*Math.random()),y:Math.round(av+(bv-av)*Math.random())});
// }
function gameEngine(){
   
    if(snakeArray[0].x>=21){
        // moveSound.play();
        var check=true;
        a.forEach(el => {
            if(el===snakeArray[0].y){
                inputDir.x=-1;
                check=false;
                
            }
        });
        if(check){
            gameOverSound.play();
            // musicSound.pause();
            inputDir={x:0,y:0 };
            alert("Game Over. Press any key to play again!");
            //     musicSound.play();
            snakeArray=[{x:11, y:12}];
            score=0; 
        }
        
    }else if( snakeArray[0].x<=0){
        moveSound.play();

        inputDir.x=1;
    }else if(snakeArray[0].y>=22){
        moveSound.play();

        inputDir.y=-1;
    }else if(snakeArray[0].y<=0){
        moveSound.play();

        inputDir.y=1;
    }

  

    

    snakeArray[0].x += inputDir.x;
    snakeArray[0].y += inputDir.y;




    //Display snake
    container.innerHTML="";
    obstacles.forEach((el, index)=>{
        // console.log(el.x+" "+el.y);
        obsElement= document.createElement('div');
        obsElement.style.gridRowStart= el.x;
        obsElement.style.gridColumnStart= el.y;

        
        obsElement.classList.add('head');
        
        container.appendChild(obsElement);

    });
    snakeArray.forEach((el, index)=>{
        // console.log(el.x+" "+el.y);
        snakeElement= document.createElement('div');
        snakeElement.style.gridRowStart= el.x;
        snakeElement.style.gridColumnStart= el.y;

        if(index===0){
            snakeElement.classList.add('food');
        }else{
            snakeElement.classList.add('body');
        }
        container.appendChild(snakeElement);

    });
    //Display grid
    a.forEach((el)=>{
        gridElement= document.createElement('div');
        gridElement.style.gridRowStart= 22;
        gridElement.style.gridColumnStart= el;
        gridElement.classList.add('body');
        container.appendChild(gridElement);
    })
   
   
}


// test




//--------------------------------------------------------------
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High-Score: " + hiscore;
}


// musicSound.play();
window.requestAnimationFrame(main);

window.addEventListener('keydown', e =>{
    console.log(a);
    inputDir = {x: 1, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
       
        case "ArrowLeft":
            if(a[0]>1){
                a.pop();
                a.unshift(a[0]-1);
            }
            
            break;

        case "ArrowRight":
            // console.log("ArrowRight");
            if(a[3]<21){
                a.shift();
                a.push(a[3]+1);
            }
           
            
            break;
        default:
            break;
    }

}); 