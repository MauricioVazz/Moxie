document.addEventListener("DOMContentLoaded", function () {
  const userContainer = document.querySelector(".user-container");
  const dropdown = document.getElementById("dropdownContent");

  userContainer.addEventListener("click", function(event) {
    event.preventDefault();

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      const userName = localStorage.getItem("userName") || "Usuário";
      const userEmail = localStorage.getItem("userEmail") || "Email não encontrado";
      const lastOrder = localStorage.getItem("lastOrder") || "Nenhum pedido registrado";
      const favorites = localStorage.getItem("favorites") || "Nenhum item favoritado";
      const savedCards = localStorage.getItem("savedCards") || "";
      const address = localStorage.getItem("address") || "Endereço não cadastrado";

      // Protegendo o número do cartão (exibindo apenas os últimos 4 dígitos)
      const maskedCard = savedCards && savedCards.length >= 4 ? `**** **** **** ${savedCards.slice(-4)}` : "Nenhum cartão salvo";

      document.getElementById("userNameDisplay").innerText = `Nome: ${userName}`;
      document.getElementById("userEmailDisplay").innerText = `Email: ${userEmail}`;
      document.getElementById("lastOrderDisplay").innerText = `Último pedido: ${lastOrder}`;
      document.getElementById("favoritesDisplay").innerText = `Favoritos: ${favorites}`;
      document.getElementById("savedCardsDisplay").innerText = `Cartões Salvos: ${maskedCard}`;
      document.getElementById("addressDisplay").innerText = `Endereço: ${address}`;

      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    } else {
      window.location.href = "login.html";
    }
  });

  window.addEventListener("click", function (event) {
    if (!event.target.closest(".user-container")) {
      dropdown.style.display = "none";
    }
  });
});

function logout() {
  if (confirm("Deseja realmente sair da conta?")) {
    localStorage.removeItem("isLoggedIn"); // Remove status de login
    alert("Você saiu da conta!");
    window.location.href = "login.html"; // Redireciona para a página de login
  }
}

function deleteProfile() {
  if (confirm("Tem certeza que deseja deletar seu perfil? Essa ação não pode ser desfeita.")) {
    alert("Perfil deletado com sucesso!");
    localStorage.clear();
    window.location.href = "index.html";
  }
}
