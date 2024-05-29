const inputGeral = document.querySelector("#geral");
const inputSuporte = document.querySelector("#suporte");
const labelGeral = document.querySelector(".geral");
const labelSuporte = document.querySelector(".suporte");
const textArea = document.querySelector("#mensagem");
const checkbox = document.querySelector("#checkbox");
const checkboxErro = document.querySelector("#checkboxErro");
const mensagemErro = document.querySelector("#mensagemErro");
const nome = document.querySelector("#nome");
const nomeErro = document.querySelector("#nomeErro");
const email = document.querySelector("#email");
const emailErro = document.querySelector("#emailErro");
const emailInvalido = document.querySelector("#email-invalido");
const sobreNome = document.querySelector("#sobrenome");
const sobreNomeErro = document.querySelector("#sobrenomeErro");
const geral = document.querySelector("#geral");
const suporte = document.querySelector("#suporte");
const selecaoErro = document.querySelector("#selecaoErro");
const form = document.querySelector("form");
const mensagemSucesso = document.querySelector("#mensagemSucesso");

labelGeral.addEventListener("click", () => {
  labelGeral.style.backgroundColor = "#dff1e7";
  labelSuporte.style.backgroundColor = "#ffffff";
  labelGeral.style.borderColor = "#0c7d69";
});
labelSuporte.addEventListener("click", () => {
  labelSuporte.style.backgroundColor = "#dff1e7";
  labelGeral.style.backgroundColor = "#ffffff";
  labelGeral.style.borderColor = "#87a3a6";
  labelSuporte.style.borderColor = "#0c7d69";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nome.value === "") {
    nome.style.borderColor = "#d73c3c";
    nomeErro.style.display = "block";
  }

  if (sobreNome.value === "") {
    sobreNome.style.borderColor = "#d73c3c";
    sobreNomeErro.style.display = "block";
  }

  if (email.value === "") {
    email.style.borderColor = "#d73c3c";
    emailErro.style.display = "block";
  }

  if (textArea.value === "") {
    mensagemErro.style.display = "block";
    textArea.style.borderColor = "#d73c3c";
  } else {
    mensagemErro.style.display = "none";
    textArea.style.borderColor = "#87a3a6";
  }

  if (geral.checked || suporte.checked) {
    labelGeral.style.borderColor = "#87a3a6";
    labelSuporte.style.borderColor = "#87a3a6";
    labelGeral.style.backgroundColor = "#ffffff";
    labelSuporte.style.backgroundColor = "#ffffff";
    selecaoErro.style.display = "none";
  } else {
    selecaoErro.style.display = "block";
  }

  if (checkbox.checked) {
    checkboxErro.style.display = "none";
  } else {
    checkboxErro.style.display = "block";
  }

  if (
    (textArea.value &&
      checkbox.checked &&
      nome.value &&
      sobreNome.value &&
      email.value &&
      geral.checked) ||
    suporte.checked
  ) {
    geral.checked = geral.noChecked;
    suporte.checked = suporte.noChecked;
    checkbox.checked = checkbox.noChecked;
    textArea.value = "";
    nome.value = "";
    sobreNome.value = "";
    email.value = "";
    nome.style.borderColor = "#87a3a6";
    sobreNome.style.borderColor = "#87a3a6";
    email.style.borderColor = "#87a3a6";
    checkboxErro.style.display = "none";
    mensagemSucesso.style.display = "block";
  } else {
    mensagemSucesso.style.display = "none";
  }
});

nome.addEventListener("focus", () => {
  nome.style.borderColor = "#0c7d69";
  nomeErro.style.display = "none";
});

sobreNome.addEventListener("focus", () => {
  sobreNome.style.borderColor = "#0c7d69";
  sobreNomeErro.style.display = "none";
});
email.addEventListener("focus", () => {
  email.style.borderColor = "#0c7d69";
  emailErro.style.display = "none";
});
