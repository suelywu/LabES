function adicionar() {
  var divMedidas = document.getElementById("div-medidas");
  var btnAdicionar = document.getElementById("btn-adicionar");
  var inputComp = document.createElement("input");
  var inputLarg = document.createElement("input");
  var br = document.createElement("br");


  inputComp.classList.add("input-comp");
  inputLarg.classList.add("input-larg");
  divMedidas.insertBefore(inputComp, btnAdicionar);
  divMedidas.insertBefore(inputLarg, btnAdicionar);
  divMedidas.insertBefore(br, btnAdicionar);
  divMedidas.insertBefore(br, btnAdicionar);
}

function ficarInvisivel(element) {
  element.classList.remove("visivel");
  element.classList.add("invisivel");
}

function ficarVisivel(element) {
  element.classList.remove("invisivel");
  element.classList.add("visivel");
}

window.onload = function() {
  var divResultado = document.getElementById("div-resultado");
  var divMedidas = document.getElementById("div-medidas");
  var btnAdicionar = document.getElementById("btn-adicionar");
  var btnOk = document.getElementById("btn-ok");
  var btnAlterarMedidas = document.getElementById("btn-alterar-medidas");
  var btnVoltarParaOrcamento = document.getElementById("btn-voltar-orcamento");


  divResultado.classList.add("invisivel");
  divMedidas.classList.add("visivel");
  
  btnAdicionar.addEventListener("click", adicionar, false);
  
  btnOk.addEventListener("click", function() {
    ficarInvisivel(divMedidas);
    ficarVisivel(divResultado);
  }, false);
  
  btnAlterarMedidas.addEventListener("click", function() {
    ficarInvisivel(divResultado);
    ficarVisivel(divMedidas);
  }, false);

  btnVoltarParaOrcamento.addEventListener("click", function() {
    window.history.back();
  }, false);
}