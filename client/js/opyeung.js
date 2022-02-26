var $card , $card_slick , $proudcts , $proudcts_copy , $animating , $current_product, $swipe_threshold;
var $card_info = [];
var $count = 0;


//API LIST

var $list_url = $server_url+'product/list'
var $list_img = $server_url+'product/imgList'

$(document).ready(function() {

	//card 버전
    $card = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        shortSwipes :false,
        // threshold:10,
      });
    //일반 버전
    // $card = new Swiper(".mySwiper");


	//init
	init();
	
	// Main Card 관련 이벤트

	$card.on('slideChange', function(swiper){
		//if(slick.currentSlide != 1) return;
	// left

		if(swiper.activeIndex ==1)
			return;
		console.log(swiper.activeIndex)

		//swiper.activeIndex == 0 : liked
		//swiper.activeIndex == 2 : disliked


		// $.ajax({
		// 	url:$server_url+'user/productInfo',
		// 	dataType:'json',
		// 	type: 'PUT',
		// 	data : JSON.stringify({
		// 		productCode : $current_product.productCode,
		// 		siteId: $current_product.siteId,
		// 		liked : 1
		// 	}),
		// 	// xhrFields : { withCredentials : true} 
		// });
		if($proudcts.length == 7){
			getProductInfo();	
		}
		else if($proudcts.length == 1){
			$proudcts = Object.values({...$proudcts_copy});	
			$proudcts_copy = null;
		}
	

	});
   


	// On before slide change
	$card.on('transitionStart', function(swiper){
		
		if(swiper.activeIndex ==1)
			return;

		$('.swiper-slide').css('opacity', 0);

		
		
		setTimeout(function(){
			$('#main_card').empty();
			$('#main_card').html($('#copy_card').html());


			//main_card empty 때문에 이벤트 다시 걸어줘야함
			$('.text-dot').click(function(){
			$('.container').addClass('modal-open');
		      $('.container').addClass('modal-open');
		      // $('.modal_header').addClass('detail-header-on');
		      $('.detail_product_name').text($current_product.productNm);
			});

		},100 );

		$card.slideTo(1);

		setTimeout(function(swiper){
			
			
			$('.swiper-slide').css('opacity', 1);	
			prepareProduct();

			//Detail Image List 호출	
			$.ajax({
				url:$list_img,
				dataType:'json',
				data : {
					siteId :$current_product.siteId,
					productCode : $current_product.productCode
				},
				success:function(data){
					if(!data)return;
					$('.modal_detail').empty();
					for(var inx = 0 ; inx < data.length ; inx++){
						$('.modal_detail').append($('<img src="'+data[inx].detailImg+'"/>'));
					}
				},
				// xhrFields : { withCredentials : true} 
			});
		},500 , swiper);

	});


	//좌우 swipe 시 좋아요/싫어요 표시
	$swipe_threshold = 0.07;
	$card.on('progress', function (swiper, progress) {
        //progress -$swipe_threshold > 0.5 : left, disliked
        //progress + $swipe_threshold < 0.5 : right, liked
		$('#main_card .swipe_icon').removeClass('disliked_icon');
		$('#main_card .swipe_icon').removeClass('liked_icon');
        //disliked 처리
        if(progress -$swipe_threshold  > 0.5){
        	$('#main_card .swipe_icon').addClass('disliked_icon');
        	$('#main_card .disliked_icon').css('opacity' , 0.25+progress);
        	$('#main_card .photo__file').css('filter' ,'brightness('+ (1.2-progress)+')');
        }
		//liked 처리
        else if(progress + $swipe_threshold  < 0.5){
        	$('#main_card .swipe_icon').addClass('liked_icon');
        	$('#main_card .liked_icon').css('opacity' , 0.75+progress);
        	$('#main_card .photo__file').css('filter' , 'opacity('+(0.7- (1/progress)/10)+')');

        }else{
        	$('#main_card .photo__file').css('filter' ,'');
        }

    });

	//0.5초간 누르면 페이지 이동
	var mc2 = new Hammer.Manager($('.mySwiper').get(0));
	mc2.add( new Hammer.Press({time: 600}) );
	mc2.on('press', function(e) {
	  // window.open($current_product.url , '_blank');
	  window.location = $current_product.url;
	});


	// Main Card 관련 이벤트 END


	//디테일 modal 제어 start
	//위로 쓸어 올릴때 디테일 페이지 로드
	var ts;
	$('.container').bind('touchstart', function (e){

	   ts = e.originalEvent.touches[0].clientY;
	});

	$('.container').bind('touchend', function (e){

		if($card.animating ) return;
	   var te = e.originalEvent.changedTouches[0].clientY;
	   if(ts > te+140){

	      $('.container').addClass('modal-open');
	      // $('.modal_header').addClass('detail-header-on');
	      $('.detail_product_name').text($current_product.productNm);

	      $('.go_top').addClass('on');
	   }else if(ts < te-5){
	      //touch down
	   }
	});

	//modal doubletap 시 닫기 처리
	var mc = new Hammer.Manager($('.modal').get(0));
	mc.add( new Hammer.Tap({ event: 'doubletap', taps: 3 }) );
	
	mc.on("doubletap", function(ev) {
	   $('.container').removeClass('modal-open');
	   $('.go_top').removeClass('on');
	   setTimeout(function(){
			$('.modal_detail').scrollTop(0);
			$('.modal_detail').removeClass('modal_bottom');
	   },1000);
	   
	});


	$('.swipe_guide').click(function(e){
		e.stopPropagation();
		$('.swipe_guide').hide();
	});
	
	$('.swipe_guide').bind('touchstart', function (e){
	   e.stopPropagation();
	});

	//chat 아이콘 클릭시 댓글창 열기
	$('.chat_top').click(function(){	  
	  $('.detail_product_name').text($current_product.productNm);		
      // $('.modal_header').addClass('detail-header-on');
	});

	//chat 영역 doubletap 시 닫기 처리
	// var modal_header = new Hammer.Manager($('.modal_header').get(0));
	// modal_header.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
	// modal_header.on("doubletap", function(ev) {
	//    $('.modal_header').removeClass('detail-header-on');
	   
	// });


	//dot 클릭시 detail 페이지 열기
	$('.text-dot').click(function(){
	  $('.container').addClass('modal-open');      
      $('.go_top').addClass('on');
      $('.detail_product_name').text($current_product.productNm);
	});

	//close 버튼 클릭시에도 modal 닫기
	$('.close').click(function(){
	   $('.container').removeClass('modal-open');
	   $('.go_top').removeClass('on');
	   setTimeout(function(){
			$('.modal_detail').scrollTop(0);
			$('.modal_detail').removeClass('modal_bottom');
	   },1000);
	});


	//실시간 댓글 클릭시 댓글 영역 고정
	$('.detail_comment').click(function(){
		$('.modal_detail').removeClass('modal_bottom');
	});

	//modal scroll에 따른 댓글영역 관리
	$('.modal_detail').scroll(function(event){ 
		if($('.modal_detail').scrollTop() !=0){
			// var current_scroll = 100 * ($('.modal')[0].scrollTop + $('.modal')[0].clientHeight) / $('.modal')[0].scrollHeight;
			// if(current_scroll > 12){
			// 	$('.modal').removeClass('modal_down');
			// 	$('.modal').addClass('modal_bottom');
			// }
			// else{
			// 	$('.modal').removeClass('modal_bottom');
			// 	$('.modal').addClass('modal_down');
			// }

			$('.modal_detail').addClass('modal_bottom'); // 댓글 다 가림
		}
		else{
			$('.modal_detail').removeClass('modal_bottom');
			// $('.modal').removeClass('modal_down');
		}
	}); 


	//go top 버튼

	$('.go_top').click(function(){
		$('.modal_bottom').animate({ scrollTop: 0 });
	});
