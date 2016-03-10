 QUnit.test( "find how many of each colour balloon did we order?", function( assert ) {
  
  var balloonOrder = eachColorBalloon("4 sets of red, 3 sets of blue, and 3 sets of yellow"); 
  
  var expectedBalloons = [
      {
        "setOfBalloon":4,
        "colour": "red"
      },
      {
        "setOfBalloon": 3,
        "colour": "blue"
      },
      {
        "setOfBalloon": 3,
        "colour": "yellow"
      },
    ];
  assert.deepEqual(balloonOrder, expectedBalloons);
})

QUnit.test( "fine how much do all the balloons cost?", function( assert ) {

  var balloonCost = eachBalloonPrice("R4 for red, R5 for blue, and R5.50 for yellow");
  
  assert.equal(balloonCost, 14.50);
})

QUnit.test( "find is it costs R2.00 to inflate each balloon with helium, how much extra would that cost?", function( assert ) {

  var extraCost = newPrices("R4 for red, R5 for blue, and R5.50 for yellow");

  assert.equal(extraCost, 20.60);
})