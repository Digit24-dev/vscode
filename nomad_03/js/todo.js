const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function deleteToDo(event){
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
    event.target.localStorage.removeItem();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // foreach <> forEach : watch out!
    
    /* parsedToDos.forEach((item) => console.log("hello", item)); */
}

