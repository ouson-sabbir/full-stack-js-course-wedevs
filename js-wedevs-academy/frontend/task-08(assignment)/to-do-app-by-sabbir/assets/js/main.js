document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const createButton = (iconClass, onClick) => {
        const button = document.createElement('button');
        button.innerHTML = `<i class="${iconClass}"></i>`;
        button.addEventListener('click', onClick);
        return button;
    };

    
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        taskActions.appendChild(createButton('fas fa-edit', () => editTask(taskSpan)));
        taskActions.appendChild(createButton('fas fa-trash', () => deleteTask(taskItem)));
        taskActions.appendChild(createButton('fas fa-check', () => completeTask(taskItem)));

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);

        taskInput.value = ''; 
    };

    const editTask = (taskSpan) => {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText?.trim()) {
            taskSpan.textContent = newTaskText.trim();
        }
    };

    
    const deleteTask = (taskItem) => taskList.removeChild(taskItem);

    
    const completeTask = (taskItem) => taskItem.classList.toggle('task-completed');

    
    addTaskBtn.addEventListener('click', addTask);
});
