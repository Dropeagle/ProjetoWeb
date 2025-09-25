// Escuta o envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o recarregamento da página

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Tentativa de login:", email, password); // debug no console

  // Validação simples com email e senha
  if (email === "admin@swift.com" && password === "1234") {
    alert("✅ Login bem-sucedido!");
    window.location.href = "home.html"; // redireciona para o dashboard
  } else {
    alert("❌ Email ou senha incorretos.");
  }
});
