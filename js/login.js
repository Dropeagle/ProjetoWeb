// Escuta o envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o recarregamento da página

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Tentativa de login:", username, password); // debug no console

  // Validação simples
  if (username === "admin" && password === "1234") {
    alert("✅ Login bem-sucedido!");
    window.location.href = "home.html"; // redireciona para o dashboard
  } else {
    alert("❌ Usuário ou senha incorretos.");
  }
});
