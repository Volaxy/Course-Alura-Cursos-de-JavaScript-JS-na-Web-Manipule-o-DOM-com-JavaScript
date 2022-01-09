const newTask =  document.querySelector("[data-form-button]");

// Create a new task in the list with the input value
const createTask = (event) => {
    // Get the input value
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    
    // Create a new "<li>"
    const tasks = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("task");

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    tasks.appendChild(task);
    
    input.value = "";
}

newTask.addEventListener("click", createTask);