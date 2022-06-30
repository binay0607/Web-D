// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//     alert("i got clicked");
// }
// document.querySelector("button").addEventListener("click",function(){
//     alert("i got clicked");
// });
// var audio= new Audio('sounds/tom-'+'1'+'.mp3') ;


// click 
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          var buttoninnerHTML= this.innerHTML;
       makeSound(buttoninnerHTML);
       buttonAnimation(buttoninnerHTML);
    
    
       //    implemented with keyboard
    
    //    switch (buttoninnerHTML) {
    //        case "w":
    //             var audio= new Audio('sounds/tom-1.mp3') ;
    //             audio.play();
    //            break;
    //        case "a":
    //             var audio= new Audio('sounds/tom-2.mp3') ;
    //             audio.play();
    //            break;
    //        case "s":
    //             var audio= new Audio('sounds/tom-3.mp3') ;
    //             audio.play();
    //            break;
    //        case "d":
    //             var audio= new Audio('sounds/tom-4.mp3') ;
    //             audio.play();
    //            break;
    //        case "j":
    //             var audio= new Audio('sounds/snare.mp3') ;
    //             audio.play();
    //            break;
    //        case "k":
    //             var audio= new Audio('sounds/crash.mp3') ;
    //             audio.play();
    //            break;
       
    //        case "l":
    //             var audio= new Audio('sounds/kick-bass.mp3') ;
    //             audio.play();
    //            break;
       
    //        default:
    //            break;
    //    }
      
    // this.style.color="white";
      
       
    }); 
}
// var audio= new Audio('sounds/crash.mp3') ;
// audio.play();


// keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
             var audio= new Audio('sounds/tom-1.mp3') ;
             audio.play();
            break;
        case "a":
             var audio= new Audio('sounds/tom-2.mp3') ;
             audio.play();
            break;
        case "s":
             var audio= new Audio('sounds/tom-3.mp3') ;
             audio.play();
            break;
        case "d":
             var audio= new Audio('sounds/tom-4.mp3') ;
             audio.play();
            break;
        case "j":
             var audio= new Audio('sounds/snare.mp3') ;
             audio.play();
            break;
        case "k":
             var audio= new Audio('sounds/crash.mp3') ;
             audio.play();
            break;
    
        case "l":
             var audio= new Audio('sounds/kick-bass.mp3') ;
             audio.play();
            break;
    
        default:
            break;
    }

}
function buttonAnimation(currkey){
    var activebutt=document.querySelector("."+currkey);
    activebutt.classList.add("pressed");
        
    setTimeout(function(){
        activebutt.classList.remove("pressed");
    },100);
}