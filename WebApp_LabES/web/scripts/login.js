function login() {
  usuario = document.getElementById('usuario');
  senha = document.getElementById('senha');
  if (usuario.value == 'adm' && senha.value == 'senha') {
    pathHome = "home.html";
    window.location.href = pathHome;
  } else {
    alert('Usuário e/ou senha incorreto!');
  }
}

window.onload = function() {
	botao = document.getElementById('login-button');
	botao.addEventListener('click', login, false);
}
