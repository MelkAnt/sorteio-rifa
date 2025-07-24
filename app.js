// script.js
const participantes = [
  { numero: 19, nome: "Tia Betinha" },
  { numero: 110, nome: "catatau" },
  { numero: 125, nome: "Luciana" },
  { numero: 153, nome: "Prof. Grazia" },
  { numero: 2, nome: "Marcela" },
  // Adicione quantos quiser
];

function sortear() {
  const resultado = document.getElementById('resultado');
  const spinner = document.getElementById('spinner');

  resultado.textContent = "Sorteando...";
  spinner.style.display = "block";

  setTimeout(() => {
    const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    resultado.textContent = `Número ${sorteado.numero}: ${sorteado.nome} 🎉`;
    spinner.style.display = "none";
  }, 2000); // 2 segundos
}