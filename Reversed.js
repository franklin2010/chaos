const prompt = require ("prompt-sync")();
word = prompt ("Enter Word: ")
reversedWord = ""
for (letter of word) {
	reversedWord = letter + reversedWord
}
console.log (reversedWord)
