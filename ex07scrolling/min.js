$(document).ready(function() {


   
  $(window).scroll(function(){
      sc = $(window).scrollTop()


      if ( sc>2)
      {

        $('.header').css({'background-color':'#fff'})
      }

      if ( sc<2)
      {

        $('.header').css({'background-color':''})

      }

   



   });

     $(".gnb_wrap").delay(900).delay(0).animate({right:"0"},300,function(){
         $('.ham').addClass("active");
         ham = 1; 
     }); 

     $('.main_bg').animate({'opacity':'1'},700)
     $('.main_bg img').delay(300).animate({'margin-top':'0','opacity':'1'},700)
     $('.main_txt_box').addClass('main_txt_box_active')
     $('.main_img_box').delay(1200).animate({'margin-right':'0','opacity':'1'},1100)





     $('.main_pr_box').show()
       
     ham = 0
     $('.ham').click(function(){
       if( ham == 0 ){  
         ham = 1; 
         $(".gnb_wrap").delay(0).animate({right:"0"},300);
         $(".by_wrap").delay(100).animate({right:"320px"},600);

         $(this).addClass("active");
       }
       else if ( ham == 1 ){
         ham = 0;
         $(".gnb_wrap").delay(300).animate({right:"-320px"},300);
         $(".by_wrap").delay(0).animate({right:"-445px"},600);
         $(this).removeClass("active");
         $(this).removeClass("active2");
       }
     })



//	$('.sec02_bt').click(function(){
//		$('#brand_wrap').show()
//		$('.brand_close').show()		
//	})	
//	$('.brand_close').click(function(){
//		$('#brand_wrap').hide()
//		$('.brand_close').hide()		
//	})


$('#main_wrap').fullpage({
//		slidesNavigation: true,
 fadingEffect: true,
 verticalCentered: false,
 navigation: false,
 scrollOverflow: false,
 scrollHorizontally: true,
 scrollingSpeed: 1000,
 anchors: ['part1', 'part2', 'part3', 'part4', 'part5'],
 fitToSection: true,
 autoScrolling: true,


 'onLeave': function(origin, destination, direction){
   if(destination.index == 0){
     $('.main_bg').animate({'opacity':'1'},700)
     $('.main_bg img').delay(300).animate({'margin-top':'0','opacity':'1'},700)
     $('.main_txt_box').addClass('main_txt_box_active')
     $('.main_img_box').delay(1200).animate({'margin-right':'0','opacity':'1'},1100)
   }else {				
   }
   if(destination.index == 1){
     $('.section-info .section-info-text1').addClass("ani");
     $('.section-info').addClass('active');
   }
   if(destination.index == 2){
     $('.sec2-1_txt_box h2').delay(400).animate({'margin-top':'140px','opacity':'1'},700)
     $('.sec2-1_txt_box h4').delay(600).animate({'margin-top':'30px','opacity':'1'},700)
     $('.sec2-1_img_box').delay(700).animate({'margin-top':'0','opacity':'1'},700)
     $('.sec2-1_img_box2').delay(700).animate({'margin-top':'0','opacity':'1'},700)
     $('.sec2-1_txt_box2').delay(700).animate({'margin-top':'0','opacity':'1'},700)


   }else {
   
   }if(destination.index == 3){

           
   }
   if(destination.index == 4){
     $('.line').stop().animate({'height':'100%'},700)
     $('.sec3_tit').addClass('sec3_tit_acitve');
     $('.section_con01').delay(1000).delay(200).animate({'opacity':'1'},700)
     $('.section_con02').delay(1000).delay(800).animate({'opacity':'1'},700)
     $('.section_con03').delay(1000).delay(600).animate({'opacity':'1'},700)
     $('.section_con04').delay(1000).delay(1800).animate({'opacity':'1'},700)
     $('.section_con05').delay(1000).delay(1600).animate({'opacity':'1'},700)
     $('.section_con06').delay(1000).delay(1400).animate({'opacity':'1'},700)
     $('.section_con07').delay(1000).delay(1200).animate({'opacity':'1'},700)
     $('.section_con08').delay(1000).delay(1000).animate({'opacity':'1'},700)
     $('.section_con09').delay(1000).delay(400).animate({'opacity':'1'},700)

   }else {

   }
   
   if(destination.index == 5){
     $('.sec4_tit').addClass('sec4_tit_acitve');
     $('.section04_bg').delay(1000).animate({'opacity':'1'},700)
     $('.sec4_wrap').delay(1500).animate({'margin-top':'0','opacity':'1'},900)
   }else {

   }if(destination.index == 6){
       $('.right-content-scroll').animate({'opacity':'0'},700)
   }else {

   }



 },
 'afterLoad': function(origin, destination, direction){
   if(destination.index == 0){

   }else {				
     $('.main_bg').animate({'opacity':'0'},700)
     $('.main_bg img').delay(300).animate({'margin-top':'10px','opacity':'0'},700)
     $('.main_txt_box').removeClass('main_txt_box_active')
     $('.main_img_box').delay(1200).animate({'margin-right':'10px','opacity':'0'},1100)
     $('.sub_top_scroll').fadeOut(500)
   }
   if(destination.index == 1){

   }
   if(destination.index == 2){


   }else {
   
     $('.sec2-1_txt_box h2').delay(400).animate({'margin-top':'130px','opacity':'0'},700)
     $('.sec2-1_txt_box h4').delay(600).animate({'margin-top':'20px','opacity':'0'},700)
     $('.sec2-1_img_box').delay(700).animate({'margin-top':'10px','opacity':'0'},700)
     $('.sec2-1_img_box2').delay(700).animate({'margin-top':'10px','opacity':'0'},700)
     $('.sec2-1_txt_box2').delay(700).animate({'margin-top':'10px','opacity':'0'},700)

   }if(destination.index == 3){

           
   }
   if(destination.index == 4){


   }else {
     $('.line').stop().animate({'height':'0%'},700)
     $('.section_con').stop().animate({'opacity':'0'},700)
     $('.sec3_tit').removeClass('sec3_tit_acitve');
   }
   
   if(destination.index == 5){

   }else {

   }if(destination.index == 6){

   }else {
     $('.right-content-scroll').animate({'opacity':'1'},700)
   }



 }


});





//	var ratio = 315/560;
//	$(window).resize(function() {
//		$('#sect-moneo-video iframe').height($('iframe').width()*ratio);
//	}).resize();
//	$("#sect-moneo-video #ico").click(function() {
//		$("#sect-moneo-video").addClass('act');
//		$("#sect-moneo-video iframe")[0].src += "&autoplay=0";
//	});

$('#fp-nav').prepend('<span class="fp-nav-number fp-nav-number-current">01</span>')
$('#fp-nav').append('<span class="fp-nav-number fp-nav-number-total">05</span>')

var sectionLength = $('#fullpage .section:not(.fp-auto-height)').length
$('.fp-nav-number-total').text('0'+ sectionLength)

});
