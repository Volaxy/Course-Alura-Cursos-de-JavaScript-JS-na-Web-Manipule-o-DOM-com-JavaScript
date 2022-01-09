const newTask =  document.querySelector("[data-form-button]");

// Create a new task in the list with the input value
const createTask = (event) => {
    // Get the input value
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    console.log(value);
    
    // Create a new "<li>"
    const task = document.querySelector("[data-task]");
    const content = `<p class="content">${value}</p>`;
    
    // O "innerHTML" serve para acessar o conteúdo de um elemento
    task.innerHTML = content;
    
    input.value = "";
}

newTask.addEventListener("click", createTask);