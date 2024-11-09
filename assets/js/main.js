$(function () {
  /********* 섹션01 - 메인비주얼 *********/
  ///////// 메인배너 롤링
  var swiper1 = new Swiper(".section01-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".visual-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".visual-next",
      prevEl: ".visual-prev",
    },    
  });


  ///////// 후원금
  $("input#day, input#day + label").click(function () {
    $(".info-text").html(
      "소중한 후원금은 도움이 필요한 아이들을 위해 가장 필요한 곳에 사용됩니다."
    );
  });

  $(".price-wrap button").click(function () {
    // 정기후원이 선택된 경우에만 텍스트 변경
    if ($("#month").is(":checked")) {//is()선택한 요소의 일치여부 판별
      var text = $(this).data("text");
      $(".info-text").html(text);
      
    } else {
      $(".info-text").html(
        "소중한 후원금은 도움이 필요한 아이들을 위해 가장 필요한 곳에 사용됩니다."
      );
    }
  });

  // 정기후원/일시후원 라디오 버튼 클릭 시 이벤트 처리
  $('input[type="radio"]').change(function () {//change()값이 변경될 때
    if ($("#month").is(":checked")) {
      $(".info-text").html("소중한 후원금은 도움이 필요한 아이들을 위해 가장 필요한 곳에 사용됩니다."); // 정기후원 선택 시 원래 텍스트로 복구
    }
  });

  //클릭시 버튼 색 바꾸기
  $('.price-wrap button').click(function(){
    $('.price-wrap button').removeClass('on');
    $(this).addClass('on');
  });
  $('.btn-radio-wrap').children().click(function(){
    $('.price-wrap button').removeClass('on');
  });



  /********* 섹션02 - 나눔이야기 *********/
  /////// 스와이퍼 콘텐츠


  var swiper2 = new Swiper(".section02-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },    
    scrollbar: {
      el: ".section02-scrollbar",
      hide: false,
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
        spaceBetween: 30
      },
      // 화면의 넓이가 1024px 이상일 때
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }

  });

  /********** 섹션04 - 사업소개 ***********/
  const tabList = document.querySelectorAll('.tab_menu .list li');
  const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
  let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('is_on');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('is_on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  }


  ///// 숫자 카운터 효과

   // 클래스가 "counter"인 모든 요소를 선택합니다.
   const $counters = $(".counter");
    
   // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
   const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
   const duration = 1000; // ex) 1000 = 1초
   
   // 숫자에 쉼표를 추가할지 여부를 설정합니다.
   const addCommas = true; // ex) true = 1,000 / false = 1000
   
   // 숫자를 업데이트하고 애니메이션하는 함수 정의
   function updateCounter($el, start, end) {
       let startTime;
       function animateCounter(timestamp) {
           if (!startTime) startTime = timestamp;
           const progress = (timestamp - startTime) / duration;
           const current = Math.round(start + progress * (end - start));
           const formattedNumber = addCommas ? current.toLocaleString() : current;
           $el.text(formattedNumber);
           
           if (progress < 1) {
               requestAnimationFrame(animateCounter);
           } else {
               $el.text(addCommas ? end.toLocaleString() : end);
           }
       }
       requestAnimationFrame(animateCounter);
   }

   
   // 윈도우의 스크롤 이벤트를 모니터링합니다.
   $(window).on('scroll', function() {
       // 각 "counter" 요소에 대해 반복합니다.
       $counters.each(function() {
           const $el = $(this);
           // 요소가 아직 스크롤되지 않았다면 처리합니다.
           if (!$el.data('scrolled')) {
               // 요소의 위치 정보를 가져옵니다.
               const rect = $el[0].getBoundingClientRect();
               const winHeight = window.innerHeight;
               const contentHeight = rect.bottom - rect.top;
               
               // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
               if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                   const start = parseInt($el.data("start"));
                   const end = parseInt($el.data("end"));
                   // 숫자를 업데이트하고 애니메이션을 시작합니다.
                   updateCounter($el, start, end);
                   $el.data('scrolled', true);
               }
           }
       });
   }).scroll();

   /************* 굿즈 배너 슬라이드 *************/
   var swiper = new Swiper(".banner-slide", {
    speed: 700,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    // touchRatio: 0 드래그 막기
   });

   /* 섹션06 - 유니세프 소식 */
   var swiper = new Swiper(".section06-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    scrollbar: {
      el: ".section06-scrollbar",
      hide: false,
    },
    breakpoints: {
      1024:{
        slidesPerView: 4,
      },
      900:{
        slidesPerView: 3,
      },
      521: {
        slidesPerView: 2,
      }
    }
  });


  


});


