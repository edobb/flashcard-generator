var BasicCard = require("./BasicCard")
var inquirer = require("inquirer");
var fs = require("fs");

function displayCard(even, odd){
    fs.readFile("flashcards.txt", "utf8", function(error, data){
        
            if (error){
            return console.log(error);
            }
            var output = [];
            output = data.split(",");
    

    inquirer.prompt([
        {
        name: "question",
        message: output[0]
        }
    ]).then(function(answers) {

    if (answers.question === output[1]){
        console.log('Correct');

    }
        
        });
    });
    };

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
        displayCard();
    }

});//END INITIAL PROMPT