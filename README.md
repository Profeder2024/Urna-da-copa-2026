# 🏆 Simulador de Urna Eletrônica - Copa do Mundo 2026

Este é um projeto interativo que simula uma **Urna Eletrônica** adaptada para uma votação escolar/educacional da seleção favorita para ganhar a **Copa do Mundo de 2026**. O projeto conta com a lista oficial de todas as 48 seleções participantes, exibição automatizada de bandeiras em alta resolução, além da emissão de relatórios oficiais baseados no sistema eleitoral brasileiro (**Zerésima** e **Boletim de Urna**).

---

## 🚀 Funcionalidades

* **48 Seleções Mapeadas:** Todos os países participantes da Copa de 2026 cadastrados com nome, continente e quantidade real de títulos mundiais.
* **Interface Fiel:** Visual baseado nas urnas eletrônicas da Justiça Eleitoral.
* **Bandeiras Oficiais:** Renderização automática de arquivos vetoriais (`.svg`) direto da Wikimedia.
* **Relatórios Oficiais de Urna:**
  * **Zerésima:** Relatório impresso antes do início da votação para comprovar que a urna tem 0 votos para todos os candidatos.
  * **Boletim de Urna (BU):** Relatório emitido no encerramento da votação, mostrando o total de votos de cada país, brancos, nulos e o somatório geral.
* **Acessibilidade por Teclado:** É possível votar usando o teclado físico do computador (Números, `Enter` para confirma e `Backspace` para corrige).
* **Proteção contra travamentos de Áudio:** Sistema resiliente que ignora erros caso o navegador bloqueie a reprodução automática de som antes da interação do usuário.

---

## 🗳️ Como Votar (Regras da Urna)

Como o sistema comporta 48 seleções, a votação exige **2 dígitos**:
1. **Países de 1 a 9:** Devem ser digitados com o zero na frente (Ex: `05` para Alemanha, `08` para Argentina, `13` para o Brasil).
2. **Voto em Branco:** Basta clicar no botão `BRANCO` e depois em `CONFIRMA`.
3. **Voto Nulo:** Digite qualquer número acima de 48 (Ex: `99`) e clique em `CONFIRMA`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da tela, teclado e seções de relatório.
* **CSS3:** Estilização moderna com Grid/Flexbox, design responsivo para dispositivos móveis e animações de tela piscante (efeito de foco numérico).
* **JavaScript (ES6):** Lógica de computação de votos, manipulação dinâmica do DOM e geração dos layouts de impressão das janelas pop-up.

---

## 📂 Estrutura do Projeto

```text
├── index.html      # Estrutura da urna, botões e elementos de áudio.
├── style.css       # Design visual da urna (gabinete, botões e responsividade).
├── script.js       # Banco de dados dos 48 países e lógica de negócios.
└── README.md       # Documentação do projeto (este arquivo).
