const todoForm=document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos=[];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}


function filter(item){
    return item !==3;
}


function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(typeof(li.id));
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}


function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    todoList.appendChild(li);
}

function handleTodoSubmut(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj ={
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


 


todoForm.addEventListener("submit",handleTodoSubmut);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos =  JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
}