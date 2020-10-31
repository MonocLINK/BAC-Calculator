$(document).ready(function() {
    // event handlers
    $("#submit").click(calculateBAC);


    function calculateBAC() {
        // VARS / INPUT

        // vars from input boxes
        var numBeersConsumed = parseInt($("#numBeersConsumed").val());
        var numWineConsumed = parseInt($("#numWineConsumed").val());
        var numShotsConsumed = parseInt($("#numShotsConsumed").val());
        var weight = parseInt($("#weight").val());
        var hours = parseInt($("#hours").val());

        // constant vars
        var beerAlcohol = 0.54;
        var wineAlcohol = 0.60;
        var shotAlcohol = 0.60;
        var hourlyDecline = 0.015;

        // output vars
        var totalLiquidOunces;
        var alcoholAbsorbtionRate;
        var BAC;


        // CALCULATE BAC

        //() not needed but helps reading
        totalLiquidOunces = (numBeersConsumed * beerAlcohol) + (numWineConsumed * wineAlcohol) + (numShotsConsumed * shotAlcohol); // num of drink * alcohol vals + num of other drink * alcohol vals
        alcoholAbsorbtionRate = (totalLiquidOunces * 7.5);
        // make sure no /0 NAN output
        if (weight > 0) {
            BAC = (alcoholAbsorbtionRate / weight);
            BAC -= (hourlyDecline * hours);
        } else {
            BAC = "Please enter a valid weight."
        }


        // OUTPUT
        if (weight > 0) {
            $("#outputBAC").text(BAC.toFixed(3) + "%");
        } else {
            $("#outputBAC").text(BAC);

        }
    }
});