$(document).ready(function(){

	//menu toggle button
	$('.menu-icon').on('click', function(){
		$('nav ul').toggleClass('showing');
	});

});



//paralax

$(window).scroll(function(){
	//navbar
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}else{
		$('nav').removeClass('black');
	}		

	//jumbotron
	let wScroll= $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});


	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	//portfolio
	if(wScroll > $('.portfolio').offset().top - 350){

		$('.portfolio .card').each(function(i){
			setTimeout(function(){
				$('.portfolio .card').eq(i).addClass('muncul');
			},300 * (i+1));
		}); 

	}else{
		$('.portfolio .card').each(function(i){
			setTimeout(function(){
				$('.portfolio .card').eq(i).removeClass('muncul');
			},300 * (i+1));
		}); 
		$('.pkiri').removeClass('pmuncul');
		$('.pkanan').removeClass('pmuncul');
	}

	//about
	if(wScroll> $('.about').offset().top - 200){
		$('.pkiri').addClass('pmuncul');
		$('.pkanan').addClass('pmuncul');
	}else{
		$('.pkiri').removeClass('pmuncul');
		$('.pkanan').removeClass('pmuncul');
	}

	//contact

	if(wScroll>$('.contact').offset().top - 200){
		$('.contact').addClass('cmuncul');
	}else{
		$('.contact').removeClass('cmuncul');
	}


});


//scrolling effect cuy masih pr

$('.tombol').on('click', function(e){

	var href=$(this).attr('href');

	var tujuan=$(href);

	$('body').animate({
		scrollTop: tujuan.offset().top -50
	});

	//e.preventDefault();

});