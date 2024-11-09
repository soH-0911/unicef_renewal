// 마우스 스크롤 애니메이션 스타트 함수
// AOS.init();

$(function(){
/****** 헤더 ******/
    // 스크롤시 헤더 색상 fill
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('.header').addClass('show');
        }else{
            $('.header').removeClass('show');
        }
    });
    
    // 호버시 LNB 메뉴 나타나기
    $('.gnb .dep1-menu').mouseover(function(){
        $('.header-gnb-sub').show();
        $('.header').addClass('show');
        // 1dep 호버시 해당 2dep 보이기
        let dep1Idx = $(this).index();
        // console.log($('.dep1-menu'));
        $('.gnb-sub-wrap .dep2-wrap').hide()
        $('.gnb-sub-wrap .dep2-wrap').eq(dep1Idx).show() // 인덱스 번호가 같은것끼리 show처리
        $('.gnb .dep1-menu').removeClass('on');
        $(this).addClass('on');
    });
    $('.header').mouseleave(function(){
        $('.header-gnb-sub').hide();
        $('.gnb .dep1-menu').removeClass('on');
    });

    // $('.gnb .dep1-menu').mouseover(function(){
    //     $('header').css({'background-color': 'white', 'border-bottom':'1px solid var(--color-gray100)'});
    //     $('.header-wrap').css({'border-bottom':'1px solid var(--color-gray100)'});
    //     $('.util-menu, .header-left').css({'color':'var(--color-gray800)'});
    //     $('.header-gnb-sub').css({'display':'block'});

    //     let dep1Idx = $(this).index();
    //     // console.log($('.dep1-menu'));
    //     $('.gnb-sub-wrap .dep2-wrap').hide()
    //     $('.gnb-sub-wrap .dep2-wrap').eq(dep1Idx).show() // 인덱스 번호가 같은것끼리 show처리
    //     $('.gnb .dep1-menu').removeClass('on');
    //     $(this).addClass('on');

    // });
    // 마우스 메뉴에서 나갈때 gnb-sub 안보이게
    // $('.header').mouseleave(function(){
    //     $('.header-gnb-sub').css({'display':'none'});
    //     // $('header').css({'background': 'none','border-bottom':'0'});
    //     $('.header-wrap').css({'border':'0'});
    //     $('.util-menu, .header-left').css({'color':'#fff'});
    //     $('.dep1-menu').removeClass('on');
    // });

    // 헤더 배너 스와이퍼
    var swiper = new Swiper(".header-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".header-btn-next",
          prevEl: ".header-btn-prev",
        },    
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        // }
      });

    
    
/***** 모바일 메뉴 *****/
    // 햄버거 버튼 클릭시 보이기
    $('.ham-menu').click(function(){
        $('.mo-menu-wrap').toggleClass('show');
        $('body').toggleClass('fixed');
    });

    // 모바일 1dep 클릭시 해당 2dep 보이기
    $('.mo-dep1-menu').click(function(){
        $('.mo-dep1-menu').removeClass('on');
        $(this).addClass('on');
        let mo_dep1Idx = $(this).index();
        console.log($('.mo-dep1-menu'));
        $('.mo-dep2-wrap').hide()
        $('.mo-dep2-wrap').eq(mo_dep1Idx).show() // 인덱스 번호가 같은것끼리 show처리

    })

    //3dep 아코디언 메뉴 구현
    $(".mo-dep2-menu").click(function () {
        $(".mo-dep3-wrap").not($(this).find(".mo-dep3-wrap").slideToggle(300)).slideUp();
        $('.mo-dep2-menu').removeClass('on');
        $(this).addClass('on');
    });

/***** go-top *****/
    $('.btn-goTop').bind('click', function() {
        $('html, body').animate({scrollTop: '0'}, 400);
    });



});

