// let boxes = document.querySelectorAll('.box');
// let reset = document.querySelector('#reset');
// let div = document.querySelector('.mydiv');
// let msg = document.querySelector('#msg')
// let turnO = true;
// let winnerPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ]
// boxes.forEach((box) =>{
//     box.addEventListener('click', () => {
//         console.log('button is clicked');
//         if(turnO){
//             box.innerText = 'O'
//             turnO = false;
//         }else{
//            box.innerText = 'X'
//             turnO = true;
//         }
//         box.disabled = true;
//         checkwinner();
//     })
// })
// const resetgame = ()=>{
//     turnO = true;
//     div.classList.add('hide');
//     enableboxes();
//   }
//   const enableboxes = () =>{
//     for(let val of boxes){
//       val.disabled = false;
//       val.innerText = "";

//     }
//   }
//   const disableboxes = () =>{
//     for(let val of boxes){
//       val.disabled = true;
//     }
//   }
//     const showWinner = (winner) =>{
//         msg.innerText = `Congratulations winner is ${winner}`;
//        div.classList.remove('hide');
//         disableboxes();
//       }
// const checkwinner = () =>{
//     for(let val of winnerPatterns){
//         let p1 = boxes[val[0]].innerText
//         let p2 = boxes[val[1]].innerText;;
//         let p3 = boxes[val[2]].innerText;
//         if(p1 != "" && p2 != "" && p3 != ""){
//             if(p1 === p2 && p2 === p3 ){
//                 console.log('winner');
//                 showWinner(p1);
//             }
//         }
//     }
// }
// reset.addEventListener('click',resetgame)
let boxes = document.querySelectorAll('.box');
let resetgame = document.querySelector('#reset');
let msg = document.querySelector('#msg');
let div = document.querySelector('.mydiv');
let newgamebutton = document.querySelector('.newgame')
let turnO = true;
let count = 0;
let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) =>{
  box.addEventListener('click' ,() => {
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
    }
     )
})
const gamedraw = () =>{
  msg.innerText = 'Game was a draw';
  div.classList.remove('hide');
  disableboxes();
}
const reset = () =>{
  turnO = true;
  div.classList.add('hide');
  enableboxes();
}
const enableboxes = () =>{
  for(let val of boxes){
    val.disabled = false;
    val.innerText = "";
  }
}
const disableboxes = () =>{
  for(let val of boxes){
    val.disabled = true;
  }
}
const showwinner = (winner) =>{
  msg.innerText = `Congratulations winner is ${winner}`;
  div.classList.remove('hide');
  disableboxes();

}
const checkwinner = () =>{
  for(let val of winpatterns){
    let p1 =boxes[val[0]].innerText;
    let p2 =boxes[val[1]].innerText;
    let p3 =boxes[val[2]].innerText;
    if(p1 != "" && p2 != "" && p3 != ""){
      if(p1 === p2 && p2 === p3){
        console.log('winner');
        showwinner(p1);
      }
    }
  }
}
resetgame.addEventListener('click' , reset);
newgamebutton.addEventListener('click' , reset);
