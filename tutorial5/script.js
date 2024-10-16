function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;
    if (taskText!== "") {
        
        var listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        var removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeTask(listItem);
        };
        listItem.appendChild(removeButton);
        var taskList = document.getElementById('taskList');
        taskList.appendChild(listItem);
        
        saveTasks();
       
        taskInput.value = "";
    }
}

function removeTask(taskItem) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById('taskList');
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++) {
        var task = taskList.children[i].textContent;
        task = task.replace('Remove', '').trim();
        tasks.push(task);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.onload = function () {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        var taskList = document.getElementById('taskList');
        for (var i = 0; i < tasks.length; i++) {
            var taskText = tasks[i];
            
            if (taskText === "task1") {
                continue;
            }
            var listItem = document.createElement('li');
            listItem.textContent = taskText;
            var removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.onclick = function () {
                removeTask(listItem);
            };
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        }
    }
}
