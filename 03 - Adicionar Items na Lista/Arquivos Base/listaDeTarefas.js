const newTask =  document.querySelector("[data-form-button]");

// Create a new task
const createTask = (event) => {
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    console.log(value);
}

newTask.addEventListener("click", createTask);