var fs = require("fs");


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

BasicCard.prototype.saveCard = function() {

    fs.appendFile("flashcards.txt", this.front + "- " + this.back + ",", function(err){
        
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
           
            var output = data.split(",");
            for(i = 0; i < output.length; i++){
                
                        console.log(output[i]);
                    }
           
            
        
        
        
        });
    
};
module.exports = BasicCard;



