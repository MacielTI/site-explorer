$(document).ready(function(){
  alert("Este site se encontra em contrução. Caso encontre algum erro, envie um Email para brunonascimentomaciel@hotmail.com");
  var usuario;
  usuario= prompt("Digite o nome de Usuário:")
  if(usuario=="paludin"){
    var senha = prompt("Digite a Senha:")
    if(senha == "senhadecuerola"){
      location.href="desktop.htm";
    }
  }
});
