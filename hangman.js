var list = ['apple', 'banana', 'oranges'];
var chances = 8;
var guesses = [];
var board = [];
var word = list[Math.floor((Math.random()*3)+0)];

$(boardSetup = function(){
	for(i=0; i<word.length; i++){
		board.push(" _ ")
	}
	drawBoard();

	$('#chances').text("You have " + chances + " chances left.");
});

$("form.guessBox").submit(function() {
	letter = $("input:first").val().toLowerCase();
	$('input[type="text"]').val('');

	if(validateGuess(letter) == true){
		wordHas(letter);
	}
	drawBoard();
	gameEnd();
	return false;
});

function drawBoard(){
	$('#board').text(board.join(" "));
	$('#chances').text("You have " + chances + " chances left.");
};

function validateGuess(letter){
	if(guesses.indexOf(letter) !== -1){
		alert("You've already guessed this");}
	else if(letter.length > 1){
		alert("Please enter one letter from a-z");}
	else if(letter.match(/[^a-zA-Z\d\s:]/)){
		alert("Please pick a letter from a-z");}
	else if(letter == "" || letter == " "){
		alert("Please pick a letter from a-z");}
	else {
		guesses.push(letter);
		$('#guesses').text(guesses.join(", "))
		return true;
	}
};

function wordHas(letter){
	correct = false;
	for(i=0; i<word.length; i++){
		if(word[i] == letter){
			putOnBoard(letter, i);
			correct = true;
		}
	}
	if(correct == false) {
		chances--;
	}
};

function putOnBoard(letter, letterIndex){
	board[letterIndex] = letter;
};

function gameEnd(){
	if(board.indexOf(' _ ') == -1){
		alert('Congratulations! You win.');
	}
	else if(chances == 0){
		alert("Sorry, you've lost. The word was " + word + ".");
	}
};