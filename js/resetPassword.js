function resetPassword() {
    const email = prompt("Digite seu email para redefinir a senha:");

    if (!email) {
        alert("Você precisa informar um email!");
        return;
    }

    // Salvando o email digitado no localStorage
    localStorage.setItem("resetEmail", email);

    alert("Um email foi enviado para " + email + ". Por favor, verifique sua caixa de entrada.");
}
