// Carrossel simples
const carrossel = document.getElementById("carrossel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

next.addEventListener("click", () => {
    if (index < carrossel.children.length - 1) index++;
    else index = 0;
    atualizarCarrossel();
});

prev.addEventListener("click", () => {
    if (index > 0) index--;
    else index = carrossel.children.length - 1;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const largura = carrossel.clientWidth;
    carrossel.style.transform = `translateX(${-index * largura}px)`;
}

// Formulário
const form = document.getElementById("formContato");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});
