$('#cta').on('click', function (){
	window.alert('We are not currently taking sign ups');
	$('#cta').html("No Sign Ups!");
});

$(".hidden-p1").hide();
$(".hidden-p2").hide();

$(".read-less1").hide();
$(".read-less2").hide();

$('.read-more1').on('click', function(){
	$('.hidden-p1').slideDown();
	$('.read-less1').toggle();
	$('.read-more1').toggle();
});
$('.read-more2').on('click', function(){
	$('.hidden-p2').slideDown();
	$('.read-less2').toggle();
	$('.read-more2').toggle();
});

$('.read-less1').on('click', function(){
	$('.hidden-p1').slideUp();
	$('.read-less1').toggle();
	$('.read-more1').toggle();
});
$('.read-less2').on('click', function(){
	$('.hidden-p2').slideUp();
	$('.read-less2').toggle();
	$('.read-more2').toggle();
});

$('#learn-more').hide();

$('.learn-more').on('click', function(){
	$('#learn-more').toggle();
	$('.learn-more').hide();
});