// Banco de dados oficial das 48 seleções da Copa 2026
const candidatos = {
  "01": { nome: "Canadá", continente: "América do Norte", titulos: "0" },
  "02": { nome: "Estados Unidos", continente: "América do Norte", titulos: "0" },
  "03": { nome: "México", continente: "América do Norte", titulos: "0" },
  "04": { nome: "África do Sul", continente: "África", titulos: "0" },
  "05": { nome: "Alemanha", continente: "Europa", titulos: "4 (Tetracampeão)" },
  "06": { nome: "Arábia Saudita", continente: "Ásia", titulos: "0" },
  "07": { nome: "Argélia", continente: "África", titulos: "0" },
  "08": { nome: "Argentina", continente: "América do Sul", titulos: "3 (Tricampeão)" },
  "09": { nome: "Austrália", continente: "Ásia/Oceania", titulos: "0" },
  "10": { nome: "Áustria", continente: "Europa", titulos: "0" },
  "11": { nome: "Bélgica", continente: "Europa", titulos: "0" },
  "12": { nome: "Bósnia e Herzegovina", continente: "Europa", titulos: "0" },
  "13": { nome: "Brasil", continente: "América do Sul", titulos: "5 (Pentacampeão)" },
  "14": { nome: "Cabo Verde", continente: "África", titulos: "0" },
  "15": { nome: "Catar", continente: "Ásia", titulos: "0" },
  "16": { nome: "Colômbia", continente: "América do Sul", titulos: "0" },
  "17": { nome: "Costa do Marfim", continente: "África", titulos: "0" },
  "18": { nome: "Coreia do Sul", continente: "Ásia", titulos: "0" },
  "19": { nome: "Croácia", continente: "Europa", titulos: "0" },
  "20": { nome: "Curaçao", continente: "América Central", titulos: "0" },
  "21": { nome: "Egito", continente: "África", titulos: "0" },
  "22": { nome: "Equador", continente: "América do Sul", titulos: "0" },
  "23": { nome: "Escócia", continente: "Europa", titulos: "0" },
  "24": { nome: "Espanha", continente: "Europa", titulos: "1 (Campeão)" },
  "25": { nome: "França", continente: "Europa", titulos: "2 (Bicampeão)" },
  "26": { nome: "Gana", continente: "África", titulos: "0" },
  "27": { nome: "Haiti", continente: "América Central", titulos: "0" },
  "28": { nome: "Holanda", continente: "Europa", titulos: "0" },
  "29": { nome: "Inglaterra", continente: "Europa", titulos: "1 (Campeão)" },
  "30": { nome: "Iraque", continente: "Ásia", titulos: "0" },
  "31": { nome: "Japão", continente: "Ásia", titulos: "0" },
  "32": { nome: "Jordânia", continente: "Ásia", titulos: "0" },
  "33": { nome: "Marrocos", continente: "África", titulos: "0" },
  "34": { nome: "Noruega", continente: "Europa", titulos: "0" },
  "35": { nome: "Nova Zelândia", continente: "Oceania", titulos: "0" },
  "36": { nome: "Panamá", continente: "América Central", titulos: "0" },
  "37": { nome: "Paraguai", continente: "América do Sul", titulos: "0" },
  "38": { nome: "Portugal", continente: "Europa", titulos: "0" },
  "39": { nome: "República Democrática do Congo", continente: "África", titulos: "0" },
  "40": { nome: "República Tcheca", continente: "Europa", titulos: "0" },
  "41": { nome: "Irã", continente: "Ásia", titulos: "0" },
  "42": { nome: "Senegal", continente: "África", titulos: "0" },
  "43": { nome: "Suécia", continente: "Europa", titulos: "0" },
  "44": { nome: "Suíça", continente: "Europa", titulos: "0" },
  "45": { nome: "Tunísia", continente: "África", titulos: "0" },
  "46": { nome: "Turquia", continente: "Europa", titulos: "0" },
  "47": { nome: "Uruguai", continente: "América do Sul", titulos: "2 (Bicampeão)" },
  "48": { nome: "Uzbequistão", continente: "Ásia", titulos: "0" }
};

let numeroDigitado = "";

const contagemVotos = {
  BRANCO: 0,
  NULO: 0
};

// Inicializa o mapa de contagem zerado
for (let key in candidatos) {
  contagemVotos[key] = 0;
}

// Inserção numérica (SEM SOM NENHUM)
function clicou(n) {
  if (numeroDigitado.length < 2) {
    numeroDigitado += n.toString();
    atualizarTela();
  }
}

// Atualização gráfica do visor (SEM SOM NENHUM)
function atualizarTela() {
  document.getElementById("n1").innerText = numeroDigitado[0] || "";
  document.getElementById("n2").innerText = numeroDigitado[1] || "";

  const candidato = candidatos[numeroDigitado];
  const foto = document.getElementById("foto");

  if (candidato) {
    document.getElementById("nome").innerText = candidato.nome;
    document.getElementById("time").innerText = candidato.continente;
    document.getElementById("posicao").innerText = candidato.titulos;

    foto.src = `./${numeroDigitado}.jpg`;
    foto.style.display = "block";
    document.getElementById("mensagem").innerText = "";
  } else {
    document.getElementById("nome").innerText = "";
    document.getElementById("time").innerText = "";
    document.getElementById("posicao").innerText = "";
    foto.style.display = "none";

    if (numeroDigitado.length === 2) {
      document.getElementById("mensagem").innerText = "VOTO NULO";
    }
  }
}

