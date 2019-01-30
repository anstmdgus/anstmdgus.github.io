$(function()
{/*===================== pc js start ============================== */
  //네비게이션 메뉴
  $('.gnb > li').on({
    mouseenter:function(){
      if($(this).index()!=5){
        $('header').addClass('open');
        $('.gnb .depth2').hide();
        $(this).find('.depth2').slideDown();
      }
    },
    mouseleave:function(){
      $('header').removeClass('open');
      $('.gnb .depth2').hide();
    }
  });

  // 스와이퍼!
  var swiper1 = new Swiper('.main-slider', {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
   });

   var swiper2 = new Swiper('.special-cake .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 40,
      breakpoints: {
        990: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });

  //TWOSOME SPECIAL
  $('.special-cake figure').on({
    click:function(){
      $(this).find('.img-box').hide();
      $(this).find('dl').show();
    },
    mouseleave:function(){
      $(this).find('.img-box').show();
      $(this).find('dl').hide();
    }
  })

  $(window).resize(function(){
    windowW=$(window).width();
    var imgBox=$('.special-cake .img-box').width();
    $('.special-cake dl').height(imgBox);
  }).resize();




  /* 7. 인스타 그램 팝업창 */
  // =============  배열  ================== //
  var instagram=[
    {
      src:'instagram-img1-1.png',
      text:['2019 투썸 데일리 키트 GET하는 방법'+
            'TWG 밀크티 쉬폰 라떼, 카페 오트 라떼, 시그니처 뱅쇼'+
            '겨울 시즌음료 2잔 포함 총 음료 16잔 마시면 GET!'],
      hash:['#투썸플레이스'+'#투썸'+'#atwosomeplace'+'#투썸스타그램'+'#다이어리'+'#일상'],
      comment:[
        {id:'hanna',text:'너무너무 이뻐요.'},
        {id:'admin',text:'드시러 오세요.'}
      ],
      like:124,
      likeState:true
    },
    {
      src:'instagram-img2-1.png',
      text:['atwosomeplace_official',
            'Merry Christmas,'+
            '오늘은 투썸 케이크로 더 달콤하게!'],
      hash:['#투썸플레이스' + '#투썸' + '#atwosomeplace'+'#투썸스타그램'+'#크리스마스'+'#케이크'],
      comment:[
        {id:'ewdwe23',text:'맛있겠다.'},
        {id:'yroewsa',text:'포장하세요! '},
        {id:'awe234in',text:'꼭 다시 오고 싶은 그곳 '}
      ],
      like:300,
      likeState:false
    },
    {
      src:'instagram-img3-1.png',
      text:['로맨틱한 크리스마스 데이트에는'+
            '티아라처럼 반짝반짝 거리는,'+
            '크리스마스 티아라 케이크!'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#크리스마스'+'#케이크'],
      comment:[
        {id:'xegreen07',text:'넘 예뻐욧^^;'},
        {id:'arang615',text:'넘나 예쁜 #투썸플레이스 #티아라케이크 저는 이브날 맛보았어요 '},
        {id:'nj_luv',text:'넘나 이쁨😍❤️👍 '},
        {id:'rami_shasha',text:'케익 유통기한은 어디써있어요? '},
        {id:'happybsj1194',text:'오늘동생생일이라 투썸꺼 커피랑케이크 기프티콘발사 '}
      ],
      like:1240
    },
    {
      src:'instagram-img4-1.png',
      text:['투썸과 따뜻한 겨울나기'+
            '니트의 계절엔 역시 따뜻한,'+
            '귀리우유와 커피가 만나 고소고소해'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#카페'+'#케이크'+'#겨울 '],
      comment:[
        {id:'oggirl0',text:'잘보구가용;'},
      ],
      like:12
    },
    {
      src:'instagram-img5-1.png',
      text:['떠먹는 스트로베리초콜릿 생크림과 함께!'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#카페'+'#케이크'+'#겨울 '],
      comment:[
        {id:'real_my_dbd',text:'크리스마스 케이크로 투썸 티라미수 케이크 사왔어요;'},
        {id:'nj_luv',text:'딸기조아;'},
        {id:'k_h_won_19',text:'@jungmin_916 배긒파....'},
      ],
      like:24
    },
    {
      src:'instagram-img6-1.png',
      text:['추운 겨울에는 비타민 가득한'+
            '따뜻한 #시그니처뱅쇼 한 잔 이면 몸이 사르르!'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#카페'+'#케이크'+'#겨울'+'#음료'+'#뱅쇼'],
      comment:[
        {id:'ji_h6693',text:'이게 그렇게 감기에 좋은가요? 스페인 국민음료 #뱅쇼 👏'},
      ],
      like:824
    },
    {
      src:'instagram-img7-1.png',
      text:['바로 특별한 크리스마스 선물 때문이지!'+
            '크리스마스 선물로 #투썸마르크트머그 어때?'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#선물'+'#머그'],
      comment:[
        {id:'happy__bae',text:'좋아요;'},
        {id:'roasting_kwak',text:'♥️'},
        {id:'happybsj1194',text:'ㅇㅣ뻐요'},
      ],
      like:84
    },
    {
      src:'instagram-img8-1.png',
      text:['바로 특별한 크리스마스 선물 때문이지!'+
            '크리스마스 선물로 #투썸마르크트텀블러 어때?'],
      hash:['#투썸플레이스'+'#투썸'+'#투썸스타그램'+'#텀블러'],
      comment:[
        {id:'zipsi.co.kr',text:'놀러오세요;'},
        {id:'aangel3913',text:'😍💕'},
        {id:'sanghyun_shimshim',text:'@don9un 이거'},
        {id:'don9un',text:'ㅋ진짜살만한데?'},
      ],
      like:582
    },
  ];
  var instarIndex;
  $('.instagram ul li a').click(function(e){
    e.preventDefault();
    instarIndex=$('.instagram ul li a').index(this);
    //내용 비우기
    $('.text').empty();
    $('.hash').empty();
    $('.comment').empty();
    $('.like span').empty();
    $('.like button').removeClass('on');
    //내용바꾸기
    $('.inst-popup .img-box img').attr('src','img/'+instagram[instarIndex].src);
    for (var i in instagram[instarIndex].text){
      $('.inst-popup .text').append('<p>'+instagram[instarIndex].text[i]+'</p>');
    }
    for (var i in instagram[instarIndex].hash) {
      $('.hash').append('<li>'+instagram[instarIndex].hash[i]+'</li>');
      $('.hash').css('color','darkblue')
    }
    for (var i in instagram[instarIndex].comment) {
      $('.comment').append('<span>'+instagram[instarIndex].comment[i].id+'</span>');
      $('.comment').append('<li>'+instagram[instarIndex].comment[i].text+'</li>');
    }
    if(instagram[instarIndex].likeState){
      $('.like button').addClass('on');
    }
    $('.like span').text(instagram[instarIndex].like);
    $('.inst-popup').show();

  })
  // 닫기 버튼 //
  $('.icon-close1').click(function(){
    $('.inst-popup').hide()
  })

  /* 8. 로그인 팝업창 */
  // 닫기 버튼 //
  $('.membership li a').click(function(){
    $('.login-popup').show()
  })
  $('.icon-close2').click(function(){
    $('.login-popup').hide()
  })

  /*===================== pc js end ============================== */
  /*===================== t js start ============================== */
  //====== 메뉴  =============
  $('#icon-menu').change(function(){
    if($(this).is(':checked')){
      // $('nav').after('<div class="bg"></div>');
      $('.bg').show();
    }
  })
  //기본적인 방법(마크업이 되어 있을 경우)
  $('.bg').on('click',function(){
    $('#icon-menu').prop("checked", false);
    $('.bg').hide();
  })
  //동적으로 생성된 요소 컨트롤하기
  // $('body').on('click','.bg',function(){
  //   $('#icon-menu').prop("checked", false);
  //   $('.bg').remove();
  // })

  //  ===== 메뉴 클릭시 (모바일)===================
  $('.depth2 ul > li a').on('click',function(){
    $('#icon-menu').prop("checked", false);
    $('.bg').hide();
  })
  // // ====== 인스타 팝업창 카운트 업 ========
  $(".like button").click(function(){
    $(this).toggleClass('on');
    var likeCount=$('.like span').text();
    console.log('몇번째 인스타그램?:',instarIndex);
    if($(this).hasClass('on')){
      likeCount++;
      instagram[instarIndex].likeState=true;
    }else{
      likeCount--;
      instagram[instarIndex].likeState=false;
    }
    instagram[instarIndex].like=likeCount;
    $('.like span').text(likeCount);
  });



  //==================== 3. 원액  상품 출시 그림 스크롤 =========================
  var undilutedSolution;
  var twosomeStory;
  $(window).resize(function(){
    undilutedSolution=$('.undiluted-solution').offset().top;
    twosomeStory=$('.twosome-story').offset().top;//위에서 부터 딱 맞게 설정
  }).resize();


  $(window).scroll(function(){
    var windowTop=$(window).scrollTop();
    // console.log(undilutedSolution, windowTop);
    if(undilutedSolution < windowTop+400){
      $('.undiluted-solution .center-box').addClass('ani-updown');
    }else{
      $('.undiluted-solution .center-box').removeClass('ani-updown');
    }

    if(twosomeStory < windowTop+400){
      $('.twosome-story .big').addClass('ani-left');
      $('.twosome-story .small').addClass('ani-left');
    }else{
      $('.twosome-story .big').removeClass('ani-left');
      $('.twosome-story .small').removeClass('ani-left');
    }
  })
})
