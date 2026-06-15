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

// Inicializa a contagem zerada para todos os países
for (let key in candidatos) {
  contagemVotos[key] = 0;
}

// Configuração do arquivo de som local armazenado na sua pasta
const sons = {
  somConfirma: "confirma-urna.mp3"
};

// Reprodutor dinâmico inteligente (executa apenas no Confirma)
function tocarSom(tipo) {
  try {
    const audioUrl = sons[tipo];
    if (audioUrl) {
      const somDinamico = new Audio(audioUrl);
      somDinamico.currentTime = 0;
      somDinamico.play().catch(err => {
        console.log("O navegador bloqueou a execução de áudio. Interaja com a página antes.");
      });
    }
  } catch (erro) {
    console.log("Erro ao processar o arquivo de áudio:", erro);
  }
}

// Teclas Numéricas (Silenciosas)
function clicou(n) {
  if (numeroDigitado.length < 2) {
    numeroDigitado += n.toString();
    atualizarTela();
  }
}

// Atualização e renderização do monitor da urna eletrônica
function atualizarTela() {
  document.getElementById("n1").innerText = numeroDigitado[0] || "";
  document.getElementById("n2").innerText = numeroDigitado[1] || "";

  const candidato = candidatos[numeroDigitado];
  const foto = document.getElementById("foto");
  const containerFoto = document.querySelector(".direita"); // Elemento da moldura

  if (candidato) {
    document.getElementById("nome").innerText = candidato.nome;
    document.getElementById("time").innerText = candidato.continente;
    document.getElementById("posicao").innerText = candidato.titulos;

    // Busca o arquivo de imagem JPG correspondente na pasta local (Ex: 13.jpg)
    foto.src = `${numeroDigitado}.jpg`;
    foto.style.display = "block";
    
    // ATIVA A MOLDURA: Adiciona a classe que torna as bordas visíveis no CSS
    if (containerFoto) containerFoto.classList.add("visivel");
    
    document.getElementById("mensagem").innerText = "";
  } else {
    document.getElementById("nome").innerText = "";
    document.getElementById("time").innerText = "";
    document.getElementById("posicao").innerText = "";
    foto.style.display = "none";
    
    // DESATIVA A MOLDURA: Remove a classe fazendo a borda desaparecer
    if (containerFoto) containerFoto.classList.remove("visivel");

    if (numeroDigitado.length === 2) {
      document.getElementById("mensagem").innerText = "VOTO NULO";
    }
  }
}

// Botão de voto em Branco (Silencioso)
function branco() {
  numeroDigitated = "";
  document.getElementById("n1").innerText = "";
  document.getElementById("n2").innerText = "";
  document.getElementById("nome").innerText = "VOTO EM BRANCO";
  document.getElementById("time").innerText = "";
  document.getElementById("posicao").innerText = "";
  document.getElementById("foto").style.display = "none";
  
  // Garante que a moldura suma no voto em branco
  const containerFoto = document.querySelector(".direita");
  if (containerFoto) containerFoto.classList.remove("visivel");
  
  document.getElementById("mensagem").innerText = "";
}

// Botão de corrigir a tela (Silencioso)
function corrige() {
  numeroDigitado = "";
  document.getElementById("n1").innerText = "";
  document.getElementById("n2").innerText = "";
  document.getElementById("nome").innerText = "";
  document.getElementById("time").innerText = "";
  document.getElementById("posicao").innerText = "";
  document.getElementById("mensagem").innerText = "";
  document.getElementById("foto").style.display = "none";
  
  // Garante que a moldura suma ao corrigir
  const containerFoto = document.querySelector(".direita");
  if (containerFoto) containerFoto.classList.remove("visivel");
}

// Botão de confirmação (Gatilha o arquivo de áudio local mp3)
function confirma() {
  if (numeroDigitado.length === 1) {
    alert("Por favor, preencha os 2 dígitos antes de confirmar.");
    return;
  }

  // Aciona o áudio local "confirma-urna.mp3"
  tocarSom("somConfirma"); 

  if (numeroDigitado === "") {
    contagemVotos.BRANCO++;
  } else if (candidatos[numeroDigitado]) {
    contagemVotos[numeroDigitado]++;
  } else {
    contagemVotos.NULO++;
  }

  // Renderiza a tela de FIM da votação
  document.getElementById("conteudo").innerHTML = `
    <div class="fim">FIM</div>
  `;

  // Aguarda 2.5 segundos e limpa o painel para o próximo eleitor
  setTimeout(() => {
    restaurarTela();
  }, 2500);
}

// Reconstrói a interface da tela original após o término da votação
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
  
  // Força a nova moldura injetada a nascer oculta/sem a classe visivel
  const containerFoto = document.querySelector(".direita");
  if (containerFoto) containerFoto.classList.remove("visivel");
}

// Cria códigos numéricos aleatórios para os relatórios de impressão
function gerarProtocolo() {
  return Math.floor(Math.random() * 999999999);
}

// Processador de abertura dos relatórios impressos via Pop-up integrado
function abrirRelatorio(texto) {
  const janela = window.open("", "", "width=500,height=700");
  if (!janela) {
    alert("Por favor, autorize a exibição de Pop-ups neste navegador para emitir o documento!");
    return;
  }
  janela.document.write(`
    <html>
      <head>
        <title>Emissão de Relatório de Urna</title>
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

// Emissão do relatório de Zerésima (Antes do início do pleito)
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

// Emissão do Boletim de Urna (Apuração dos resultados salvos)
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

// Sincronização e escuta ativa do teclado físico do computador
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
