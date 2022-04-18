const Calc = {
    add : function(a, b){
        console.log(a+b);
    },
    mul : function(a, b){
        console.log(a*b);
    },
    sub : function(a, b){
        console.log(a-b);
    },
    div : function(a, b){
        console.log(a/b);
    },
}


Calc.add(5,2);
Calc.mul(5,2);
Calc.sub(5,2);
Calc.div(5,2);

// const age = parseInt(prompt("How old are you?"));

// console.log(age, typeof age);

// if(isNaN(age) || age < 0){
//     console.log("Please write a real positive number");
// }else if(age<18){
//     console.log("you are too young.");
// }else if(age >= 18 && age <= 50){
//     console.log("you can drink");
// }else if (age === 100){
//     console.log("wow you are wise");
// }else if (age > 50){
//     console.log("you can do whatever you want.");
// }

//const title = document.getElementById("title");
// console.dir(title);

//title.innerText = "got you!";


// HTML ID 찾기 - 같은 동작을 함. 하지만 querryselector 는 여러 파라미터를 받을 수 있음.
//const title = document.querySelector("#hello form");       // '#' -> id 찾기.
//const title = document.getElementById("hello");         


// html style 접근하기
//const title = document.querySelector("div.hello:first-child h1");
//title.style.color = "blue";


// event
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color = "blue";
}

function handleMouseEntter(){
    h1.innerText = "Mouse is here!";
}

function handlMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("all good");
}

//title.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
//title.addEventListener("mouseenter", handleMouseEntter);
h1.onmouseenter = handleMouseEntter;
h1.addEventListener("mouseleave", handlMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

// CSS in JS
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

// CSS in JS 2
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";

    // h1.className="active";
    if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
*/

// CSS in JS 3
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");


    /*
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */
}

h1.addEventListener("click", handleTitleClick);
