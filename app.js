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
  const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
  const resultado = document.getElementById('resultado');
  resultado.textContent = `Número ${sorteado.numero}: ${sorteado.nome} 🎉`;
}
