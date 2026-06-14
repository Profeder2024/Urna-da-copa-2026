const candidatos = {
  "01": { nome: "Canadá", continente: "América do Norte", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada.svg" },
  "02": { nome: "Estados Unidos", continente: "América do Norte", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
  "03": { nome: "México", continente: "América do Norte", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
  "04": { nome: "África do Sul", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
  "05": { nome: "Alemanha", continente: "Europa", titulos: "4 (Tetracampeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
  "06": { nome: "Arábia Saudita", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
  "07": { nome: "Argélia", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
  "08": { nome: "Argentina", continente: "América do Sul", titulos: "3 (Tricampeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
  "09": { nome: "Austrália", continente: "Ásia/Oceania", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia.svg" },
  "10": { nome: "Áustria", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
  "11": { nome: "Bélgica", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
  "12": { nome: "Bósnia e Herzegovina", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
  "13": { nome: "Brasil", continente: "América do Sul", titulos: "5 (Pentacampeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
  "14": { nome: "Cabo Verde", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cabo_Verde.svg" },
  "15": { nome: "Catar", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
  "16": { nome: "Colômbia", continente: "América do Sul", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
  "17": { nome: "Costa do Marfim", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Cote_d%27Ivoire.svg" },
  "18": { nome: "Coreia do Sul", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
  "19": { nome: "Croácia", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
  "20": { nome: "Curaçao", continente: "América Central", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Curacao.svg" },
  "21": { nome: "Egito", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
  "22": { nome: "Equador", continente: "América do Sul", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
  "23": { nome: "Escócia", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg" },
  "24": { nome: "Espanha", continente: "Europa", titulos: "1 (Campeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
  "25": { nome: "França", continente: "Europa", titulos: "2 (Bicampeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
  "26": { nome: "Gana", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
  "27": { nome: "Haiti", continente: "América Central", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
  "28": { nome: "Holanda", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
  "29": { nome: "Inglaterra", continente: "Europa", titulos: "1 (Campeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg" },
  "30": { nome: "Iraque", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
  "31": { nome: "Japão", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" },
  "32": { nome: "Jordânia", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
  "33": { nome: "Marrocos", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
  "34": { nome: "Noruega", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
  "35": { nome: "Nova Zelândia", continente: "Oceania", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
  "36": { nome: "Panamá", continente: "América Central", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
  "37": { nome: "Paraguai", continente: "América do Sul", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
  "38": { nome: "Portugal", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
  "39": { nome: "República Democrática do Congo", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
  "40": { nome: "República Tcheca", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
  "41": { nome: "Irã", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
  "42": { nome: "Senegal", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
  "43": { nome: "Suécia", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" },
  "44": { nome: "Suíça", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" },
  "45": { nome: "Tunísia", continente: "África", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },
  "46": { nome: "Turquia", continente: "Europa", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
  "47": { nome: "Uruguai", continente: "América do Sul", titulos: "2 (Bicampeão)", foto: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_Uruguay.svg" },
  "48": { nome: "Uzbequistão", continente: "Ásia", titulos: "0", foto: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" }
};

let numeroDigitado = "";

const contagemVotos = {
  BRANCO: 0,
  NULO: 0
};
for (let key in candidatos) {
  contagemVotos[key] = 0;
}

function tocarSom(tipo) {
  const audio = document.getElementById(tipo);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Áudio aguardando interação inicial do usuário."));
  }
}

function clicou(n) {
  if (numeroDigitado.length < 2) {
    numeroDigitado += n.toString();
    atualizarTela();
    tocarSom("somTecla");
  }
}

function atualizarTela() {
  document.getElementById("n1").innerText = numeroDigitado[0] || "";
  document.getElementById("n2").innerText = numeroDigitado[1] || "";

  const candidato = candidatos[numeroDigitado];

  if (candidato) {
    document.getElementById("nome").innerText = candidato.nome;
    document.getElementById("time").innerText = candidato.continente;
    document.getElementById("posicao").innerText = candidato.titulos;

    const foto = document.getElementById("foto");
    foto.src = candidato.foto;
    foto.style.display = "block";
    document.getElementById("mensagem").innerText = "";
  } else {
    document.getElementById("nome").innerText = "";
    document.getElementById("time").innerText = "";
    document.getElementById("posicao").innerText = "";
    document.getElementById("foto").style.display = "none";

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
  tocarSom("somTecla");
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
  tocarSom("somTecla");
}

function confirma() {
  if (numeroDigitado.length === 1) {
    alert("Digite os 2 números");
    return;
  }

  tocarSom("somConfirma");

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
    alert("Por favor, ative a permissão para janelas Pop-up neste site para exibir o relatório.");
    return;
  }
  janela.document.write(`
    <html>
      <head>
        <title>Relatório da Urna</title>
        <style>
          body { font-family: monospace; padding: 20px; background: #fff; }
          button { padding: 10px 20px; margin-top: 20px; cursor: pointer; font-size: 16px; }
          pre { font-size: 15px; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <pre>${texto}</pre>
        <button onclick="window.print()">IMPRIMIR</button>
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

PROTOCOLO: ${gerarProtocolo()}
====================================

${linhasCandidatos}
Brancos: 0
Nulos: 0
====================================
URNA ZERADA COM SUCESSO
====================================
`;
  abrirRelatorio(texto);
}

function gerarBoletim() {
  let total = 0;
  let linhasCandidatos = "";

  for (let key in candidatos) {
    linhasCandidatos += `${candidatos[key].nome} (${key}):\n${contagemVotos[key]} votos\n\n`;
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

PROTOCOLO: ${gerarProtocolo()}
====================================

${linhasCandidatos}
Brancos:
${contagemVotos.BRANCO}

Nulos:
${contagemVotos.NULO}
====================================
TOTAL DE VOTOS:
${total}
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
