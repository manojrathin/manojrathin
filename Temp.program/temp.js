//TEMPERATURE CONVERSION
const textbox=document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
function convert(){
    if(textbox.checked ===""){
    Window.alert("Please enter the value");
    }

    else if(tofahrenheit.checked){
     temp= Number(textbox.value);
     temp= temp * 9 / 5 + 32;
     result.textContent= temp.toFixed(1)  + "\u2109";

    }
    else if(tocelsius.checked){
    temp= Number(textbox.value);
    temp= (temp - 32)*(5/9);
    result.textContent= temp.toFixed(1)  + "\u2103";

    }
    
    else{
        result.textContent=window.alert("Select the unit ❗");
    }
}