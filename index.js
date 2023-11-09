// const input=document.getElementsByName("button");


// for(const button of input){
//     button.addEventListener("click",function(event){
//      const display= event.target.innerHTML;
//     if(display!=='C' && display!=='AC' && display!=='='){
//      document.getElementById("display").value += display;
//     }

// });
// }


function input(value){
    if(value!=='C' && value!=='AC' && value!=='='){
        // entering the input in the input field of id display using buttons of the calculator
        document.getElementById("display").value +=value;
    }
    else if(value=='AC'){
        document.getElementById("display").value='';
    }
    // below code is not working
    else if(value=='C'){
       let txt= document.getElementById("display").value;
       let temp=txt.substr(txt.length-1,1);
    }
}

