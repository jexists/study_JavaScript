const storageName = 'ToDoList';

// elelment 
const viewWrap = document.querySelector('.view_wrap');
const createWrap = document.querySelector('.create_wrap');
const dropdown = document.querySelector('.dropdown');

const toDoform = document.querySelector("#createForm");
const toDoTitle = toDoform.querySelector(".title");
const toDoContents = toDoform.querySelector("#contents");
const toDoListArea = document.querySelector(".list_area");
    
let toDoLists = []; 


const addTodoList = () => {
  viewWrap.classList.add('display_none');
  createWrap.classList.remove('display_none');
}

const cancleCreate = () => {
  viewWrap.classList.remove('display_none');
  createWrap.classList.add('display_none');

	toDoTitle.value = "";
	toDoContents.value = "";
}

const createTodo = (title, contents) => {
  const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDoLists.length + 1;
	delBtn.innerText = "완료";
	delBtn.addEventListener("click", deleteTodo);

	span.innerText = title;
	li.appendChild(delBtn);
	li.appendChild(span);

	li.id = newId;
  toDoListArea.appendChild(li);
  
  const toDoItem = { 
    id: newId,
    title: title,
    createDate: Date.now(),
    deadlineDate: Date.now(),
    contents: contents,
    alramYN: false,
    completeYN: false,
    starYN: false
  };

	toDoLists.push(toDoItem);
	submitTodo();
}

const deleteTodo = (event) => {
	const btn = event.target;
	const li = btn.parentNode;
	toDoListArea.removeChild(li);

	const cleanToDos = toDoLists.filter(function(toDo){
		return toDo.id !== parseInt(li.id); 
	});
	toDoLists = cleanToDos;
	submitTodo()
}

const submitTodo = () => {
	localStorage.setItem(storageName, JSON.stringify(toDoLists));
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (!toDoTitle.value) {
    console.log('no value');
    return;
  }
	const title = toDoTitle.value;
	const contents = toDoContents.value;
	createTodo(title, contents);
	toDoTitle.value = "";
	toDoContents.value = "";
}

const loadToDoLists = () => {
	const loadToDos = localStorage.getItem(storageName);
	if (loadToDos !== null){
		const parsedToDos = JSON.parse(loadToDos);
		parsedToDos.forEach(function(toDo){
			createTodo(toDo.title, toDo.contents);
		});
	}
}

const init = () => {
	loadToDoLists();
}

init();



