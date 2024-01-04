document.addEventListener('DOMContentLoaded', function () {
    const addTaskForm = document.getElementById('addTaskForm');
    const tasksA = document.getElementById('tasksA');
    const tasksB = document.getElementById('tasksB');
    const tasksC = document.getElementById('tasksC');

   

    addTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;

        if (taskName && dueDate) {
            const task = createTaskElement(taskName, dueDate);
            tasksA.appendChild(task);

            // Clear form inputs
            document.getElementById('taskName').value = '';
            document.getElementById('dueDate').value = '';
        }
      
    });

    function createTaskElement(name, date) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const taskInfo = document.createElement('div');
        taskInfo.textContent = ` ${name},  ${date}`;
        taskContainer.appendChild(taskInfo);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            const updatedName = prompt('Enter updated task name:', name);
            const updatedDate = prompt('Enter updated due date:', date);

            if (updatedName !== null && updatedDate !== null) {
                taskInfo.textContent = `  ${updatedName},  ${updatedDate}`;
            }
        });
        taskContainer.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskContainer.remove();
        });
        taskContainer.appendChild(deleteBtn);

        const proceedBtn = document.createElement('button');
        proceedBtn.textContent = 'Proceed';
        proceedBtn.classList.add('proceed-btn');
        proceedBtn.addEventListener('click', function () {
            moveTask(taskContainer);
        });
        taskContainer.appendChild(proceedBtn);

        return taskContainer;
    }

    function moveTask(taskContainer) {
        if (taskContainer.parentNode === tasksA) {
            tasksA.removeChild(taskContainer);
            tasksB.appendChild(taskContainer);
        } else if (taskContainer.parentNode === tasksB) {
            tasksB.removeChild(taskContainer);
            tasksC.appendChild(taskContainer);
        }

    }
});