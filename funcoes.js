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
