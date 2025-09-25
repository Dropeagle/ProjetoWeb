// Mensagem inicial no console
console.log("Swift Dashboard carregado com sucesso!");

// ---- Progresso Dinâmico ----
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const pontosEl = document.getElementById("pontos");
  let pontos = 1250;
  const meta = 1500;

  // Atualiza a barra de progresso conforme os pontos
  function atualizarProgresso() {
    let porcentagem = Math.min((pontos / meta) * 100, 100);
    progressBar.style.width = `${porcentagem}%`;
    pontosEl.textContent = `${pontos} pontos`;

    if (pontos >= meta) {
      alert("🎉 Parabéns! Você atingiu a meta de pontos!");
    }
  }

  // Exemplo: aumentar pontos a cada 3s
  setInterval(() => {
    if (pontos < meta) {
      pontos += 50;
      atualizarProgresso();
    }
  }, 3000);

  atualizarProgresso();

  // ---- Ranking ----
  const rankingItems = document.querySelectorAll(".list-group-item");
  rankingItems.forEach(item => {
    if (item.textContent.includes("Roberto M")) {
      item.classList.add("active");
      item.style.fontWeight = "bold";
    }
  });

  // ---- Ícones interativos ----
  const btnNotificacoes = document.getElementById("btnNotificacoes");
  if (btnNotificacoes) {
    btnNotificacoes.addEventListener("click", () => {
      alert("🔔 Você não tem novas notificações!");
    });
  }

  const btnFinanceiro = document.querySelector(".bi-currency-dollar");
  if (btnFinanceiro) {
    btnFinanceiro.addEventListener("click", () => {
      alert("💲 Seu saldo de pontos será convertido em prêmios em breve!");
    });
  }
});
