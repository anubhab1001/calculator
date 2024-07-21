let  button=document.querySelectorAll(".button");

function addDisplay(value){

    let d=document.getElementById('display');

    if(value!==undefined){
        d.value += value;  
    }
    else{
        d.value='';
    } 
}

for (let btn of button){

    btn.onclick = () =>{
        if(btn.innerText ==="AC"){
            addDisplay();
        }
        else if(btn.innerText ==="="){
            calculate();   
        }
        else{
            addDisplay(btn.innerText);
        } 
    }  
    
}


function calculate(){

    let d=document.getElementById('display');
    let res=eval(d.value);
    d.value=res;
    

}
