let boxes = document.querySelectorAll('.box');
let msg = document.querySelector('#msg');
let newgame = document.querySelector('#newgame');
let div = document.querySelector('.mydiv')
let turnO = true;
let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
box.addEventListener( 'click',()=>{
    console.log('buttton is clicked');
    if(turnO){
        box.innerText = 'O';
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkwinner();
})
})

const disabledboxes =()=>{
    for(let val of boxes){
     val.disabled = true;
    }
}
const showWinner =(winner)=>{
msg.innerText= `congratulations winner is ${winner}`;
div.classList.remove('hide');
disabledboxes();
}
const checkwinner = ()=>{
    for(let val of winpatterns){
        let p1 = boxes[val[0]].innerText;
        let p2 = boxes[val[1]].innerText;
        let p3 = boxes[val[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log('winner');
                showWinner(p1);
            }
        }
    }
}