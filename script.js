const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const value = button.innerText;

switch(value){

case "AC":
display.value="";
break;

case "⌫":
display.value=display.value.slice(0,-1);
break;

case "=":

try{

if(display.value===""){
display.value="";
}
else{

let result = eval(display.value);

if(result===Infinity || result===-Infinity){
display.value="Cannot divide by 0";
}
else{
display.value=result;
}

}

}
catch{
display.value="Error";
}

break;

default:

display.value+=value;

}

});

});

document.addEventListener("keydown",(e)=>{

const key=e.key;

if((key>='0' && key<='9') ||
key==='+' ||
key==='-' ||
key==='*' ||
key==='/' ||
key==='.' ||
key==='%')
{
display.value+=key;
}

else if(key==="Enter"){
e.preventDefault();

try{

display.value=eval(display.value);

}
catch{
display.value="Error";
}

}

else if(key==="Backspace"){
display.value=display.value.slice(0,-1);
}

else if(key==="Escape"){
display.value="";
}

});