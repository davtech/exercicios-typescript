const controller = new negociacaoController();

document.querySelector(".form")
  .addEventListener("submit", controller.adiciona.bind(controller));