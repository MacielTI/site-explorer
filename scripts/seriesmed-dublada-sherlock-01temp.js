$(document).ready(function(){
 //ep1
 $(".b").hide();
 $(".c").hide();
 $(".d").hide();
 $(".e").hide();
 //ep2
 $(".h").hide();
 $(".opu").hide();
 $(".wqe").hide();
 $(".poiu").hide();
 //
 $(".ab").click(function(){
   $(".b").show();
   $(".c").show();
   $(".d").show();
   $(".e").show();
 });
 $(".g").click(function(){
   $(".h").show();
   $(".opu").show();
   $(".wqe").show();
   $(".poiu").show();
 });
 $(".ab").click(function(){
   $(".h").hide();
   $(".opu").hide();
   $(".wqe").hide();
   $(".poiu").hide();
  });
  $(".g").click(function(){
    $(".b").hide();
    $(".c").hide();
    $(".d").hide();
    $(".e").hide();
 });
 //ep_03
 $(".supermercado").hide();
 $(".planta").hide();
 $(".cauda").hide();
 $(".planes").hide();
 $(".salgado").click(function(){
   $(".supermercado").show();
   $(".planta").show();
   $(".cauda").show();
   $(".planes").show();
 });
 $(".g").click(function(){
   $(".planta").hide();
   $(".cauda").hide();
   $(".planes").hide();
 });
 $(".salgado").click(function(){
   $(".h").hide();
   $(".opu").hide();
   $(".wqe").hide();
   $(".poiu").hide();
 });
 $(".ab").click(function(){
   $(".planta").hide();
   $(".cauda").hide();
   $(".planes").hide();
 });
 $(".salgado").click(function(){
   $(".b").hide();
   $(".c").hide();
   $(".d").hide();
   $(".e").hide();
 });
});
