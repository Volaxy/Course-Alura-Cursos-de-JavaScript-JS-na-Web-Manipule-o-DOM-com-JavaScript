const newTask =  document.querySelector("[data-form-button]");

// Sempre que o método relacionado ao evento é chamado, se colocarmos um parâmetro (neste caso chama-se "event") na chamada do evento, obteremos mais informações sobre o evento que aconteceu acessando o objeto que o navegador cria.
const createTask = (event) => {
    // Para prevenir o comportamento padrão de um elemento, usa-se a função ".preventDefault()".
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    console.log(value);
}

newTask.addEventListener("click", createTask);