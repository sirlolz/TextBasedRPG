// javascript inserton point
window.addEventListener("DOMContentLoaded", ()=>{
    gameStart();
});

// Game greeting
// also redirect
function gameStart(){
    const game = document.getElementById('game');
    let greeting = document.createElement('p');
    greeting.innerText = "Welcome to my (Jared Burnham) first ever textbased RPG click here to get started"
    game.appendChild(greeting);
    let start = document.createElement('button');
    start.innerText = "Click Me";

}