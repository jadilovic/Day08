    // Only change code below this line

    function randomRangeNumber(minNumber, maxNumber){
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }

    randomRangeNumber(3, 9);
    console.log(randomRangeNumber(4, 8))

    for(var i = 0; i < 30; i++){
        console.log(randomRangeNumber(10, 20));
    }
    // Only change code above this line

    module.exports = randomRangeNumber;