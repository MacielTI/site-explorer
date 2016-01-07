$(document).ready(function(){
  //esconde as divs
  $(".frente").hide();
  $(".quadrado").hide();
  $(".retardado").hide();
  $(".codigo").hide();
  $(".roupa").hide();
  $(".series").hide();
  $(".biscoito").hide();

  $(".ovelha").click(function(){
    $(".quadrado").show(function(){
      $(document).on("click",function(){
    	   $(".quadrado").hide();
      });
    });
    $(".frente").show( function(){
      $(document).on("click",function(){
    	   $(".frente").hide();
      });
    });
  });
  $(".moto").click(function(){
    $(".retardado").show();
    $(".codigo").show();
    $(".roupa").show();
    $(".series").show();
    $(".biscoito").show();
    $(".bosta").show();

  });
  $(".codigo").click(function(){
    $(".retardado").hide();
    $(".codigo").hide();
    $(".roupa").hide();
    $(".series").hide();
    $(".bosta").hide();
  });




  $(".roupa").click(function(){
    $(".retardado").hide(function(){
      $(".roupa").on("click",function(){
        $(".retardado").show();
        $(".codigo").show();
        $(".series").show();
        $(".bosta").show();
      });
    });
    $(".codigo").hide(function(){
      $(".roupa").on("click",function(){
        $(".retardado").show();
        $(".codigo").show();
        $(".series").show();
        $(".bosta").show();
      });
    });
    $(".series").hide(function(){
      $(".roupa").on("click",function(){
        $(".retardado").show();
        $(".codigo").show();
        $(".series").show();
        $(".bosta").show();
      });
    });
    $(".bosta").hide(function(){
      $(".roupa").on("click",function(){
        $(".retardado").show();
        $(".codigo").show();
        $(".series").show();
        $(".bosta").show();
      });
    });
  });
});
