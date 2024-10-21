document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Adicionando evento ao envio do formulário
    loginForm.addEventListener('submit', function(event) {
        // Prevenindo envio do formulário para verificar os campos primeiro
        event.preventDefault();
        
        // Resetando as bordas
        emailInput.style.border = "none";
        passwordInput.style.border = "none";
        
        let valid = true;

        // Validação simples de e-mail e senha
        if (!validateEmail(emailInput.value)) {
            emailInput.style.border = "2px solid red";
            valid = false;
        }
        
        if (passwordInput.value.length < 6) {
            passwordInput.style.border = "2px solid red";
            valid = false;
        }

        if (valid) {
            // Simula o envio do formulário
            alert('Login realizado com sucesso!');
            loginForm.submit(); // Aqui você poderia enviar o formulário de verdade
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Função simples para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
