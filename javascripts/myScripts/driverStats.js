$(function(){

	// Change number corresponding with speed
	setInterval(function() {
	 	var speedNumber = 100 + Math.floor(Math.random() * 200);
		$(".speed").text(speedNumber + " " + "kph");
	},
	1000); // every second


	// Change number corresponding with gear
	setInterval(function() {
	    var gearNumber = 1 + Math.floor(Math.random() * 7);
	    $(".gear").text(gearNumber);
	},
	4000); // every 4 seconds


	// Change number corresponding with g force
	setInterval(function() {
	    var gForceNumber = 1 + Math.floor(Math.random() * 500) / 100;
	    $(".gForce").text("+" + gForceNumber);
	},
	5000); // every 5 seconds


	// Change number corresponding with distance
	setInterval(function() {
		for (var i = 0; i < 305; i++) {
			// console.log("test");
			// var distanceNumber = i;
			console.log(i);
			// i = i + 1;
		};
		$(".distance").text(i + " " + "k");
	},
	1000); // every 10 seconds

});