var results = ['Result1', 'Result2', 'Result3', 'Result4', 'Result5', 'Result6', 'Result7', 'Result8', 'Result9', 'Result10'];
var words = ['Word1', 'Word2', 'Word3', 'Word4', 'Word5', 'Word6', 'Word7', 'Word8', 'Word9', 'Word10'];

function checkWords() {
  count = 0;
  word1 = document.getElementById("Word0").value;
  for (var i = 0; i < 10; i++) {
    word2 = document.getElementById(words[i]).value;
    for (var j = 0; j < word1.length; i++) {
      if (word1[j] in word2) {
        count++;
        word2.replace(word1[j], '');
      }
      document.getElementById(results[i]).innerHTML = word1.toString() + ' and '+ word2.toString() + ' have ' + count.toString() + ' letters in common.';
    }
  }
}
