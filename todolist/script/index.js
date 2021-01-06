
// (() => {

	const storageName = 'ToDoList';

	// elelment 
	const viewWrap = document.querySelector('.view_wrap');
	const createWrap = document.querySelector('.create_wrap');
	const dropdown = document.querySelector('.dropdown');

	const toDoform = document.querySelector("#createForm");
	const toDoTitle = toDoform.querySelector(".title");
	const toDoContents = toDoform.querySelector("#contents");
	const toDoListArea = document.querySelector(".list_area");
	const addBtn = document.querySelector(".add_btn");
	const cancleBtn = document.querySelector(".cancle_btn");

	let toDoLists = [];


	const openModal = () => {
		viewWrap.classList.add('display_none');
		createWrap.classList.remove('display_none');
	}

	const closeModal = () => {
		viewWrap.classList.remove('display_none');
		createWrap.classList.add('display_none');

		toDoTitle.value = "";
		toDoContents.value = "";
	}

	const createTodoLists = (title) => {
		const newId = toDoLists.length + 1;
		const li = document.createElement('li');
		li.id = newId;

		// <li id="todo_${newId}"></li>
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
		li.innerHTML = html;
		createWrap.appendChild(li);


		// document.querySelector('.deleteBtn').addEventListener("click", deleteTodo);

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
		saveTodoLists();
	}

	const deleteTodo = (event) => {
		console.log(event);
		const btn = event.target;
		const li = btn.parentNode;
		console.log(li);
		// toDoListArea.removeChild(li);
		li.parentNode.removeChild(li);

		const cleanToDos = toDoLists.filter(function (toDo) {
			return toDo.id !== parseInt(li.id);
		});
		toDoLists = cleanToDos;
		console.log(cleanToDos);
		saveTodoLists();
	}

	const saveTodoLists = () => {

		localStorage.setItem(storageName, JSON.stringify(toDoLists));
	}

	const handleSubmit = (e) => {
		console.log('??');
		e.preventDefault();
		if (!toDoTitle.value) {
			console.log('no value');
			return;
		}
		const title = toDoTitle.value;
		const contents = toDoContents.value;
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
	toDoform.addEventListener("click", openModal);
	addBtn.addEventListener("click", createTodoLists);
	cancleBtn.addEventListener("click", closeModal);



// })();

