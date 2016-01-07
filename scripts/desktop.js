$(document).ready(function(){
  //escondendo os elementos
  $(".fundo_da_home").hide();
  $(".seletor_janela_explorer_series").hide();
  $(".lista_de_series_dubladas").hide();
  //exibir e esconder o menu da home quando clicar no botão de home
  $(".botao_home").click(function(){
    $(".fundo_da_home").show(function(){
      $(document).on("click",function(){
        $(".fundo_da_home").hide();
      });
    });
  });
  //Exibir janela explorer series quando clicar em series na lista home
  $(".lista_da_home_series").click(function(){
    $(".seletor_janela_explorer_series").show();
  });
  //fechar janela explorer series quando clicar no X
  $(".botao_de_fechar_series").click(function(){
    $(".seletor_janela_explorer_series").hide();
  });
  //exibir lista de series quando clicar em dubladas
  $(".botao_series_dubladas").click(function(){
    $(".lista_de_series_dubladas").show();
    $(".lista_janela_series").hide();
  });
});
