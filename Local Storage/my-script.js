
const addTaskButton = document.querySelector("#addTaskButton");
addTaskButton.addEventListener("click", addTask);
const submitTask = document.querySelector("#submitTask");
submitTask.addEventListener("click", taskSubmit);
const logArea = document.querySelector("#log");
const taskToAdd = document.querySelector("#task");
const taskTable = document.querySelector("#taskTable");
const deleteTaskButton = document.querySelector("#deleteTaskButton");
deleteTaskButton.addEventListener("click", deleteTask);
const submitDelete = document.querySelector("#submitTaskDelete");
submitDelete.addEventListener("click", taskSubmitDelete);
const taskToDelete = document.querySelector("#taskdel");

function isLocalStorageSupported() {
    try {
        const testKey = "__test__";
        localStorage.setItem(testKey, testKey)
        localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}
function deleteTask() {
    const delTaskForm = document.getElementById("deleteTask");
    if (delTaskForm.hidden) {
        delTaskForm.hidden = false;
        deleteTaskButton.textContent = "Cancel";
    } else {
        delTaskForm.hidden = true;
        deleteTaskButton.textContent = "Delete Task";
    }
    logArea.textContent = "";
}

function taskSubmitDelete() {
    const taskValue = parseInt(taskToDelete.value.trim());
    if(!isLocalStorageSupported()) {
        logArea.textContent = "ERROR: Local storage is not supported in this browser"
        return;
    }
    let key = taskValue;
    if(localStorage.getItem(taskValue) !== null){
        localStorage.removeItem(taskValue)
        logArea.textContent = `Task has been deleted with key "${key}"`;
    } else {
        logArea.textContent = "ERROR: No task with selected key.";
    }
    while(true){
        if(localStorage.getItem(key+1) !== null){
            localStorage.setItem(key, localStorage.getItem(key+1));
            localStorage.removeItem(key+1);
            key++;
            continue;
        }
        else {
            break;
        }
    }
    taskToDelete.value = "";
}

function addTask() {
    const addTaskForm = document.getElementById("addTask");
    if (addTaskForm.hidden) {
        addTaskForm.hidden = false;
        addTaskButton.textContent = "Cancel";
    } else {
        addTaskForm.hidden = true;
        addTaskButton.textContent = "Add Task";
    }
    logArea.textContent = "";
}

function taskSubmit() {
    const taskValue = taskToAdd.value.trim();
    if(!isLocalStorageSupported()) {
        logArea.textContent = "ERROR: Local storage is not supported in this browser"
        return;
    }
    let key = 1;
    while(true){
        if(localStorage.getItem(key) === null){
            localStorage.setItem(key, JSON.stringify(taskValue));
            logArea.textContent = `Task has been added with key "${key}"`;
            break;
        }
        key++;
    }
    taskToAdd.value = "";
}


setInterval(function(){
    if(!isLocalStorageSupported()) {
        taskTable.innerHTML = "ERROR: Local storage is not supported.";
    } else {
        taskTable.innerHTML = "<thead><th>Key</th><th>Task</th></thead><tbody>";
        let key = 1;
        while(true){
            if(localStorage.getItem(key) !== null){
                let task = localStorage.getItem(key);
                taskTable.innerHTML += `<tr><td>${key}</td><td>${task}</td></tr>`;
                key++;
                continue;
            }
            taskTable.innerHTML += "</tbody>";
            break;
        }
    }
}, 50);

