// Para criar um escopo onde as funções e variáveis não podem ser acessadas pelo console do navegador, usamos o IIFE, onde a função será executada quando a página estiver renderizando.
(() => {
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
        task.appendChild(concludeButton());

        tasks.appendChild(task);
        
        input.value = "";
    }

    newTask.addEventListener("click", createTask);

    // Create a new button in the list of tasks
    const concludeButton = () => {
        const concludeButton = document.createElement("button");
        concludeButton.classList.add("check-button");
        concludeButton.innerText = "Concluir";

        concludeButton.addEventListener("click", concludeTask);

        return concludeButton;
    }

    // Conclude a task
    const concludeTask = (event) => {
        const concludeButton = event.target;

        const completedTask = concludeButton.parentElement;

        completedTask.classList.toggle("done");
    }
})();