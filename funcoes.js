let temaClaro = true;

function trocarTema() {
  if (temaClaro) {
    document.documentElement.style.setProperty('--cor-fundo', '#1f1f2e');
    document.documentElement.style.setProperty('--cor-primaria', '#5b8fb9');
    document.documentElement.style.setProperty('--cor-secundaria', '#3b668d');
    document.documentElement.style.setProperty('--cor-texto', '#ffffff');
  } else {
    document.documentElement.style.setProperty('--cor-fundo', '#e5d4ff');
    document.documentElement.style.setProperty('--cor-primaria', '#a259ff');
    document.documentElement.style.setProperty('--cor-secundaria', '#7f4acf');
    document.documentElement.style.setProperty('--cor-texto', '#000000');
  }
  temaClaro = !temaClaro;
}

function confirmarEnvio() {
  alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
  return true;
}

function rolarPara(id) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
}

function destacarBotoes() {
  const botoes = document.querySelectorAll(".botao");
  botoes.forEach(botao => {
    botao.addEventListener("mouseover", () => botao.style.transform = "scale(1.05)");
    botao.addEventListener("mouseout", () => botao.style.transform = "scale(1)");
  });
}

function mostrarMensagemInicial() {
  console.log("Portfólio carregado com sucesso!");
}

window.onload = () => {
  destacarBotoes();
  mostrarMensagemInicial();
}