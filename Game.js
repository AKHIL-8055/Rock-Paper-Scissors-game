let userscore=0;
let computerscore=0;
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#computer-score");


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

//user choice
choices.forEach( (choices) => {
    
    choices.addEventListener("click",() => {
        const userchoice = choices.getAttribute("id");
        bothchoices(userchoice);
        
    });
});

//computerchoice
function computerchoice(){
    let options = ["rock","paper","scissors"];

    let computerchoice = Math.floor(Math.random()*3);
    return options[computerchoice];
}

//both choices
function bothchoices(userchoice){
    console.log(userchoice);
    compchoice = computerchoice();
    console.log(compchoice);

    //win conditions
    if(userchoice == compchoice)
        {
            message.innerText=" Game was draw";
            message.style.backgroundColor="#081b31";
        }
    else
    {
        let userwin = true;

        if(userchoice=="rock"){
            //paper,scissors
            userwin = compchoice =="paper" ? false : true;
        }
        else if(userchoice=="paper"){
            //rock,scissors
            userwin = compchoice =="scissors" ? false:true;
        }
        else{
            //rock,paper
           userwin = compchoice=="rock"?  false:true;
        }

        win_check(userwin,userchoice,compchoice);
    }
    
}


function win_check(userwin,userchoice,compchoice) {
    if(userwin==true){
        user_score.innerText++;
        message.innerText=`you win. ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
        
    }
    else{
        comp_score.innerText++;
        message.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor="red";
        
    }
}
