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
        task.appendChild(ConcludeButton());
        task.appendChild(DeleteButton());

        tasks.appendChild(task);
        
        input.value = "";
    }

    newTask.addEventListener("click", createTask);

    // Create a new button in the list of tasks
    const ConcludeButton = () => {
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

    // Create a delete button
    const DeleteButton = () => {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Deletar";
        deleteButton.addEventListener("click", deleteTask)

        return deleteButton;
    }

    // Delete a task of the li
    const deleteTask = (event) => {
        const deleteButton = event.target;

        const completedTask = deleteButton.parentElement;
        // Deleta um elemento do DOM
        completedTask.remove();

        return deleteButton;
    }
})();