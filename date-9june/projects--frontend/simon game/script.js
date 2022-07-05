var buttonColours= [ "red","blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern= [];
function playSound(name){
    let audio= new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(()=> {$("#"+currentColour).removeClass("pressed")},80);

}
$(document).on("keydown",function(){
    // var level=0;
    if(level==0){
        nextSequence();
    }

});
$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    animatePress(userChosenColour);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
});
var level=0;
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+ level);
    
    let randomNumber= Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    /* setInterval(() => { 
		$('p').fadeIn(); 
		$('p').fadeOut(); 
	}, 500);   ->CAN DO THIS ALSO */
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

}

function checkAnswer(currentLevel){
    console.log(currentLevel);
    console.log(userClickedPattern[currentLevel]);
    console.log(gamePattern[currentLevel]);
    if(userClickedPattern[currentLevel]=== gamePattern[currentLevel]){
        // console.log("success");
        if(userClickedPattern.length=== gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1500);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{$("body").removeClass("game-over");},100);
        startover();
    }
}
function startover(){
    level=0;
    gamePattern=[];
    $("h1").text("Game Over! Press Any Key to Restart");

}