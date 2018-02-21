
	
	var result;
	var win = 0;
	var lost = 0;
	var previous = 0;

// what number is going to display for player to match?
	result = Math.floor(Math.random() * 100) + 20;
	console.log(result);

	$("#result").html('Your Result: ' + result);

// the clystal and its value
	for(var i = 0; i < 4; i++){
// value of crystal is gotten
		var randomNumgem = Math.floor(Math.random() * 11) + 1;
		// console.log(randomNumgem);
// the crystal and the value
		var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"randomNumber":randomNumgem
		});
		 crystal.html(randomNumgem);

		$(".crystals") .append(crystal);
	}
// what does the crystal do and adding it's value?
		$(".crystal").on('click', function () {
		var num =parseInt($(this).attr('randomNumber'));

		previous += num;
		console.log(previous);

		if(previous > result){
		//	lost--;
			console.log ("Looser!!!");
		}
		else if(previous === result){
		//	wins++;
		//	$("#win").html(win);
			console.log("Winner!!!")
		}

		

		});
	
// 1-. A game with 4 cristals and random result of 90 - 120 

// 2-. Each crystal has a random number from 1 - 12 (value)

// 3-. A new RANDOM number could be generated every single time we win or loose to those 4 crystals

// 4-. When clicking any crystal it should be adding with the previous result until it equals the random_result

// 5-. if it is greater than the RANDOM result then we decrement the lost counter

// 6-. if it is equal then we incriment a win counter
