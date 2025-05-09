function register() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const userName = document.getElementById('username').value.trim();
  const cardInfo = document.getElementById('card').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!email || !password || !userName || !cardInfo || !address) {
    alert('Preencha todos os campos.');
    return;
  }

  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  localStorage.setItem('userName', userName);
  localStorage.setItem('savedCards', cardInfo);
  localStorage.setItem('address', address);

  alert('Cadastro realizado com sucesso! Faça login.');
  window.location.href = 'login.html';
}


