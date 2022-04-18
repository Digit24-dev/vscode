const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginInput = document.querySelector("#login-form inpiut");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function handleLinkClick(event){
    event.preventDefault();
}

link.addEventListener("click", handleLinkClick);

//localStorage.setItem(USERNAME_KEY, "nico");
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}