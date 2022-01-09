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

// O export exporta um componente descrito no arquivo em que ele está sendo exportado
export default ConcludeButton;