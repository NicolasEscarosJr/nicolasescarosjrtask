// Selecting elements
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

// Event listeners
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

// Functions
function addTask(e) {
	e.preventDefault();
	if (taskInput.value === '') {
		alert('Please add a task');
		return;
	}
	// Create new task item
	const taskItem = document.createElement('li');
	taskItem.innerHTML = `
		<span>${taskInput.value}</span>
		<button class="delete-btn">Delete</button>
	`;
	// Add task item to list
	taskList.appendChild(taskItem);
	// Clear input field
	taskInput.value = '';
}

function deleteTask(e) {
	if (e.target.classList.contains('delete-btn')) {
		if (confirm('Are you sure you want to delete this task?')) {
			e.target.parentElement.remove();
		}
	}
}
