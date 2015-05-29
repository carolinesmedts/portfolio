var main = function () {
  "use strict";
  $(".link1").on("click", function(){
  	$(".about").addClass("onzichtbaar");
  	$(".work").addClass("onzichtbaar");
  	$(".social").addClass("onzichtbaar");
  	$(".aboutme").removeClass("onzichtbaar");
  });

  $(".link2").on("click", function(){
  	$(".about").addClass("onzichtbaar");
  	$(".work").addClass("onzichtbaar");
  	$(".social").addClass("onzichtbaar");
  	$(".mywork").removeClass("onzichtbaar");
  }); 

   $(".link3").on("click", function(){
  	$(".about").addClass("onzichtbaar");
  	$(".work").addClass("onzichtbaar");
  	$(".social").addClass("onzichtbaar");
  	$(".socialmedia").removeClass("onzichtbaar");
  });

 };
 
 $(".back").on("click", function (){
 	$(".aboutme").addClass("onzichtbaar");
 	$(".mywork").addClass("onzichtbaar");
 	$(".socialmedia").addClass("onzichtbaar");
 	$(".about").removeClass("onzichtbaar");
 	$(".work").removeClass("onzichtbaar");
 	$(".social").removeClass("onzichtbaar");
 });
 
 	



$("document").ready(main);