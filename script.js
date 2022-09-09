function acessar() {
    var emailCompleto = document.getElementById("campo_email").value;
    var inicioEmail = emailCompleto.split("@")[0];
    alert("Seja bem-vindo " + inicioEmail + "!");
}