//디테일 modal 제어 End







	
});

function init(){

	$.ajax({
		url:$server_url+'/user/init',
	});
	
	$card.slideTo(1);

	//splash screen clear
	setTimeout(function(){
		$('.splash').addClass('fade-out');
		$('.swipe_guide').show();
	}, 800);

	
	$.ajax({
		url:$list_url,
		dataType:'json',
		data : {

		},
		success:function(data){
			

			if(!data)return;


			preloading(data);

			$count = 0;
			$proudcts = data;
			setProductInfo('#main_card' , true);
			prepareProduct();

		//Detail Image List 호출	
		$.ajax({
			url:$list_img,
			dataType:'json',
			data : {
				siteId :$current_product.siteId,
				productCode : $current_product.productCode
			},
			success:function(data){
				if(!data)return;
				$('.modal_detail').empty();
				for(var inx = 0 ; inx < data.length ; inx++){
					$('.modal_detail').append($('<img src="'+data[inx].detailImg+'"/>'));
				}
			},
			// xhrFields : { withCredentials : true} 
		});

		},
		// xhrFields : { withCredentials : true} 
	});




}


function setProductInfo(selector , is_main){
	var count = is_main ? 0 : 1
	var product = $proudcts[count];
	if(!product) return;
	//$(selector).find('img').eq(0).attr('src' , product.siteIcon);
	$(selector).find('img').eq(0).attr('src' , !product.productImg.startsWith('http') ? 'http:' + product.productImg : product.productImg);
	//$(selector).find('span').eq(0).text( product.siteNm);
	//$(selector).find('.photo__comment-author').eq(0).text( product.siteNm);
	$(selector).find('span').eq(0).text( product.siteNm);
	$(selector).find('span').eq(1).text( product.productNm);

	$(selector).find('span').eq(2).text( numberWithCommas(product.price));
	// $(selector).find('p').eq(2).text( (product.DISCOUNT_PRICE ? product.DISCOUNT_PRICE : product.PRICE) + "원" );
	$(selector).find('.photo__comment-description').text( product.productDesc);

	//명사 태그 추가
	//hot은 일단 항상
	$(selector).find('.tag__info').empty();
	$(selector).find('.tag__info').append('<div class="product-tag product-tag-important"><span>HOT</span></div>');
	var tags = product.productTagMost ? product.productTagMost.split(',') : [];
	for(var inx = 0 ; inx < tags.length ; inx++){
		$(selector).find('.tag__info').append('<div class="product-tag"><span>'+tags[inx]+'</span></div>');
	}


}


function getProductInfo(){
	$.ajax({
		url:$list_url,
		dataType:'json',
		data : {

		},
		success:function(data){
			if(!data){
				log.console('No Data');
				return;
			}
			preloading(data);
			$proudcts_copy = data;
		},
		// xhrFields : { withCredentials : true} 
	});
}

function preloading(data){
	//preloading
	$('#preload').empty();
	for(var inx = 0 ; inx < data.length ; inx++){
		$('#preload').append($('<img src="'+data[inx].productImg+'"/>'));
	}
}

function prepareProduct(){
	setProductInfo('#background_card' , false);
	setProductInfo('#copy_card' , false);
	$current_product = $proudcts.shift();
	

	/*이미지 loading 안될떄 고민해야함...*/
	if($proudcts_copy == null){
		getProductInfo();	
	}
	else if($proudcts.length == 1){
		$proudcts = Object.values({...$proudcts_copy});	
		$proudcts_copy = null;
	}
	setTimeout(function(){
		if(!$('#copy_card .photo__file')[0].complete)
			prepareProduct();
	},100);
	/*이미지 loading 안될떄 고민해야함...*/

}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//뒤로가기로 재진입할 경우 페이지 reload
window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();	
	}
	
};