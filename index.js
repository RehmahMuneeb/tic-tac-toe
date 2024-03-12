let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let newgame = document.querySelector('newgame');
let mydiv = document.querySelector('.myname')
let msg = document.querySelector('#msg')
let turnO = true;
let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box)=> {
    box.addEventListener('click',() =>{
     console.log('button is clicked');
     if(turnO){
        box.innerText = 'O'
        turnO = false;
     }else{
        box.innerText = 'X'
        turnO = true;
     }
     box.disabled = true;
     checkwinner();
    })
})
const resetgame = () =>{
   turnO = true;
   mydiv.classList.add('hide')
   enableboxes();
}
const enableboxes = () =>{
    for(let val of boxes){
        val.disabled = false;
        val.innerText = "";
    }}
const disableboxes = () =>{
    for(let val of boxes){
        val.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
    mydiv.classList.remove('hide');
    disableboxes();
  }
const checkwinner = () =>{
 for(let val of winPatterns){
    let pos1 = boxes[val[0]].innerText;
    let pos2 = boxes[val[1]].innerText;
    let pos3 = boxes[val[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log('winner');
            showWinner(pos1);
        }
    }
 
}}
reset.addEventListener('click' , resetgame)

