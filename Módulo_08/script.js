// ==========================================================
// script.js - DOM da página da Beatriz
//
// Organização do arquivo:
//   1. Selecionar elementos
//   2. Dados da página
//   3. Funções (cada uma faz uma ação)
//   4. Eventos (ligam os elementos às funções)
//   5. Início (o que roda quando a página abre)
// ==========================================================


// ---------- 1. Selecionar elementos ----------
// getElementById: busca um elemento pelo id
const botaoTema = document.getElementById("botao-tema");
const botaoCuriosidade = document.getElementById("botao-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");

// querySelector: busca o primeiro elemento que combina com um seletor CSS
const listaHabilidades = document.querySelector("#lista-habilidades");
const campoHabilidade = document.querySelector("#campo-habilidade");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const mensagemHabilidade = document.querySelector("#mensagem-habilidade");

// querySelectorAll: busca todos os elementos que combinam (devolve uma lista)
const linksMenu = document.querySelectorAll(".menu-link");


// ---------- 2. Dados da página ----------
const curiosidades = [
  "Beatriz adora aprender coisas novas de tecnologia.",
  "Beatriz está aprendendo a deixar as páginas interativas com JavaScript.",
  "Beatriz gosta de ver o resultado do código aparecendo na tela.",
  "Beatriz já sabe criar layouts com Flexbox e Grid."
];
let indiceCuriosidade = 0;

const habilidadesIniciais = ["HTML", "CSS", "JavaScript"];


// ---------- 3. Funções ----------

// Função reutilizável: troca o texto de QUALQUER elemento.
// Usamos ela em vários lugares em vez de repetir o mesmo código.
function alterarTexto(elemento, texto) {
  elemento.textContent = texto;
}

// Manipular ESTILO com classe: o CSS cuida da aparência.
function alternarTema() {
  // toggle adiciona a classe se ela não existe e remove se já existe
  const estaEscuro = document.body.classList.toggle("tema-escuro");
  alterarTexto(botaoTema, estaEscuro ? "Modo claro" : "Modo escuro");
}

// Manipular TEXTO: mostra a próxima frase da lista
function mostrarProximaCuriosidade() {
  // o resto da divisão faz o índice voltar para 0 no fim da lista
  indiceCuriosidade = (indiceCuriosidade + 1) % curiosidades.length;
  alterarTexto(textoCuriosidade, curiosidades[indiceCuriosidade]);
}

// Marca no menu o link que foi clicado.
// "evento.currentTarget" é o elemento que recebeu o clique.
function marcarLinkAtivo(evento) {
  linksMenu.forEach(function (link) {
    link.classList.remove("ativo");
  });
  evento.currentTarget.classList.add("ativo");
}

// Manipular ESTRUTURA: cria um <li> novo com o nome e um botão de remover.
// Ela só cria o item e devolve; quem decide onde colocar é outra função.
function criarItemHabilidade(nome) {
  const item = document.createElement("li");
  const texto = document.createElement("span");
  const botaoRemover = document.createElement("button");

  texto.textContent = nome;

  botaoRemover.type = "button";
  botaoRemover.className = "remover";
  botaoRemover.textContent = "×";
  botaoRemover.setAttribute("aria-label", "Remover " + nome);
  botaoRemover.addEventListener("click", function () {
    item.remove(); // tira o item da página
  });

  item.append(texto, botaoRemover);
  return item;
}

// Lê o campo, valida e coloca a habilidade na lista
function adicionarHabilidade() {
  const nome = campoHabilidade.value.trim(); // trim tira espaços das pontas

  if (nome === "") {
    // Manipular ESTILO direto no elemento: borda vermelha no campo
    campoHabilidade.style.borderColor = "#d64545";
    alterarTexto(mensagemHabilidade, "Digite o nome de uma habilidade.");
    campoHabilidade.focus();
    return; // para a função aqui
  }

  listaHabilidades.appendChild(criarItemHabilidade(nome));

  campoHabilidade.value = "";
  campoHabilidade.style.borderColor = ""; // volta ao estilo do CSS
  alterarTexto(mensagemHabilidade, nome + " adicionada!");
  campoHabilidade.focus();
}


// ---------- 4. Eventos ----------
botaoTema.addEventListener("click", alternarTema);
botaoCuriosidade.addEventListener("click", mostrarProximaCuriosidade);
botaoAdicionar.addEventListener("click", adicionarHabilidade);

// Enter no campo também adiciona
campoHabilidade.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarHabilidade();
  }
});

// Um evento para cada link do menu
linksMenu.forEach(function (link) {
  link.addEventListener("click", marcarLinkAtivo);
});


// ---------- 5. Início ----------
// Monta a lista inicial de habilidades usando a mesma função de criar item
habilidadesIniciais.forEach(function (nome) {
  listaHabilidades.appendChild(criarItemHabilidade(nome));
});