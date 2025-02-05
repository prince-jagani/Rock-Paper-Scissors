const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const model = document.querySelector(".model");

const scoreb = {
    player: 0,
    computer: 0
}

//play function
function play(e){
    restart.style.display = "inline-block";
    const playerschoice = (e.target.id);
    const computerchoice = getComputerchoice();
    const winner = getWinner(playerschoice , computerchoice);
    showWinner(winner,computerchoice);
    //console.log(winner , playerschoice , computerchoice);
}

// Event listener
choices.forEach(choice => choice.addEventListener('click',play));

//get computers choice
function getComputerchoice(){
    const rand = Math.floor(Math.random()*choices.length);
    return choices[rand].id;
}

function getWinner(p, c){
    //  --- USING SWITCH CASE   ---     //
    switch(true) {
        case p==c:
            return "draw";
        case p=="rock":{
            if(c==="paper")return "computer";
            else{ return "player"};
        }
        case p=="paper":{
            if(c==="scissors")return "computer";
            else {return "player"};
            }
        case p=="scissors":{
            if(c==="rock")return "computer";
            else {return "player"};
        }
    }
    //  ---     USING BOOLEAN EXPRESSION    ---     //
    /* 
        if(p==c) return "draw";
        (p==="rock")?(c==="paper")? return "computer" : return "player";
        (p==="paper")?(c==="scissors")? return "computer" : return "player";
        (p==="scissors")?(c==="rock")? return "computer" : return "player";
    */
}

function showWinner(winner , computerchoice)
{
    if(winner === "player"){
        scoreb.player++;
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="cc fas fa-hand-${computerchoice} fa-9x"></i>
        <p>Computer choose ${computerchoice}</p>`;
    }
    else if(winner == "computer"){
        scoreb.computer++;
        result.innerHTML = `
        <h1 class="text-lose">Computer Win</h1>
        <i class="cc fas fa-hand-${computerchoice} fa-9x"></i>
        <p>Computer choose ${computerchoice}</p>`;
    }
    else{
        result.innerHTML = `
        <h1>Match Draw</h1>
        <i class="cc fas fa-hand-${computerchoice} fa-9x"></i>
        <p>Computer choose ${computerchoice}</p>`;
    }

    score.innerHTML = `<p> Player: ${scoreb.player}</p>
    <p> Computer: ${scoreb.computer}</p>`;
    setTimeout(function(){
        model.style.display = "flex";
    } , 10);
    setTimeout(function(){
        model.style.display = "none";
    },1100);
}



function restartGame(e){
    scoreb.player = 0;
    scoreb.computer=0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`;
}

function changeMode(e){
    if(e.target==model){
        model.style.display = "none";
    }
}

window.addEventListener('dblclick' , changeMode);
restart.addEventListener('click',restartGame);

