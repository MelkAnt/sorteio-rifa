// script.js
const participantes = [
  { numero: 1, nome: "Maria" },
  { numero: 2, nome: "João" },
  { numero: 3, nome: "Pedro" },
  { numero: 4, nome: "Ana" },
  { numero: 5, nome: "Lucas" },
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