function branco() {
  numeroDigitado = "";
  document.getElementById("n1").innerText = "";
  document.getElementById("n2").innerText = "";
  document.getElementById("nome").innerText = "VOTO EM BRANCO";
  document.getElementById("time").innerText = "";
  document.getElementById("posicao").innerText = "";
  document.getElementById("foto").style.display = "none";
  document.getElementById("mensagem").innerText = "";
}

function corrige() {
  numeroDigitado = "";
  document.getElementById("n1").innerText = "";
  document.getElementById("n2").innerText = "";
  document.getElementById("nome").innerText = "";
  document.getElementById("time").innerText = "";
  document.getElementById("posicao").innerText = "";
  document.getElementById("mensagem").innerText = "";
  document.getElementById("foto").style.display = "none";
}

// Confirmação (O som é acionado UNICAMENTE aqui)
function confirma() {
  if (numeroDigitado.length === 1) {
    alert("Por favor, digite os 2 números correspondentes à seleção.");
    return;
  }

  // Toca o som real apenas no clique do confirma verde
  try {
    const somConfirma = new Audio("./confirma-urna.mp3");
    somConfirma.currentTime = 0;
    somConfirma.play().catch(err => {
      console.log("O navegador barrou a execução automática de áudio:", err);
    });
  } catch (erro) {
    console.log("Erro ao inicializar o ficheiro de áudio:", erro);
  }

  // Contabilização dos votos
  if (numeroDigitado === "") {
    contagemVotos.BRANCO++;
  } else if (candidatos[numeroDigitado]) {
    contagemVotos[numeroDigitado]++;
  } else {
    contagemVotos.NULO++;
  }

  document.getElementById("conteudo").innerHTML = `
    <div class="fim">FIM</div>
  `;

  setTimeout(() => {
    restaurarTela();
  }, 2500);
}

function restaurarTela() {
  numeroDigitado = "";
  document.getElementById("conteudo").innerHTML = `
    <div class="esquerda">
      <div class="cargo">SELEÇÃO CAMPEÃ</div>
      <div class="numeros">
        <div class="numero" id="n1"></div>
        <div class="numero" id="n2"></div>
      </div>
      <div class="info">
        <p><strong>País:</strong> <span id="nome"></span></p>
        <p><strong>Continente:</strong> <span id="time"></span></p>
        <p><strong>Mundiais:</strong> <span id="posicao"></span></p>
      </div>
      <div class="mensagem" id="mensagem"></div>
    </div>
    <div class="direita">
      <img id="foto" src="" alt="Bandeira da Seleção">
    </div>
  `;
}

function gerarProtocolo() {
  return Math.floor(Math.random() * 999999999);
}

function abrirRelatorio(texto) {
  const janela = window.open("", "", "width=500,height=700");
  if (!janela) {
    alert("Por favor, ative as permissões de Pop-up do seu navegador para visualizar este relatório!");
    return;
  }
  janela.document.write(`
    <html>
      <head>
        <title>Relatório da Urna Oficial</title>
        <style>
          body { font-family: monospace; padding: 20px; background: #fff; color: #000; }
          button { padding: 10px 20px; margin-top: 20px; cursor: pointer; font-size: 16px; font-weight: bold; }
          pre { font-size: 15px; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <pre>${texto}</pre>
        <button onclick="window.print()">IMPRIMIR DOCUMENTO</button>
      </body>
    </html>
  `);
}

function gerarZeresima() {
  let linhasCandidatos = "";
  for (let key in candidatos) {
    linhasCandidatos += `${candidatos[key].nome} (${key}): 0 votos\n`;
  }

  let texto = `
====================================
         ZERÉSIMA DA URNA
====================================
SIMULADOR COPA DO MUNDO 2026

Data: ${new Date().toLocaleDateString()}
Hora: ${new Date().toLocaleTimeString()}

PROTOCOLO EMISSÃO: ${gerarProtocolo()}
====================================

${linhasCandidatos}
Brancos: 0
Nulos: 0
====================================
COMPROVADO: URNA SEM VOTOS COMPUTADOS
====================================
`;
  abrirRelatorio(texto);
}

function gerarBoletim() {
  let total = 0;
  let linhasCandidatos = "";

  for (let key in candidatos) {
    if (contagemVotos[key] > 0) {
      linhasCandidatos += `${candidatos[key].nome} (${key}): ${contagemVotos[key]} voto(s)\n`;
    }
    total += contagemVotos[key];
  }
  
  total += contagemVotos.BRANCO + contagemVotos.NULO;

  let texto = `
====================================
         BOLETIM DE URNA
====================================
SIMULADOR COPA DO MUNDO 2026

Data: ${new Date().toLocaleDateString()}
Hora: ${new Date().toLocaleTimeString()}

PROTOCOLO EMISSÃO: ${gerarProtocolo()}
====================================
VOTOS NOMINAIS COMPUTADOS:

${linhasCandidatos || "Nenhum país recebeu votos.\n"}
------------------------------------
VOTOS EM BRANCO: ${contagemVotos.BRANCO}
VOTOS NULOS: ${contagemVotos.NULO}
====================================
TOTAL GERAL DE VOTOS DA URNA: ${total}
====================================
`;
  abrirRelatorio(texto);
}

window.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) && e.key !== " ") {
    clicou(e.key);
  }
  if (e.key === "Enter") {
    confirma();
  }
  if (e.key === "Backspace") {
    corrige();
  }
});
