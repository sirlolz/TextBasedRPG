//beginging of character creation
function startCharacterCreation(){
    const characterForm = document.createElement('form'); 

    const nameInput = document.createElement('input');
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "userName");
    
    const createButton = document.createElement("input");
    createButton.setAttribute("type", "submit");
    createButton.setAttribute("Vvalue", "submit");
    
    characterForm.appendChild(nameInput);
    characterForm.appendChild(createButton);
    handleCreation(characterForm);
    game.appendChild(characterForm);
}

// pass in form node to handle the submit event
// 
function handleCreation(node){
    node.addEventListener('submit',(event)=>{
        event.preventDefault();
        player = new Character(event.target.userName.value);
        localStorage.setItem('player', player);
        playerStart();
    });
}