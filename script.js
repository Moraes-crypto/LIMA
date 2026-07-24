const botao = document.querySelector("#botao");
const paragrafo = document.querySelector("#paragrafo");

botao.addEventListener("click", () => {
    document.body.classList.toggle("fundo-preto");
    paragrafo.textContent = "Vai Corinthians";
});