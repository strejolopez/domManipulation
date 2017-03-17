$(document).ready(function(){
	$(".header").on('click', function(){
		$(".text").removeClass('open')
		$(this).find("+ .text").addClass('open')
	})
})