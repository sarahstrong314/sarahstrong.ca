var results = ['Result1', 'Result2', 'Result3', 'Result4', 'Result5', 'Result6', 'Result7', 'Result8', 'Result9'];

function checkWords() {
  count = 0;
  word1 = word0.value;
  word2 = word1.value;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] in word2) {
        count++;
        word2.replace(word1[i], '');
     }
  document.getElementById("Result1").innerHTML = 'Test';
  #document.getElementById("Result1").innerHTML = word1.toString() + ' and 'word2.toString() + ' have ' + count.toString() + ' letters in common.';
}
