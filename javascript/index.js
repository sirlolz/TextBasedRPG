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

function startCharacterCreation(){
    const characterForm = document.createElement('form');
    const nameInput = document.createElement('textarea');
    const submit = document.createElement('submit');
    characterForm.appendChild(nameInput);
    characterForm.appendChild(submit);
    game.appendChild(characterForm);
}