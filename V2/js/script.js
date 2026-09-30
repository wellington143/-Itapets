document.addEventListener("DOMContentLoaded", function () {

  // COMPONENTE 1 - TOOLTIP
  const produtos = document.querySelectorAll(".produtos article a");

  produtos.forEach(function (produto) {
    produto.setAttribute("data-bs-toggle", "tooltip");
    produto.setAttribute("data-bs-title", "Clique para ver este produto");

    new bootstrap.Tooltip(produto);
  });


  // COMPONENTE 2 - POPOVER
  const infoItaPets = document.querySelector("#infoItaPets");

  new bootstrap.Popover(infoItaPets);


  // COMPONENTE 3 - COLLAPSE
  const artigos = document.querySelectorAll(".produtos article");

  artigos.forEach(function (artigo) {
    artigo.classList.add("collapse", "show");
  });

});