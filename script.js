document.querySelector("#form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário e o recarregamento da página

    // Captura os dados do formulário
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    // Cria a mensagem que será exibida
    const mensagemResposta = `
        <h3>Obrigado pela sua mensagem, ${nome}!</h3>
        <p>Seu e-mail: ${email}</p>
        <p>Sua mensagem:</p>
        <p>${mensagem}</p>
    `;

    // Exibe a resposta para o usuário
    const respostaDiv = document.querySelector("#resposta");
    respostaDiv.innerHTML = mensagemResposta;
    respostaDiv.style.display = "block"; // Torna a div visível
});
