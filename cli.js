var BasicCard = require("./BasicCard")
var inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "doWhat",
        message: "Enter 'new' to create a new card, Enter 'random' to retrieve a card"
    }
]).then(function(answers){

    if(answers.doWhat === 'new'){


        inquirer.prompt([
            {
            name: "front",
            message: "Provide a fact about a historical figure in the form of a question. Example: Who was the first man on the moon?"
            }, {
            name: "back",
            message: "Provide the name of the person your fact is about. Example: Neil Armstrong"
            }
        ]).then(function(answers) {
        
            var flashCard = new BasicCard(answers.front, answers.back);

            flashCard.saveCard();
            
        });
    } 
    else if ( answers.doWhat === 'random') {
        inquirer.prompt([
            {
            name: "question",
            message: BasicCard.front
            }
        ]).then(function(answers) {
        
            for(i = 0; i < output.length; i++){
                
                        console.log(output[i]);
                    }

            flashCard.randomCard();
            
        });
        
    }

});//END INITIAL PROMPT