let userScore=0;
let compscore=0;
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");

let message = document.querySelector(".msg");
message.innerHTML="play your move";

const choices= document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});
const gencompchoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
};
const showWinner=(userwin, userChoice, compChoice)=>{
    
    const endgame=5;
    if(userwin)
    {
        message.innerHTML=`Your ${userChoice} Beats Computer's ${compChoice}`;
        userScore= userScore+1;
        us.innerHTML=userScore;

    }
    else {
        message.innerHTML=`Computer's ${compChoice} Beats your ${userChoice}`;
        compscore=compscore+1;
        cs.innerHTML=compscore;
    }
    if(userScore===endgame||compscore===endgame)
    {
        let winner= gamefinished(userScore, compscore);
        message.innerHTML=winner+"won the game. Doubleclick     to start a new game";

        const screenspace= document.querySelector("body");
        screenspace.addEventListener("dblclick",()=>{
            userScore=0;
            compscore=0;
            message.innerHTML="play your move";
            us.innerHTML= userScore;
            cs.innerHTML= compscore;
        });
        
    }

}


const gamefinished=(userScore, compscore)=>{
    let gamewinner= userScore>compscore? "you ":"computer";
    return gamewinner;

}
const playgame=(userChoice)=>{
    const compChoice= gencompchoice();
    if(userChoice===compChoice)
    {
        
        message.innerHTML= `Draw: your choice- ${userChoice} Computer's Choice- ${compChoice}`;
    }
    else{

        let userwin=true;
        if(userChoice==="rock")
        {
            userwin=compChoice==="paper"? false:true;
        }
        if(userChoice==="paper")
        {
            userwin=compChoice==="rock"? true:false;
        }
        else{
            userwin=compChoice==="paper"? true: false;
        }
        showWinner(userwin, userChoice, compChoice);
    }

}