var results = ['Result1', 'Result2', 'Result3', 'Result4', 'Result5', 'Result6', 'Result7', 'Result8', 'Result9', 'Result10'];
var words = ['Word1', 'Word2', 'Word3', 'Word4', 'Word5', 'Word6', 'Word7', 'Word8', 'Word9', 'Word10'];

function checkWords() {
  var word1 = document.getElementById("Word0").value;
  var word2;
  for (var i = 0; i < 10; i++) {
    word2 = document.getElementById(words[i]).value;
    var count = 0
    for (var j = 0; j < word1.length; i++) {
      if (word2.indexOf(word1[j]) > -1) {
        console.log(word2)
        count++;
        word2.replace(word1[j], '');
      }
      var result = document.getElementById(results[i]).innerHTML;
      result = word1.toString() + ' and '+ word2.toString() + ' have ' + count.toString() + ' letters in common.';
    }
  }
}
