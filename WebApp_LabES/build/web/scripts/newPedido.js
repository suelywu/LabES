window.onload = function() {
  var spanParc = document.getElementById("span-parcelado");
  spanParc.classList.add("invisivel");
  
  var tipoPagamento = document.getElementById("sel-tipo-pagamento");
  tipoPagamento.onchange = function() {
    if (tipoPagamento.value === "parcelado") {
      ficarVisivel(spanParc);
    } else {
      ficarInvisivel(spanParc);
    }
  };
  
  var btnRegistrar = document.getElementById("btn-registrar");
  var btnCancelar = document.getElementById("btn-cancelar");
  var pathRegistrar = "";
  var pathCancelar = "";

  btnRegistrar.onclick = function() {
    window.history.back();
  };
  btnCancelar.onclick = function() {
    window.history.back();
  };

  
};

function ficarVisivel(element) {
  element.classList.remove("invisivel");
  element.classList.add("visivel");
}

function ficarInvisivel(element) {
  element.classList.remove("visivel");
  element.classList.add("invisivel");
}