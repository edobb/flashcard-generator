var fs = require("fs");


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

BasicCard.prototype.saveCard = function() {

    fs.appendFile("flashcards.txt", this.front + "," + this.back + ",", function(err){
        
        if (err){
            return console.log(err);
        }
    });
}

BasicCard.prototype.randomCard = function() {
    fs.readFile("flashcard.txt", "utf8", function(error, data){
        
            if (error){
            return console.log(error);
            }
            var arr = [];
            var output = data.split(",");
            for(i = 0; i < output.length; i++){
                arr.push(output[i])
                        console.log(arr);
                    }
                    var evenNumber = Math.floor((Math.random() * output.length));
                    if (evenNumber % 2 !== 0 && evenNumber !== 0){
                        evenNumber = evenNumber + 1;
                    }
                    var oddNumber = evenNumber + 1;

                    var displayCard = new BasicCard(evenNumber, oddNumber);
                    
    
        
        });
    
};



module.exports = BasicCard;



