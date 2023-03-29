//let btnAlert = document.getElementById('btnAlert');

//btnAlert.addEventListener('click', function() {
//  alert("Enviado com sucesso!");})

const botaoEnviar = document.querySelector("#btnAlert");
const imagem = document.querySelector("#imgSucess");

botaoEnviar.addEventListener("click", function() {
  // atualiza o src da imagem para a URL da imagem que você deseja exibir
  imagem.src = "./images/sucess.png"
  imagem.width = "400";
  imagem.height = "250";
})