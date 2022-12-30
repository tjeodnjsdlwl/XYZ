$(function () {



/* header 스크롤바 */
gsap.to('.scrollbar .bg', {
  scrollTrigger:{
    trigger:'#wrap',
    // pin: true,  
    start:"top top",
    end:'bottom bottom',
    scrub:0,
    markers:true,
  },
  ease:'none',
  height:'100%'
})


  var swiper = new Swiper(".slide-prd", {
    slidesPerView: 2.2,
    slidesPerGroup : 2.2, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    // spaceBetween : 20, 

    navigation: {   // 버튼
      nextEl: ".next",
      prevEl: ".prev",
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup : 3,
        loopFillGroupWithBlank : true,
      }, 
    },
  });



  var swiper = new Swiper(".partner-top", { 
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
      breakpoints: {
        500: {
         slidesPerView: 2,
         slidesPerGroup : 2,
        }, 
      },  
      breakpoints: {
        700: {
         slidesPerView: 3,
         slidesPerGroup : 3,
        }, 
      },   
      breakpoints: {
        1000: {
         slidesPerView: 6.5,
         slidesPerGroup : 6.5,
        }, 
      },
  });


  $('.header .btn-menu').click(function(e){
    e.preventDefault();
    $('.header .side-nav').toggleClass('active');
    $('.header .btn-menu').toggleClass('active');

  })


   /*  비디오 버튼  */
   $('.sc-video .btn-play').click(function(e){
    e.preventDefault();

    if($(this).hasClass('on')){
      $(this).parent().siblings('video').get(0).pause();
      $(this).removeClass('on')
      
    }else{
      $(this).parent().siblings('video').get(0).play();
      $(this).addClass('on')
    }
  })




   const introMotion = gsap.to('.page-wrap .page', {
    ease:'none',
    width:0,
    paused:true,
    stagger:0.1,
  })


  /* 옆으로 이동하기  */
  $('.sc-video .btn-play').click(function(e){
    e.preventDefault();

    if($(this).hasClass('on')){
      introMotion.play();
    }else{
      introMotion.reverse();
    }



 

  })

 //스크롤을 내리면 이미지랑 선이랑 움직이기 // 
gsap.set('.sc-prd .img-wrap .prd',{ opacity:1, scale:1.3 })
const intro = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-prd',
    start:"top top",
    end:'+=100%',
    scrub:1,
    // markers:true,
  },
  ease:'none',
})
intro.addLabel('a')
.to('.sc-prd .img-wrap1 .prd',{ scale:1.1 },'a+=0.01')
.to('.sc-prd .img-wrap2 .prd',{ scale:1.1 },'a+=0.05')
.to('.sc-prd .img-wrap3 .prd',{ scale:1.1 },'a+=0.1')
.to('.sc-prd .img-wrap4 .prd',{ scale:1.1 },'a+=0.5')
.to('.sc-prd .img-wrap5 .prd',{ scale:1.1 },'a+=0.3')
.to('.sc-prd .img-wrap6 .prd',{ scale:1.1 },'a+=0.2')
.to('.sc-prd .img-wrap7 .prd',{ scale:1.1 },'a+=0.1')
.to('.sc-prd .text-wrap:before',{ opacity: 1, width:'100%'})


// gsap.set(".sc-prd .text-wrap:before", { opacity: 1, width:'100%' })
// // .text-wrap //
// var text = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc-prd", /*  화면기준 */
//     start: "top 50%", //트리거 기준 ,  윈도우 기준
//     end: "bottom top",
//     // markers:true, /* 표시자 */
//     //scrub:1, /* 문대는 효과 */
//   },

// })
// intro.addLabel('a')
// .to('.sc-prd .text-wrap:before',{ width:'100%'},'a+=0.01')

  


})// 지우면 ㄴㄴ 