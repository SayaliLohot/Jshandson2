let ranNum = parseInt(Math.random()* 100 + 1)//1 for to start with 1 random nevergives interer range for random is 0.... to 0.99999
// console.log(ranNum);
let btn=document.getElementById("btn")
let userInput = document.getElementById("userInput")
let questmark =document.getElementById("questmark")
let body = document.getElementsByTagName("body")
let stratguesstext =document.getElementById("sc")
let reloadgame =document.getElementById('reloadgame')
let initialscore=100
let highscore=null;

btn.addEventListener("click",function(){

    userInput= document.getElementById("userInput").value

    if(userInput == ranNum){
        questmark.innerText=`${ranNum}`;
        sc.innerText="🤩🤩 Hurray You Won 🤩🤩";
        document.body.style.backgroundColor="green";
        initialscore--
        document.querySelector('#score').textContent=initialscore
         highscore=initialscore
          document.querySelector('.highscore').textContent=highscore
    }
    else if(userInput < ranNum){
        sc.innerText="Your Guess Is Low";
        initialscore--
        document.querySelector('#score').textContent=initialscore
    }
    else if (userInput>ranNum){
        sc.innerText="Your Guess Is High";
        initialscore--
        document.querySelector('#score').textContent=initialscore

    }
})

reloadgame.addEventListener("click",function(){
    location.reload();
})
