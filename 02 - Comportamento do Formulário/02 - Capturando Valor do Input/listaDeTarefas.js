const newTask =  document.querySelector("[data-form-button]");

newTask.addEventListener("click", () =>{
    const input = document.querySelector("[data-form-input]");
    // Para acessar o valor de um "input", utiliza-se o ".value" para acessar esse valor.
    const value = input.value;

    console.log(value);
});