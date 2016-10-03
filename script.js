

//Push all the phrases into an array and make them randomly selected

//gridMenu object

//var b = 0;

currentPhrase = "";

function gridMenu(){
	this.questions = [];
	this.pass = function(phrase) {
		this.questions.push(phrase);
	}

//Places Letters into array and on screen

 	this.access = function() {	
 		random = (Math.floor((Math.random() * this.questions.length) +1 ) -1 );
    
		obj = this.questions[random];
	for(var prop in obj){
		if(prop == "phrase"){
			
			var wordArray = obj[prop].split("");
			console.log(wordArray);
			
			for(i = 0; i < wordArray.length; i++){
  				var letter = wordArray[i];
  			$("#grid").append("<div class='box'>" + letter + "</div>");	
  			console.log(obj[prop]);
  			}
  		}
	}
		currentPhrase = obj;
	}

	this.compare = function() {
		var x = document.getElementById("guess").value;
		// console.log( typeof currentPhrase, currentPhrase)
		//var y = currentPhrase.phrase.split("");
		var z = currentPhrase.phrase.toString();

		for (var i = 0; i < z.length; i++) {
			if( z[i].toLowerCase() == x.toLowerCase() ) {
				$(".box:nth-child("+(i+1)+")").addClass("selected");
			}
		}
		//
		// for(b = 0; b < y.length; b++) {
		// 	// console.log(b , y[b])
		// 	if (x == y[b]) {

			// var l = [].concat(z.match(new RegExp("["+x+"]","gi")));
			// l.forEach(function checkLetter(element, index, array) {
			// 	$(".box:nth-child("+(index +1)+")").addClass("selected");
			// 	console.log("detected");
				
			// });

		// }
	}
}
		// //for(c = 0; c < z.length; c++) {
		// 	if (x == z.match(new RegExp("["+x+"]","gi"))) {
		// 		$(".box:nth-child("+(c+1)+")").addClass("selected");
		
// 			}
// 		}

// 	}	

// }





  //phrase object
function phrases(phrase) {
	this.phrase = phrase;

}



//pushes the phrases to an array
var array = [];

document.addEventListener('DOMContentLoaded', function() {

array.push("A Worthy Opponent");
array.push("Civil War Reenactors");
array.push("Computer Genius");
array.push("Chitty Chitty Bang Bang");
array.push("Central Park In New York City");
array.push("Empire State Building");
array.push("Leaning Tower Of Pisa");
array.push("Grand Teton National Park");
array.push("New Jersey Turnpike");
array.push("The Metropolitan Museum Of Art");
array.push("Bowling A Perfect Game");
array.push("Big Wave Surfing");
array.push("Building Sandcastles");
array.push("Knock Knock Jokes");
array.push("Mud Wrestling");
array.push("Pin The Tail On The Donkey");
array.push("Active Volcanoes");
array.push("Absentee Vote");
array.push("Basketball Hoop");
array.push("Buffalo Wings");
array.push("Estimated Time Of Arrival");
array.push("Five Basic Food Groups");
array.push("Flavor Of The Month");
array.push("Gross National Product");
array.push("Little Red Caboose");
array.push("Moisturizing Towelettes");
array.push("Ants In Your Pants");
array.push("Delicious And Nutritious");
array.push("How Now Brown Cow");
array.push("The Need For Speed");
array.push("You Snooze You Lose");
array.push("Afternoon Business Meeting","Event");
array.push("All Expense Paid Vacation","Event");
array.push("Archaeological Excavations","Event");
array.push("Busiest Shopping Day Of The Year","Event");
array.push("Comic Book Convention","Event");
array.push("Deep Sea Fishing Expedition","Event");
array.push("Fourth Of July Fireworks","Event");
array.push("Getting A Parking Ticket Validated","Event");
array.push("Halloween Costume Party","Event");
array.push("Hot Dog Eating Contest","Event");
array.push("Lighting Of The Olympic Torch","Event");
array.push("Monday Night Football","Event");
array.push("New York City Marathon","Event");
array.push("Presidential Election Debate","Event");
array.push("Sailing Around The World","Event");
array.push("Sate Of The Union Address","Event");
array.push("Star Trek Convention","Event");
array.push("The American Revolution","Event");
array.push("Westminster Kennel Club Dog Show","Event");
array.push("World Cup Soccer","Event");


var list = new gridMenu();

for(i =0; i<array.length; i++){
	list.pass(new phrases(array[i]));
}



$("#startbutton").click(function(event){
	list.access();	
});
	
$("#inputform").submit(function(event){
	event.preventDefault();
	list.compare();
});


//console.log(questions);

});//end DOM

