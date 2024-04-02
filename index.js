const form = document.getElementById("create-task-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Your code to handle form submission goes here
});

const form = document.getElementById("create-task-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("new-task-description");
  const taskText = input.value;

  if (taskText.trim() === "") {
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  const taskList = document.getElementById("tasks");
  taskList.appendChild(newTask);

  // Clear the input field after submission
  input.value = "";
});
