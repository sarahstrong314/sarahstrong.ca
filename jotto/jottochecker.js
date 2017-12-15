var results = ['Result1', 'Result2', 'Result3', 'Result4', 'Result5', 'Result6', 'Result7', 'Result8', 'Result9', 'Result10', 'Result11', 'Result12', 'Result13', 'Result14', 'Result15'];
var words = ['Word1', 'Word2', 'Word3', 'Word4', 'Word5', 'Word6', 'Word7', 'Word8', 'Word9', 'Word10', 'Word11', 'Word12', 'Word13', 'Word14', 'Word15'];

function checkWords() {
  var word1 = document.getElementById("Word0").value;
  if (word1 == '') {
    for (var i = 0; i < results.length; i++) {
      document.getElementById(results[i]).innerHTML = '';
    }
    return;
  }
  var word2;
  var temp;
  for (var i = 0; i < words.length; i++) {
    word2 = document.getElementById(words[i]).value;
    temp = document.getElementById(words[i]).value;
    if (word2 == '') {
      document.getElementById(results[i]).innerHTML = '';
      return;
    }
    var count = 0
    for (var j = 0; j < word1.length; j++) {
      if (temp.indexOf(word1[j]) > -1) {
        count++;
        temp = temp.replace(word1[j], '');
      }
      document.getElementById(results[i]).innerHTML = count.toString() 
      //document.getElementById(results[i]).innerHTML = word1 + ' and ' + word2 + ' have ' + count.toString() + ' letter(s) in common.';
    }
  }
}
