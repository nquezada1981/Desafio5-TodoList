let tasks = [
    { id: 1, name: "Hacer las compras", completed: false },
    { id: 2, name: "Estudiar para la prueba", completed: false },
    { id: 3, name: "Sacar a pasear a Tobby", completed: false },
];
let taskId = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
    taskId++;
    const newTask = { id: taskId, name: taskName, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    updateTaskIds();
    renderTasks();
}

function toggleCompleted(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
        task.completed = !task.completed;
    }
    return task;
    });
renderTasks();
}



function updateTaskIds() {
    tasks.forEach((task, index) => {
        task.id = index + 1;
});
    taskId = tasks.length > 0 ? tasks.length : 0;
}



function handleKeyPress(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}



const taskInput = document.getElementById("taskInput");



taskInput.addEventListener("keydown", handleKeyPress);

function renderTasks() {
    const taskTable = document.getElementById("taskTable");
    const totalCounter = document.getElementById("totalCounter");
    const completedCounter = document.getElementById("completedCounter");

        taskTable.innerHTML = "";

        tasks.forEach((task) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
        idCell.textContent = task.id;
        row.appendChild(idCell);

    const nameCell = document.createElement("td");
        nameCell.textContent = task.name;
        row.appendChild(nameCell);

    const actionsCell = document.createElement("td");
    const actionsCel2 = document.createElement("td");

    const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("style","cursor: pointer");
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleCompleted(task.id));
        actionsCell.appendChild(checkbox);

    const deleteButton = document.createElement("icon");
        deleteButton.innerHTML = '<i class="fa-solid fa-xmark" style="color: #fa0000;"></i>';
        deleteButton.setAttribute("style","cursor: pointer");
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        actionsCel2.appendChild(deleteButton);

        row.appendChild(actionsCell);
        row.appendChild(actionsCel2);

    taskTable.appendChild(row);
});

    totalCounter.textContent = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed);
    completedCounter.textContent = completedTasks.length;
}

updateTaskIds();
renderTasks();