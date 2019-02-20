userscore=0;
compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");

const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p");
const winner_div=document.querySelector(".action-msg");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice(){
    const choice=['r','p','s'];
    const randomnumber=Math.floor(Math.random()*3);
    return choice[randomnumber];
}
function convert(letter){
    if(letter=="r")
    return "Rock";
    if(letter=="p")
    return "Paper";
    if(letter=="s")
    return "Scissor";
}
function win(user,comp){
    userscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_div.innerHTML=`${convert(user)} beats ${convert(comp)}. You win!!!!`;
    
        var uc=user;
        userchoice_div=document.getElementById(uc);
        userchoice_div.classList.add("green-glow");
        setTimeout(function(){userchoice_div.classList.remove('green-glow')},500);
    
    
}
function lose(user,comp){
    compscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_div.innerHTML=`${convert(user)} beats ${convert(comp)}. You lose!!!!`;
    var uc=user;
    const userchoice_div=document.getElementById(uc);
    userchoice_div.classList.add('red-glow');
    setTimeout(function(){userchoice_div.classList.remove('red-glow')},500);
}
function draw(user,comp){
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_div.innerHTML=`${convert(user)} equals ${convert(comp)}. It's a tie!!!!`;
    var uc=user;
    const userchoice_div=document.getElementById(uc);
    userchoice_div.classList.add('gray-glow');
    setTimeout(function(){userchoice_div.classList.remove('gray-glow')},500);
}
function game(userchoice){
    const compchoice=getcomputerchoice();
    switch(userchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
        win(userchoice,compchoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userchoice,compchoice);
        break;
        case "rr":
        case "ss":
        case "pp":
        draw(userchoice,compchoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissor_div.addEventListener('click',function(){
    game("s");
})
}

main();