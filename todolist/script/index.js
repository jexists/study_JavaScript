const storageName = 'ToDoList';

// elelment 
const viewWrap = document.querySelector('.todolist_view');
const createWrap = document.querySelector('.create_wrap');
const dropdown = document.querySelector('.dropdown');
const starYN = document.querySelector('.star');
const alarmYN = document.querySelector('.alarm');

const toDoform = document.querySelector("#createForm");
const toDoTitle = toDoform.querySelector(".title");
const toDoContents = toDoform.querySelector("#contents");
const toDoListArea = document.querySelector(".list_area");
const addBtn = document.querySelector(".add_btn");
const cancleBtn = document.querySelector(".cancle_btn");

let toDoLists = [];


const openModal = () => {
	addBtn.classList.add('display_none');
	toDoform.classList.remove('display_none');
	console.log(toDoform);
}

const closeModal = () => {
	addBtn.classList.remove('display_none');
	toDoform.classList.add('display_none');
	console.log(toDoform);

	toDoTitle.value = "";
	toDoContents.value = "";
}

const createTodoLists = (title) => {
	const newId = toDoLists.length + 1;
	const createLi = document.createElement('li');
	createLi.id = newId;

	const html = `
			<label for="checkBox">
			<input type="checkbox" id="checkBox" />
			<span>완료</span>
			</label>
			<a>
				<span>${title}</span>
			</a>
			<button type="button">수정</button>
			<button class="deleteBtn" type="button" onclick="deleteTodo(event)">삭제</button>
		`;
	createLi.innerHTML = html;
	viewWrap.appendChild(createLi);

	const toDoItem = {
		id: newId,
		title: title,
		createDate: Date.now(),
		deadlineDate: Date.now(),
		contents: toDoContents.value,
		alarmYN: alarmYN.checked,
		completeYN: false,
		starYN: false
	};

	toDoLists.push(toDoItem);
	saveTodoLists();
}

const deleteTodo = (event) => {
	console.log(event);
	const selToDoList = event.target;
	const selLiElement = selToDoList.parentNode;
	selLiElement.parentNode.removeChild(selLiElement);

	const cleanToDos = toDoLists.filter(function (toDo) {
		return toDo.id !== parseInt(selLiElement.id);
	});
	toDoLists = cleanToDos;
	console.log(cleanToDos);
	saveTodoLists();
}

const saveTodoLists = () => {
	localStorage.setItem(storageName, JSON.stringify(toDoLists));
}

const handleSubmit = (e) => {
	e.preventDefault();
	if (!toDoTitle.value) { return; }

	const title = toDoTitle.value;
	createTodoLists(title);

	toDoTitle.value = "";
	toDoContents.value = "";
}

const loadToDoLists = () => {
	const storage = localStorage.getItem(storageName);

	if (!!storage) {
		const parsedToDos = JSON.parse(storage);
		parsedToDos.forEach((toDo) => {
			createTodoLists(toDo.title);
		});
	}
}


// init ========
loadToDoLists();

toDoform.addEventListener("submit", handleSubmit);
addBtn.addEventListener("click", openModal);
cancleBtn.addEventListener("click", closeModal);



