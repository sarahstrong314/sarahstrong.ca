var results = ['Result1', 'Result2', 'Result3', 'Result4', 'Result5', 'Result6', 'Result7', 'Result8', 'Result9', ]
    
function checkWords() {
  count = 0;
  word1 = word1.value
  word2 = word2.value
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] in word2) {
        count++;
        word2.replace(word1[i], '');
     }
  translation.innerHTML = str(word1) + ' and 'str(word2) + ' have ' + str(count) + ' letters in common.'
}
