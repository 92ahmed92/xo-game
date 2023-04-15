
let title=document.querySelector(".title")
let turn="X"
let squares=[]
function detectWinner(){
    for(let i = 1; i < 10; i++)
    {
        squares[i] = document.getElementById("item" + i).innerHTML
    }

    checkWinnerForThreeBlocks(1,2,3)
    checkWinnerForThreeBlocks(4,5,6)
    checkWinnerForThreeBlocks(7,8,9)
    checkWinnerForThreeBlocks(1,5,9)
    checkWinnerForThreeBlocks(3,5,7)
}


function checkWinnerForThreeBlocks(first, second, third){
    if(squares[first] === squares[second] && squares[second] === squares[third] && squares[third] != ""){
        title.innerHTML= `${squares[first]}` + " is th winner";

        document.getElementById("item" + first).style.background= "#000";
        document.getElementById("item" + second).style.background= "#000";
        document.getElementById("item" + third).style.background= "#000";

        setInterval(function(){ title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000)
    }
}

function setSquareContent(id){
    let element= document.getElementById(id);
    if(element.innerHTML === ""){
        if (turn === "X")
        {
          element.innerHTML="X" 
          turn="O" 
          title.innerHTML="O"
        }
        else if(turn === "O")
        {
            element.innerHTML = "O";
            turn = "X"
            title.innerHTML = "X"
        }

        detectWinner();
    }
}
