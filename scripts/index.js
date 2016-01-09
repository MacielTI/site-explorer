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
  //opção primaria do 01episodio 01temporada de sherlock dublada
  $(".opcao_primaria_do_01episodio_01temporada_sherlock_dublado").hide();
  //janela de fundo do video
  $(".fundo_do_video").hide();
  //video da episodio 01 temporada 01 sherlock dublada
  $(".video_01episodio_01temporada_sherlock_dublada").hide();
  //button fechar video
  $(".button_fechar_video").hide();
  //janelas de opcoes secundarias de baixar 01episodio de 01 temporada de sherlock dublada
  $(".opcoes_secundarias_de_baixar_o_01episodio_01temporada_de_sherlock_dublada").hide();
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
  //exibir opções primarias do episódio 01 da teporada 01 de sherlock dublado
  $(".button_01episodio_01temporada_sherlock_dublado").click(function(){
    $(".opcao_primaria_do_01episodio_01temporada_sherlock_dublado").show(function(){
      //fechar opção primaria do 01 episodio 01temporada de sherlock dublado quando clicar fora dela ou ne
      $(document).on("click",function(){
        $(".opcao_primaria_do_01episodio_01temporada_sherlock_dublado").hide();
      });
    });
  });
  //exibir video quando clicar em assistir o 01episodio da 01 temporada de sherlock dublado
  $(".button_assistir_01episodio_01temporada_sherlock_dublada").click(function(){
    $(".fundo_do_video").show();
    $(".video_01episodio_01temporada_sherlock_dublada").show();
    $(".button_fechar_video").show();
  });
  //quando clicar em butão fechar video
  $(".button_fechar_video").click(function(){
    $(".fundo_do_video").hide();
    $(".video_01episodio_01temporada_sherlock_dublada").hide();
    $(".button_fechar_video").hide();
    $(".video_01episodio_01temporada_sherlock_dublada").trigger("pause")
  });
  //fechar janelas de opçoes secundarias de baixar 1 episodiio de 1temporada de sherlock dublado
  $(".fechar_janela_de_opcoes_secundarias_de_baixar_o_01episodio_01temporada_de_sherlock_dublada").click(function(){
    $(".opcoes_secundarias_de_baixar_o_01episodio_01temporada_de_sherlock_dublada").hide();
  });
  //fazer a janela de opçoes secundarias de baixar 01episodio 01temporada sherlock dublada aparecer quando clicar em baixar
  $(".button_baixar_01episodio_01temporada_sherlock_dublada").click(function(){
    $(".opcoes_secundarias_de_baixar_o_01episodio_01temporada_de_sherlock_dublada").show();
  });
});
