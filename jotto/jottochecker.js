function checkWords() {
  count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] in word2) {
        count++;
        word2.replace(word1[i], '');
     }
  translation.innerHTML = word1 ' and ' word2 ' have ' count ' letters in common.'
}
