let task = null;

function getTask() {
    return task;
}

function addTask(newTask) {
    if (task !== null) {
        return { isSuccess: false, errorMessage: "Task already exists. Use update function" };
    }

    if (!newTask == null) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function updateTask(newTask) {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    if (!newTask) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function deleteTask() {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    task = null;
    return { isSuccess: true };
}

function promptToEnterTask() {
    let newTask = prompt('enter a task');
    let result;
    if (newTask) {
        result = addTask(newTask);
    }else {
        alert('task can not be empty');
        return;
    }

    if (result.isSuccess) {
        alert('task added');
    }else errorMessage;
}

function promptToUpdateTask() {
    let newTask = prompt('update task');
    let result;
    if (newTask) {
        result=updateTask(newTask);
    }else {
        alert('task can not be empty');
        return;
    }

    if (result.isSuccess) {
        alert('task updated');
    } else errorMessage;
}

function displayTaskToConsole() {

    if (task) {
        console.log(`current task ${task}`);
    }else console.log('No active task');
}

function displayTaskToAlert() {

    if (task) {
        alert(`current task ${task}`);
    }else alert('No active task');
}