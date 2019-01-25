
var vowels = ["a","A","e","E","i","I","o","O","u","U"]
function way(newWord, firstvowel) {
  if (newWord.length === 1) {
    vowels.forEach(function(vowel) {
      if (newWord[0] === vowel) {
        newWord.push("ay");
      }
    });
    return newWord.join("");
  } else if (firstvowel < newWord[1]){
    newWord.push("way");

    return newWord.join("");
  // } else if (!vowels.includes(newWord[0])) {
  //   newWord = newWord.slice(1, newWord.length).concat(newWord.slice(0,1));
  //   newWord.push("ay");
  //   return newWord.join("");
  }
  else if (firstvowel > newWord[0]) {
    newWord = newWord.slice(firstvowel, newWord.length).concat(newWord.slice(0, firstvowel));
    newWord.push("ay")
   return newWord.join("");
 }
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var word = $("input#word").val();
    var newWord = word.split("");
    var firstvowel = newWord.indexOf(vowels)
    console.log(firstvowel);
    var output = way(newWord, firstvowel);
    console.log(output);

    event.preventDefault();
  });
});
