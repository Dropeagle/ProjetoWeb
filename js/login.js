document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Tentativa de login:", email, password); 

  
  if (email === "admin@swift.com" && password === "1234") {
    alert("✅ Login bem-sucedido!");
    window.location.href = "home.html"; 
  } else {
    alert("❌ Email ou senha incorretos.");
  }
});
