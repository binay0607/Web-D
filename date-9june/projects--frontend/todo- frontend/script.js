document.querySelector(".btn").onclick=function(){
    
    if(document.querySelector(".newtask input").value.length==0){
        alert("Please Enter A Task!");
    }else{
        document.querySelector(".record").innerHTML+= `<div class="tasks">
                    <span id="task">
                    ${document.querySelector(".newtask input").value}
                    </span>
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
                    </div>`;

                    // ` this symbol helped to do this
        var currTasks= document.querySelectorAll(".delete");
        for(var i=0;i<currTasks.length;i++){
                        
            currTasks[i].onclick= function(){
                console.log(this.parentNode);  //can also use parentElement 
                this.parentNode.remove();
            };
        }

        var allTask= document.querySelectorAll(".tasks")
        for(var i=0;i<allTask.length;i++){
            allTask[i].onclick= function(){
                this.classList.toggle("completed");
            };
        }

        document.querySelector(".newtask input").value="";
    }
};
document.addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        document.querySelector("button").click();
    }
});

