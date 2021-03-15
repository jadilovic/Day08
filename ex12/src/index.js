    // Only change code below this line

    function randomInteger(){
        return Math.floor(Math.random() * 30);
    }

    for(var i = 0; i < 30; i++){
        console.log(randomInteger());
    }
    // Only change code above this line

    module.exports = randomInteger;