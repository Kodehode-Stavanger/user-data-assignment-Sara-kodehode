// making referencers and creating new elements
const tasksContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("input-task");
const tasksList = document.createElement("ul");
tasksList.classList.add("tasks-list");
tasksContainer.append(tasksList);
let tasks = []; // object array to hold all the tasks

// function to diplay each task in tasks array
function displayTasks(tasks) {
  tasksList.textContent = ""; // clean the list to not duplicate the tasks
  tasks.forEach((e) => {
    const taskItem = document.createElement("li");
    const taskTxt = document.createElement("span");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    taskTxt.textContent = e.task;
    checkBox.checked = e.completed;
    taskItem.append(checkBox, taskTxt);
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
});

//function to display the tasks in the tasks container
