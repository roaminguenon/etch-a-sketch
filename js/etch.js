
$(document).ready(function() {
	var x = 16;
	
	var gridNum = 256;

	console.log(gridNum);

	/*function removeGrid(className) {
		$('className').remove();
	};*/

	makeGrid1();

	//change squares to blue when hovered
	

	$('.grid').hover(function(){
		$(this).css("background-color", "blue");
	});

	
	function removeGrid() {
						$('.grid').remove();
						console.log('grid removed');
	};

	var newSize = 0;
	function getGridSize() {
		var gridSize = prompt("What grid size do you want?", "16");

		if (gridSize != null) {
			newSize = 600/gridSize;
			console.log(newSize + "is the new width and height");


		//	$('.grid').css("width", newSize);
		//	$('.grid').css("height", newSize);
			x = gridSize;
			gridNum = Math.pow(x, 2);

		};
	};

	function makeGrid1() {
		console.log("makingGrid now");
		for(var i = 0; i < gridNum; i++ ) {
			$("#container").append('<div class="grid"></div>');
			//console.log(i);
			$('.grid').css("width", newSize);
			$('.grid').css("height", newSize);
		};
		
	};
	//when button clicked reset squares to white and ask for new x
	$('#button').click(function() {
		console.log("button clicked");

		//$('.grid').css("background-color", "white");

		removeGrid();
		
		getGridSize();

		makeGrid1();

		$('.grid').hover(function(){
			$(this).css("background-color", "blue");
			console.log("hovered");
		});
		
	});

});

