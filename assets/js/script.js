// Expressão regular para validar e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Seleciona o formulário pelo id
const formulario = document.querySelector("#formulario");

// Garante que o formulário existe antes de adicionar o evento
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Campo Nome
    const campoNome = document.querySelector("#name");
    const errNome = document.querySelector("#errNome");

    if (campoNome.value.length < 3) {
      errNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
      campoNome.focus();
      return;
    } else {
      errNome.innerHTML = "";
    }

    // Campo Email
    const campoEmail = document.querySelector("#email");
    const errEmail = document.querySelector("#errEmail");

    if (!campoEmail.value.match(emailRegex)) {
      errEmail.innerHTML = "Digite um E-mail válido.";
      campoEmail.focus();
      return;
    } else {
      errEmail.innerHTML = "";
    }

    // Campo Assunto
    const campoSubject = document.querySelector("#subject");
    const errSubject = document.querySelector("#errSubject");

    if (campoSubject.value.length < 5) {
      errSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
      campoSubject.focus();
      return;
    } else {
      errSubject.innerHTML = "";
    }

    // Campo Mensagem
    const campoMessage = document.querySelector("#message");

    // Sucesso
    window.alert("Formulário enviado com sucesso!");

    // Limpa os campos
    campoNome.value = "";
    campoEmail.value = "";
    campoSubject.value = "";
    campoMessage.value = "";
  });
}
