const newTask =  document.querySelector("[data-form-button]");

// Create a new task in the list with the input value
const createTask = (event) => {
    // Get the input value
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    
    // Create a new "<li>"
    const tasks = document.querySelector("[data-list]");
    // O ".createElement()" cria um novo elemento HTML
    const task = document.createElement("li");
    // o ".classList.add()" adiciona uma nova classe CSS ao elemento
    task.classList.add("task");

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    // o "appendChild()" adiciona um nó filho dentro de um elemento
    tasks.appendChild(task);
    
    input.value = "";
}

newTask.addEventListener("click", createTask);