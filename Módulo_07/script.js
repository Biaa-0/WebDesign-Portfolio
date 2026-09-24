    // 1. Selecionar os elementos da página
    const botaoTema = document.getElementById("botao-tema");
    const botaoCuriosidade = document.getElementById("botao-curiosidade");
    const textoCuriosidade = document.getElementById("texto-curiosidade");

    // 2. Dados usados pela página (troque pelos textos que quiser)
    const curiosidades = [
      "Beatriz adora aprender coisas novas de tecnologia.",
      "Beatriz está aprendendo a deixar as páginas interativas com JavaScript.",
      "Beatriz gosta de ver o resultado do código aparecendo na tela.",
      "Beatriz já sabe criar layouts com Flexbox e Grid."
    ];
    let indiceAtual = 0;

    // 3. Funções: cada uma faz uma ação
    function alternarTema() {
      // toggle adiciona a classe se ela não existe e remove se já existe
      const estaEscuro = document.body.classList.toggle("tema-escuro");
      botaoTema.textContent = estaEscuro ? "Modo claro" : "Modo escuro";
    }

    function mostrarProximaCuriosidade() {
      indiceAtual = (indiceAtual + 1) % curiosidades.length;
      textoCuriosidade.textContent = curiosidades[indiceAtual];
    }

    // 4. Eventos: ligar cada botão à sua função
    botaoTema.addEventListener("click", alternarTema);
    botaoCuriosidade.addEventListener("click", mostrarProximaCuriosidade);