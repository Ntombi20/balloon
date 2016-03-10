function eachColorBalloon(balloonOrder){
	var balloon = balloonOrder
		.split(", ");

	var balloonList	= [];
	for (var i = 0; i < balloon.length; i++) {
		var balloonString = balloon[i];

  		var item = balloonString
  			.replace("and ", "")
  			.replace(" sets of", "")
  			.split(" ");

  		var setOfBalloon = Number(item[0]);
      	
      	var balloons = setOfBalloon*3;

  		var colour = item[1];
  	
  		balloonList.push({
  			setOfBalloon: setOfBalloon,
  			balloons: balloons,
  			colour: colour
  			})
		
	};

	return balloonList;	
}

function eachBalloonPrice(balloonCost){
	var cost = balloonCost
	  .replace("for red, ", "")
	  .replace("for blue, ", "")
	  .replace("for yellow", "")
	  .replace(" and ", "")
	  .replace(" ", "")
	  .split();

	var costList = [];
	for (var i = 0; i < cost.length; i++) {

		var costString = cost[i];

  		var prices = costString
  			.split("R").join(" ").split(" ").slice(" ");
  			
  		 console.log(prices);

  		var cost1 = Number(prices[1]); 
  		var cost2 = Number(prices[2]);
  		var cost3 = Number(prices[3]);

  		var AllCost = (cost1 * 3) + (cost2 * 3) + (cost3 * 3);
  		costList.push(
  			AllCost
  			);
		
	};
	

	return costList;
}

function newPrices(extraCost){
	//var price = priceForTheBalloon(extraCost);

	// var price1 = price.AllCost;
	// for (var i = 0; i < price.length; i++) {
	// 	var extra = price[i];



	// };

	// return price;
}























function findColdestPlace(weatherString){
    var places = findPlaces(weatherString);

    var coldestTemp = places[0].temperature;
    var coldestPlace = "";

    for(var i=0; i<places.length;i++){
        var place = places[i];
        if (place.temperature < coldestTemp ){
            coldestTemp = place.temperature;
            coldestPlace = place.place;
        }
    }
    return coldestPlace;
}