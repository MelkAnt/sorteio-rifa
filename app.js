let participantes = [];

fetch('participantes.csv')
  .then(response => response.text())
  .then(csv => {
    const linhas = csv.split('\n').slice(1); // remove cabeçalho
    participantes = linhas
      .map(linha => linha.trim())
      .filter(linha => linha)
      .map(linha => {
        const [numero, nome] = linha.split(',');
        return {
          numero: parseInt(numero.trim()),
          nome: nome.trim()
        };
      });
    console.log("Participantes carregados:", participantes);
  })
  .catch(err => {
    console.error("Erro ao carregar participantes:", err);
  });

function sortear() {
  const resultado = document.getElementById('resultado');
  const spinner = document.getElementById('spinner');

  if (participantes.length === 0) {
    resultado.textContent = "Erro: participantes não carregados.";
    return;
  }

  resultado.textContent = "Sorteando...";
  spinner.style.display = "block";

  setTimeout(() => {
  const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
  const nomeExibido = sorteado.nome ? `${sorteado.nome} 🎉` : "Sem comprador";
  resultado.textContent = `Número ${sorteado.numero}: ${nomeExibido}`;
  spinner.style.display = "none";
}, 2000);

};