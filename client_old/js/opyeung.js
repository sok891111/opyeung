var $card , $card_slick , $proudcts , $proudcts_copy , $animating;
var $card_info = [];
var $count = 0;
var $server_url = 'http://mukgee.com:8888';
$(document).ready(function() {

	$card = $('.card-list')
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
			$proudcts.shift();
		},600 , slick);
	
	});


});

function init(){
	$('.card-list').slick('slickGoTo', 1);	
	$.ajax({
		url:$server_url,
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
			$proudcts.shift();
		}
	});
	
	
}

function setProductInfo(selector , is_main){
	var count = is_main ? 0 : 1
	var product = $proudcts[count];
	if(!product) return;
	$(selector).find('img').eq(0).attr('src' , product.SITE_ICON);
	$(selector).find('img').eq(1).attr('src' , !product.PRODUCT_IMG.startsWith('http') ? 'http:' + product.PRODUCT_IMG : product.PRODUCT_IMG);
	$(selector).find('p').eq(0).text( product.SITE_NM);
	$(selector).find('p').eq(1).text( product.PRODUCT_NM);
	$(selector).find('p').eq(2).text( (product.DISCOUNT_PRICE ? product.DISCOUNT_PRICE : product.PRICE) + "원" );
	$(selector).find('.row').eq(3).text( product.PRODUCT_DESC);
}


function getProductInfo(){
	$.ajax({
		url:$server_url,
		dataType:'json',
		data : {

		},
		success:function(data){
			if(!data){
				log.console('No Data');
				return;
			}
			$proudcts_copy = data;
		}
	});
}