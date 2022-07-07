document.addEventListener("keydown",function(event){
    // console.log(event.key);
    if(event.key=="Enter"){
        document.querySelector("button").click();
    }
});




document.querySelector("button").onclick=function(){
    if(document.querySelector("#formId input").value.length===0){
        alert("Enter A Task Please!");
    }
    
};