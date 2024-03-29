// making referencers and creating new elements
const tasksContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("input-task");
const tasksList = document.createElement("ul");
tasksList.classList.add("tasks-list");
tasksContainer.append(tasksList);
let tasks = []; // object array to hold all the tasks

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    displayTasks(tasks);
  }
}

loadTasks();
// function to diplay each task in tasks array
function displayTasks(tasks) {
  tasksList.textContent = ""; // clean the list to not duplicate the tasks
  tasks.forEach((e, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    const taskTxt = document.createElement("span");
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks(tasks);
      loadTasks();
    });
    checkBox.type = "checkbox";
    taskTxt.textContent = e.task;
    checkBox.checked = e.completed;
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        taskTxt.classList.add("completed");
      } else {
        taskTxt.classList.remove("completed");
      }
      tasks[index].completed = checkBox.checked;
      saveTasks(tasks);
    });
    if (e.completed) {
      taskTxt.classList.add("completed");
    }
    taskItem.append(checkBox, taskTxt, deleteBtn);
    tasksList.append(taskItem);
  });
}

// add task to the array when the form is submitted
const form = document.getElementById("input-task-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskdescription = taskInput.value;
  const newTask = {
    task: taskdescription,
    completed: false,
  };
  tasks.push(newTask);
  taskInput.value = "";
  console.log(tasks);
  displayTasks(tasks);
  saveTasks(tasks);
});

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
