
let title=document.querySelector(".title")
let turn="x"
let squares=[]
function gewinner(){
    for(let i=1;i<10;i++)
    {
        squares[i]=document.getElementById("item+i")
    }
        title.innerHTML= "${squares[1]}winner";
        document.getElementById("item+1").style.background= "#000";
        document.getElementById("item+2").style.background= "#000";
        document.getElementById("item+3").style.background= "#000";
        setInterval(function(){ title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000)
    


    
     else if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[6]!=""){

    }
    else if(squares[7]==squares[8]&&squares[9]==squares[8]&&squares[8]!=""){

    }
    else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[9]!="")
    {

    }
    else if(squares[3]==squares[5]&&squares[7]==squares[5]&&squares[5]!=""){

    }
}


function game(id){
    let element= document.getElementById(id);
    if (turn==="x" && element.innerHTML=="")
    {
      element.innerHTML="x" 
      turn="o" 
      title.innerHTML="o"
    }
    if(turn==="o"  && element.innerHTML=="")
    {
        element.innerHTML="o";
        turn="x"
        title.innerHTML="x"
    }
    gewinner();
}