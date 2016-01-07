$(document).ready(function(){
  //esconde as divs
  $(".frente").hide();
  $(".ovelha").click(function(){
    $(".frente").show( function(){
      $(document).on("click",function(){
    	   $(".frente").hide();
      });
    });
  });
});
