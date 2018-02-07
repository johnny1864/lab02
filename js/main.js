window.onload = function(){
    var mpg;
    var milesDriven = prompt('How many miles did you drive');
    var gallons = prompt('How big is your gas tank');
    
    mpg = milesDriven/gallons;
    
    document.getElementById('results').innerHTML = mpg.toFixed(2);
}