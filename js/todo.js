const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { // 클릭된 버튼의 정보를 찾기 위해
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}


function paintTodo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// local storage에 value가 있으면 paint하기 위함

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; 
    // local storage에 있던 value들로 toDos array를 복원해줌
    parsedToDos.forEach(paintTodo);
}


