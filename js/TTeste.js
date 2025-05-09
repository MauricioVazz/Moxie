
    function login() {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      const savedEmail = localStorage.getItem('userEmail');
      const savedPassword = localStorage.getItem('userPassword');

      if (!email || !password) {
        alert('Preencha todos os campos.');
        return;
      }

      if (email === savedEmail && password === savedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'usuariologado.html'; //redireciona para a página inicial após o login
      } else {
        alert('Email ou senha incorretos.');
      }
    }
