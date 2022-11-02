var display = document.querySelector("#input");
var buttons= Array.from(document.getElementsByClassName("button"));
var toeval= "";
var ans= "";
buttons.map((button)=>{    //.map means just do for all buttons in the array and each element is define as button like I do el
    button.addEventListener("click",(e)=>{  //e taps into the event
        switch(e.target.innerText){
            case "AC":
                display.value="";
                toeval= "";
                break;
            case "DEL":
                if(display.value){
                    display.value= display.value.slice(0,-1);
                }
                break;
            case "√":
                display.value= "√("+ display.value+ ")";
                toeval=display.value.replace("√", "Math.sqrt");
                break;
            case "%":
                display.value= "("+ display.value +")%";
                toeval=display.value.replace("%","*100");
                break;
            case "+/-":
                if(display.value>0){
                    display.value= "-"+display.value;
                }else{
                    display.value= display.value.replace("-","");
                }
                break;
            case "ANS":
                try{
                    console.log(toeval);
                    display.value= eval(toeval);
                    toeval="";
                }catch{
                    display.value= "ERROR!";
                }
                break;
            case "":
                break;
            default:
                display.value+= e.target.innerText;
                toeval=display.value;
        }

    })
})