// javascript inserton point
window.addEventListener("DOMContentLoaded", ()=>{
    gameStart();
});

// Game greeting
// also redirect
function gameStart(){
    const game = document.getElementById('game');
    let greeting = document.createElement('h1');
    greeting.innerText = "Welcome to my (Jared Burnham) first ever textbased RPG click here to get started"
    game.appendChild(greeting);
    let start = document.createElement('button');
    start.innerText = "Click Me";
    start.addEventListener("click", ()=>{
        startCharacterCreation()
    });
    game.appendChild(start);
}

//character creation setup
// uses character Class
function startCharacterCreation(){
    let j = new Character('Jareluped');
    j.read()
}