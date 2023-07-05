let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn"); 
let nameInput = document.getElementById("nameInput");  
let title = document.getElementById("title");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0"; 
    title.innerHTML = "IniciarSeccion";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signIn.onclick = function(){
    nameInput.style.maxHeight = "60"; 
    title.innerHTML = "Registrarme";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");  
}
