window.onload = function() {
	var btnCancelar = document.getElementById('btn-cancelar');
	var btnRegistrar = document.getElementById('btn-registrar');
	var btnCalcMadeira = document.getElementById('btn-calcular-madeira');
	var btnListarAces = document.getElementById('btn-listar-acessorios');

	btnCancelar.onclick = function() {
		window.history.back();
	};
	btnRegistrar.onclick = function() {
		window.history.back();
	};
	btnCalcMadeira.onclick = function() {
		window.location.href = "calcMadeira.html";
	};
	btnListarAces.onclick = function() {
		window.location.href = "listAcessorios.html";
	};
};
