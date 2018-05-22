
window.onload = function() {
  var content = document.getElementById("acessorio-preco-content");
  var btnAdicionar = document.getElementById("btn-adicionar");
  var btnVoltar = document.getElementById("btn-voltar");

  btnAdicionar.addEventListener("click", function adicionar() {
    var content = document.getElementById("acessorio-preco-content");
    var btnAdicionar = document.getElementById("btn-adicionar");
    var inputAces = document.createElement("input");
    var inputPreco = document.createElement("input");
    var br = document.createElement("br");
    inputAces.classList.add("inp-acessorio");
    inputPreco.classList.add("inp-preco");
    content.insertBefore(inputAces, btnAdicionar);
    content.insertBefore(inputPreco, btnAdicionar);
    content.insertBefore(br, btnAdicionar);
    content.insertBefore(br, btnAdicionar);
  }, false);
  btnVoltar.onclick = function() {
    window.history.back();
  }

}

