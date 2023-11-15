
document.getElementById("display").value='0';
function input(value){
    if(value!=='C' && value!=='AC' && value!=='='){
        // entering the input in the input field of id display using buttons of the calculator
        if(value=='%'){
            let temp=document.getElementById("display").value;
            document.getElementById("display").value=eval(temp);
            document.getElementById("display").value=temp/100;
        }
        else{
        document.getElementById("display").value +=value;
        }
    }
    // erasing all input a time
    else if(value=='AC'){
        document.getElementById("display").value='';
    }
    // below code is erasing one character at a time from right side
    else if(value=='C'){
      let txt=document.getElementById("display").value;
      let data= txt[txt.length-1];
      document.getElementById("display").value= txt.replace(data,'');
    }
    else if(value=='='){
        let sum=document.getElementById("display").value;
        document.getElementById("display").value=eval(sum);
    }
}

