function speak() {
	var myWords = document.getElementById('inputWords').value;

	var pirateWords = 'ARRRR ';

	document.getElementById('result').innerHTML = pirateWords + myWords;
}
