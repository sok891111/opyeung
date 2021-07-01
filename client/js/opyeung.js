var $card , $card_slick , $proudcts , $proudcts_copy , $animating , $current_product;
var $card_info = [];
var $count = 0;


//API LIST

var $list_url = $server_url+'product/list'
var $list_img = $server_url+'product/imgList'

$(document).ready(function() {

	$card = $('.feed')
	$card_slick = $card.slick({
		arrows : false,
		cssEase : 'easeOutElastic',
		easing : 'linear',
		speed : 300,
		touchThreshold : 8,
		infinite: true
	});

	
	//init
	init();
	
	// On swipe event
	$card.on('swipe', function(event, slick, direction){
		//if(slick.currentSlide != 1) return;
	// left
	
	
		$.ajax({
			url:$server_url+'user/productInfo',
			dataType:'json',
			type: 'PUT',
			data : JSON.stringify({
				productCode : $current_product.productCode,
				siteId: $current_product.siteId,
				liked : 1
			}),
			// xhrFields : { withCredentials : true} 
		});

	});

	// On edge hit
	$card.on('edge', function(event, slick, direction){
		console.log('edge was hit');
	});

	// On before slide change
	$card.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		if(slick.currentSlide != 1 || slick.dragging){
		 	return;	
		}
		if($proudcts.length == 7){
			getProductInfo();	
		}else if($proudcts.length == 1){
			$proudcts = $proudcts_copy;	
			$proudcts_copy = null;
		}
		
		setTimeout(function(){
			$('#main_card').empty();
			$('#main_card').html($('#copy_card').html());
		},300 );


		setTimeout(function(slick){
			if(slick.currentSlide == 1) return;
			slick.slickGoTo(1);	
			setProductInfo('#background_card' , false);
			setProductInfo('#copy_card' , false);
			$current_product = $proudcts.shift();
		},600 , slick);

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
				debugger;
			},
			// xhrFields : { withCredentials : true} 
		});

		

	});


	
});

function init(){

	$.ajax({
		url:$server_url+'/user/init',
	});
	$('.feed').slick('slickGoTo', 1);	
	$.ajax({
		url:$list_url,
		dataType:'json',
		data : {

		},
		success:function(data){
			if(!data)return;
			$count = 0;
			$proudcts = data;
			setProductInfo('#main_card' , true);
			setProductInfo('#background_card' , false);
			setProductInfo('#copy_card' , false);
			$current_product = $proudcts.shift();
		},
		// xhrFields : { withCredentials : true} 
	});


	//위로 쓸어 올릴때 디테일 페이지 로드
	var ts;
	$(document).bind('touchstart', function (e){
	   ts = e.originalEvent.touches[0].clientY;
	});

	$(document).bind('touchend', function (e){
	   var te = e.originalEvent.changedTouches[0].clientY;
	   if(ts > te+200){
	      $('.container').addClass('modal-open');
	   }else if(ts < te-5){
	      //touch down
	   }
	});

	//modal doubletap 시 닫기 처리
	var mc = new Hammer.Manager($('.modal').get(0));
	mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
	mc.on("doubletap", function(ev) {
	   $('.container').removeClass('modal-open');
	});
	
}

function setProductInfo(selector , is_main){
	var count = is_main ? 0 : 1
	var product = $proudcts[count];
	if(!product) return;
	$(selector).find('img').eq(0).attr('src' , product.siteIcon);
	$(selector).find('img').eq(1).attr('src' , !product.productImg.startsWith('http') ? 'http:' + product.productImg : product.productImg);
	$(selector).find('span').eq(0).text( product.siteNm);
	$(selector).find('.photo__comment-author').eq(0).text( product.siteNm);
	$(selector).find('span').eq(1).text( product.productNm);
	// $(selector).find('p').eq(2).text( (product.DISCOUNT_PRICE ? product.DISCOUNT_PRICE : product.PRICE) + "원" );
	$(selector).find('.photo__comment-description').text( product.productDesc);
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
			$proudcts_copy = data;
		},
		// xhrFields : { withCredentials : true} 
	});
}