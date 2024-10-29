const diceResult = document.getElementById('click');
const playerImg1 = document.getElementById('dice-img-1');
const playerImg2 = document.getElementById('dice-img-2');
const diceBtn = document.getElementById('dicebtn');

diceBtn.addEventListener('click', ()=>{
    let randomImg1 = Math.floor(Math.random() *6) +1;
    let randomImg2 = Math.floor(Math.random() *6) +1;
    playerImg1.src = './dice' + randomImg1 + '.png';
    playerImg2.src = './dice' + randomImg2 + '.png'
if(randomImg1 < randomImg2){
    diceResult.textContent = 'Player 2 Won'
} else if(randomImg1 > randomImg2){
    diceResult.textContent = 'Player 1 Won'
} else if(randomImg1 === randomImg2) {
    diceResult.textContent = 'Tie'
}
})
