// making referencers and creating new elements
const tasksContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("input-task");
const tasksList = document.createElement("ul");
tasksList.classList.add("tasks-list");
tasksContainer.append(tasksList);
let tasks = []; // object array to hold all the tasks

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
});
