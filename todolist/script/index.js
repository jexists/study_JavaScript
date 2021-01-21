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
const showTimeAlarm = document.querySelector('.alarm_area');
const alarmTime = showTimeAlarm.querySelector('input');
const showAlarmTime = document.querySelector('.show_alaram');

const toDoform = document.querySelector("#createForm");
const toDoTitle = toDoform.querySelector(".title");
const toDoContents = toDoform.querySelector("#contents");
const toDoDeadlineDate = toDoform.querySelector(".date");
const toDoDeadlineTime = toDoform.querySelector(".time");
const toDoListArea = document.querySelector(".list_area");
const addBtn = document.querySelector(".add_btn");
const addBtnArea = document.querySelector(".add_btn_area");
const createBtn = document.querySelector(".create_btn");
const cancleBtn = document.querySelector(".cancle_btn");
const heartBtn = document.querySelector("label.heart");
const heartInput = heartBtn.querySelector("input");
const completeBtn = document.querySelector("label.complete");

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
	event.target.classList.toggle("check");

	heartInput.checked = !heartInput.checked;
	// heartInput.checked ? heartBtn.classList.add('check') : heartBtn.classList.remove('check');
}

const editHeart = (event) => {
	event.preventDefault();
	event.target.classList.toggle("check");

	heartInput.checked = !heartInput.checked;

	const selLiElement = event.target.closest('.list_show').parentNode;
	// console.log(selLiElement);

	const changeHeart = toDoLists.map(function (toDo) {
		if (toDo.id === parseInt(selLiElement.id)) {
			toDo.heartYN = !toDo.heartYN;
		}
		return toDo;
	});
	localStorage.setItem(storageName, JSON.stringify(toDoLists));
}

const checkComplete = (event) => {
	event.preventDefault();
	event.srcElement.parentNode.nextElementSibling.children[0].classList.toggle('complete');
	event.target.classList.toggle("check");

	const selLiElement = event.target.closest('.list_show').parentNode;
	
	const complete = toDoLists.map(function (toDo) {
		if (toDo.id === parseInt(selLiElement.id)) {
			toDo.completeYN = !toDo.completeYN;
		}
		return toDo;
	});
	// console.log(toDoLists);
	localStorage.setItem(storageName, JSON.stringify(toDoLists));
}

const showDetail = (event) => {
	const selLiElement = event.target.closest('.list_show').parentNode;

	selLiElement.querySelector('.list_detail').classList.toggle('display_none');

}

const createTodoLists = (title, contents, heart, deadlineDate, deadlineTime, complete) => {
	const newId = toDoLists.length + 1;
	const createLi = document.createElement('li');
	createLi.id = newId;

	// console.log(complete);
	// console.log(toDoDeadlineDate.value);
	const html = `
		<div class="list_show">
      <label for="complete" class="complete">
        <input type="checkbox" id="complete" />
        <i class="${complete ? 'check' : ''}" onClick="checkComplete(event)"></i>
      </label>
      <div class="list_title">
        <p class="${complete ? 'complete' : ''}" onClick="showDetail(event)">${title}</p>
        <label for="heart" class="${heart ? 'heart check' : 'heart'}" onClick="editHeart(event)">
          <input type="checkbox" id="heart"/>
        </label>
      </div>
    </div>
    <div class="list_detail display_none">
      <div class="time_setting">
        <p class="date">${deadlineDate}</p>
        <p class="time">${deadlineTime}</p>
      </div>
      <div class="alarm_setting">
        <p>알람 몇분전</p>
      </div>
      <div class="contents">
        ${contents}
      </div>
      <div>
        <button type="button">수정</button>
        <button class="deleteBtn" type="button" onclick="deleteTodo(event)">삭제</button>
      </div>
    </div>
	`;

	createLi.innerHTML = html;
	viewWrap.appendChild(createLi);

	const toDoItem = {
		id: newId,
		title: title,
		createDate: Date.now(),
		deadlineDate: deadlineDate || toDoDeadlineDate.value,
		deadlineTime: deadlineTime || toDoDeadlineTime.value,
		contents: contents || toDoContents.value,
		alarmYN: alarmYN.checked,
		completeYN: complete,
		heartYN: heart || heartInput.checked
	};

	toDoLists.push(toDoItem);

	saveTodoLists();
}

const deleteTodo = (event) => {
	// console.log(event);
	const selToDoList = event.target;
	const selLiElement = selToDoList.parentNode;
	selLiElement.parentNode.removeChild(selLiElement);

	const cleanToDos = toDoLists.filter(function (toDo) {
		return toDo.id !== parseInt(selLiElement.id);
	});
	toDoLists = cleanToDos;
	// console.log(cleanToDos);
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
	const contents = toDoContents.value;
	const deadlineDate = toDoDeadlineDate.value;
	const deadlineTime = toDoDeadlineTime.value;

	createTodoLists(title, contents, heart, deadlineDate, deadlineTime, false);

	toDoTitle.value = "";
	toDoContents.value = "";
	closeModal();
}

const loadToDoLists = () => {

	const storage = localStorage.getItem(storageName);

	if (!!storage) {
		const parsedToDos = JSON.parse(storage);
		parsedToDos.forEach((toDo) => {
			createTodoLists(toDo.title, toDo.contents, toDo.heartYN, toDo.deadlineDate, toDo.deadlineTime, toDo.completeYN);
		});
	}
}


const alarmSetting = (event) => {
	event.preventDefault();

	timeSettingViewYN.checked = !timeSettingViewYN.checked;

	timeSettingViewYN.checked ? showTimeSetting.classList.remove('display_none') : showTimeSetting.classList.add('display_none');
}

const timeSetting = (event) => {
	event.preventDefault();

	// console.log(showTimeAlarm);
	alarmTime.checked = !alarmTime.checked;

	alarmTime.checked ? showAlarmTime.classList.remove('display_none') : showAlarmTime.classList.add('display_none');
}


// init ========
loadToDoLists();

toDoform.addEventListener("submit", handleSubmit);
addBtn.addEventListener("click", openModal);
cancleBtn.addEventListener("click", closeModal);
heartBtn.addEventListener("click", checkHeart);
timeSettingView.addEventListener("click", alarmSetting);
showTimeAlarm.addEventListener("click", timeSetting);