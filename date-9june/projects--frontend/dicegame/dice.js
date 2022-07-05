var randomNumber1= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎊Player 1 WON";
}else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 WON🎊";
}else{
    document.querySelector("h1").innerHTML="DRAW";
}
var randomdiceimg1= "dice"+ randomNumber1 +".png";
var randomdiceimg2= "dice"+ randomNumber2 +".png";
document.querySelector(".img1").setAttribute("src",randomdiceimg1);
document.querySelector(".img2").setAttribute("src",randomdiceimg2);
// console.log(randomnum);
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src","dice1.png");
// }
// if(randomNumber1===2){
//     document.querySelector(".img1").setAttribute("src","dice6.png");
// }
// if(randomNumber1===3){
//     document.querySelector(".img1").setAttribute("src","dice5.png");
// }
// if(randomNumber1===4){
//     document.querySelector(".img1").setAttribute("src","dice4.png");
// }
// if(randomNumber1===5){
//     document.querySelector(".img1").setAttribute("src","dice3.png");
// }
// if(randomNumber1===6){
//     document.querySelector(".img1").setAttribute("src","dice2.png");
// }


// if(randomNumber2===1){
//     document.querySelector(".img2").setAttribute("src","dice1.png");
// }
// if(randomNumber2===2){
//     document.querySelector(".img2").setAttribute("src","dice6.png");
// }
// if(randomNumber2===3){
//     document.querySelector(".img2").setAttribute("src","dice5.png");
// }
// if(randomNumber2===4){
//     document.querySelector(".img2").setAttribute("src","dice4.png");
// }
// if(randomNumber2===5){
//     document.querySelector(".img2").setAttribute("src","dice3.png");
// }
// if(randomNumber2===6){
//     document.querySelector(".img2").setAttribute("src","dice2.png");
// }