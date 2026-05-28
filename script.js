// Selecionamos o formulário e a div de resultado usando o DOM
const formulario = document.getElementById('formularioVaga');
const resultadoDiv = document.getElementById('resultado');

// Escutamos o momento em que o usuário clica no botão para enviar (submit)
formulario.addEventListener('submit', function(event) {
    
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Capturamos os valores digitados nos inputs e convertemos para os tipos certos
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
//comentário esquecido
    // Limpamos as cores de respostas anteriores
    resultadoDiv.className = "mensagem-resultado";

    // CRITÉRIO: Altura maior ou igual a 1.70 E (&&) idade maior ou igual a 18
    if (altura >= 1.70 && idade >= 18) {
        
        // Se passar nas duas regras, exibe sucesso
        resultadoDiv.textContent = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
        resultadoDiv.classList.add('sucesso');
        
    } else {
        
        // Se falhar em pelo menos uma das regras, exibe erro
        resultadoDiv.textContent = `Infelizmente você não é apto à vaga.`;
        resultadoDiv.classList.add('erro');
        
    }
});