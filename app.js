const number = document.querySelector(".number");
const guess = document.querySelector(".Guess");
const check = document.querySelector(".check");
const msg = document.querySelector(".message");
const body = document.querySelector("body");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");


let chance = 20;
const secretNumber = Math.floor(Math.random()*20)+1;
console.log(secretNumber);


function checkGame() {
    chance--;
    if(chance > 0){
    
        score.textContent = chance;
        let guessVal = parseInt(guess.value);
        if(guessVal === secretNumber){
            msg.textContent = "🎉 correct number";
            number.textContent = secretNumber;
        
            if(chance > highscore.textContent){
            highscore.textContent = chance;
        }
        saveData();
        body.style.backgroundColor = "#60b347";
    }else if(guessVal > secretNumber){
        msg.textContent = "📉 Too high!";
    }else{
        msg.textContent = "📈 Too low!";
    }
}else{
    score.textContent = 0;
    msg.textContent = "😌 You lost the Game!";
}

}

check.addEventListener("click", ()=> {
    if(guess.value){
        checkGame();
    }
})

function saveData(){
    localStorage.setItem("data", highscore.textContent);
}

function showData(){
    highscore.textContent = localStorage.getItem("data");
}

showData();


const reset = document.querySelector(".again");

reset.addEventListener("click", () => {
    chance = 20;
    score.textContent = chance;
    number.textContent = "?";
    body.style.backgroundColor = "#222";
})
