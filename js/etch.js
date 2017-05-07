$(document).ready(function() {

	for(var i = 0; i < 256; i++ ) {
		$("#container").append('<div class="grid"></div>');
	}
	$('.grid').hover(function(){
		$(this).css("background-color", "blue")
	});

})

