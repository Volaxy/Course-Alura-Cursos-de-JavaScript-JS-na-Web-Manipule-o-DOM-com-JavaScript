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
    completedTask.remove();

    return deleteButton;
}

export default DeleteButton;