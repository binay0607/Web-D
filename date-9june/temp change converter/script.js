var celsius= document.getElementById("celsius");
var fahrenheit= document.getElementById("fahrenheit");

function celtofah(){
    
    console.log("this is celsius value--> "+parseFloat(celsius.value));
    let output =( parseFloat(celsius.value)* 9/5)+32;
    fahrenheit.value= parseFloat(output.toFixed(2));

}
function fahtocel(){
    console.log("this is fah value--> "+ fahrenheit.value);
    let output= (parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value= parseFloat(output.toFixed(2));
}