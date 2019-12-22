// javascript inserton point
window.addEventListener("DOMContentLoaded", ()=>{
    gameStart();
});

// Game greeting
// along with game start
function gameStart(){
    const game = document.getElementById('game');
    let greeting = document.createElement('h1');
    greeting.innerText = "Welcome to my (Jared Burnham) first ever textbased RPG click here to get started"
    game.appendChild(greeting);
    let start = document.createElement('button');
    start.innerText = "Click Me";
    start.addEventListener("click", ()=>{
        clearText();
        startCharacterCreation();
    });
    game.appendChild(start);
}

//start of player journey
// player character has been created
// file charactercreation
function playerStart(){
    clearText();
    console.log(player);
}