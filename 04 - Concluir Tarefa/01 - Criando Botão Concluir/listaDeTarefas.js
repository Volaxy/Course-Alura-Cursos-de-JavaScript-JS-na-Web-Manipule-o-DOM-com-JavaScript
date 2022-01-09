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
    task.appendChild(ConcludeButton());

    tasks.appendChild(task);
    
    input.value = "";
}

newTask.addEventListener("click", createTask);

const ConcludeButton = () => {
    const concludeButton = document.createElement("button");
    concludeButton.classList.add("check-button");
    // A propriedade ".innerText" define o texto que estará inserido dentro do elemento
    concludeButton.innerText = "Concluir";

    concludeButton.addEventListener("click", () => {
        console.log("fadsjkfuyidgsfdsagkhyfr");
    });

    return concludeButton;
}