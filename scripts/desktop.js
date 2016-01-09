$(document).ready(function(){
  //escondendo os elementos
  $(".fundo_da_home").hide();
  //janela explorer
  $(".janela_explorer").hide();
  $(".titulo_da_janela_series").hide();
  $(".lista_janela_series").hide();
  $(".botao_de_fechar_series").hide();
  //listas de series dubladas
  $(".sherlock_serie_button").hide();
  //lista de temporadas da serie sherlock dublada
  $(".lista_de_temporadas_sherlock").hide();
  //lista de episodios sherlock 1 temorada dublada
  $(".lista_de_episodios_sherlock_01temporada").hide();

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
    //janela explorer
    $(".janela_explorer").show();
    $(".titulo_da_janela_series").show();
    $(".lista_janela_series").show();
    $(".botao_de_fechar_series").show();
  });
  //fechar janela explorer series quando clicar no X
  $(".botao_de_fechar_series").click(function(){
    //janela explorer
    $(".janela_explorer").hide();
    $(".titulo_da_janela_series").hide();
    $(".lista_janela_series").hide();
    $(".botao_de_fechar_series").hide();
    //listas de series dubladas
    $(".sherlock_serie_button").hide();
    //lista de temporadas sherlock dublada
    $(".lista_de_temporadas_sherlock").hide();
    //lista de episódios sherlock 1 temporada
    $(".lista_de_episodios_sherlock_01temporada").hide();
  });
  //exibir lista de series quando clicar em dubladas
  $(".botao_series_dubladas").click(function(){
    $(".sherlock_serie_button").show();
    $(".lista_janela_series").hide();
  });
  //exibir listas de temporadas quando clicar em sherlock
  $(".sherlock_serie_button").click(function(){
    $(".sherlock_serie_button").hide();
    $(".lista_de_temporadas_sherlock").show();
  });
  //exibir lista de episodios da primeira temporada quando clicar em 1 temporada (esconder lista de temporadas)
  $(".button_01temporada_sherlock").click(function(){
    $(".lista_de_episodios_sherlock_01temporada").show();
    $(".lista_de_temporadas_sherlock").hide();
  });
});
