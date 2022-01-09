const newTask =  document.querySelector("[data-form-button]");

/** 
 * Para registrar um novo evento para um elemento HTML, usa-se a função "addEventListener", que recebe como parâmetros:
 * 1º - O nome da função que o evento irá "escutar";
 * 2º - O que será executado quando a função for chamada;
 * 
 * Neste caso passa-se uma função anônima, que será "() => { CÓDIGO QUE SERÁ EXECUTADO }".
*/
newTask.addEventListener("click", () =>{
    console.log("I was Clicked")
});