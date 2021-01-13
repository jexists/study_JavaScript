const storageName = 'ToDoList';

// elelment 
const viewWrap = document.querySelector('.todolist_view');
const createWrap = document.querySelector('.create_wrap');
const dropdown = document.querySelector('.dropdown');
const starYN = document.querySelector('.star');
const timeSettingView = document.querySelector('.time_setting_view');
const timeSettingViewYN = timeSettingView.querySelector('input');
const showTimeSetting = document.querySelector('.show_time');
const alarmYN = document.querySelector('.alarm');

const toDoform = document.querySelector("#createForm");
const toDoTitle = toDoform.querySelector(".title");
const toDoContents = toDoform.querySelector("#contents");
const toDoListArea = document.querySelector(".list_area");
const addBtn = document.querySelector(".add_btn");
const addBtnArea = document.querySelector(".add_btn_area");
const createBtn = document.querySelector(".create_btn");
const cancleBtn = document.querySelector(".cancle_btn");
const heartBtn = document.querySelector("label.heart");
const heartInput = heartBtn.querySelector("input");

let toDoLists = [];


const openModal = () => {
	addBtnArea.classList.add('display_none');
	toDoform.classList.remove('display_none');
}

const closeModal = () => {
	addBtnArea.classList.remove('display_none');
	toDoform.classList.add('display_none');

	toDoTitle.value = "";
	toDoContents.value = "";
}

const checkHeart = (event) => {
	event.preventDefault();
	heartInput.checked = !heartInput.checked;

	heartInput.checked ? heartBtn.classList.add('check') : heartBtn.classList.remove('check');
}

const createTodoLists = (title, heart) => {
	const newId = toDoLists.length + 1;
	const createLi = document.createElement('li');
	createLi.id = newId;

	console.log(heart);
	const html = `
	<div class="list_show">
	<label for="complete">
		<input type="checkbox" id="complete"/>
		<i></i>
	</label>
	<div class="list_title">
		<p>${title}</p>
		<span class="heart ${heart ? 'check': ''}"></span>
	</div>
</div>
<div class="display_none">
	<div class="time_setting">
		<p class="date">2020</p>
		<p class="time"></p>
	</div>
	<div class="alarm_setting">
		<p>알람 몇분전</p>
	</div>
	<div class="contents">
		블라블라
	</div>
	<div>
		<button type="button">수정</button>
		<button class="deleteBtn" type="button" onclick="deleteTodo(event)">삭제</button>
	</div>
</div>
		`;
		if(heart) {}
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
		heartYN: heartInput.checked
	};

	console.log(toDoItem);
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
	const heart = heartInput.checked;
	createTodoLists(title, heart);

	toDoTitle.value = "";
	toDoContents.value = "";
	closeModal();
}

const loadToDoLists = () => {

	const storage = localStorage.getItem(storageName);

	if (!!storage) {
		const parsedToDos = JSON.parse(storage);
		parsedToDos.forEach((toDo) => {
			createTodoLists(toDo.title, toDo.heartYN);
		});
	}
}

const alarmSetting = (event) => {
	event.preventDefault();

	timeSettingViewYN.checked = !timeSettingViewYN.checked;

	timeSettingViewYN.checked ? showTimeSetting.classList.remove('display_none') : showTimeSetting.classList.add('display_none');
}


// init ========
loadToDoLists();

toDoform.addEventListener("submit", handleSubmit);
addBtn.addEventListener("click", openModal);
cancleBtn.addEventListener("click", closeModal);
heartBtn.addEventListener("click", checkHeart);
timeSettingView.addEventListener("click", alarmSetting);