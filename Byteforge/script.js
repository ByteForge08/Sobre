document.addEventListener("DOMContentLoaded", () => {
  const abas = document.querySelectorAll(".abas-nav");
  const secoes = document.querySelectorAll(".secao-conteudo");

  abas.forEach((aba) => {
    aba.addEventListener("click", (event) => {
      event.preventDefault();

      // Atualiza o link ativo
      abas.forEach((item) => {
        item.classList.remove("link-ativo");
      });

      aba.classList.add("link-ativo");

      // Pega a seção ligada ao botão
      const secaoId = aba.getAttribute("data-aba");

      // Esconde todas as seções
      secoes.forEach((secao) => {
        secao.classList.remove("ativa");
      });

      // Mostra a seção clicada
      const secaoAlvo = document.getElementById(secaoId);

      if (secaoAlvo) {
        secaoAlvo.classList.add("ativa");
      }
    });
  });
});