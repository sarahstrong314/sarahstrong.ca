let hexToDec = {"00": "0", "01": "1", "02": "2", "03": "3", "04": "4", "05": "5", "06": "6", "07": "7", "08": "8", "09": "9", "0A": "10", "0B": "11", "0C": "12", "0D": "13", "0E": "14", "0F": "15", "10": "16", "11": "17", "12": "18", "13": "19", "14": "20", "15": "21", "16": "22", "17": "23", "18": "24", "19": "25", "1A": "26", "1B": "27", "1C": "28", "1D": "29", "1E": "30", "1F": "31", "20": "32", "21": "33", "22": "34", "23": "35", "24": "36", "25": "37", "26": "38", "27": "39", "28": "40", "29": "41", "2A": "42", "2B": "43", "2C": "44", "2D": "45", "2E": "46", "2F": "47", "30": "48", "31": "49", "32": "50", "33": "51", "34": "52", "35": "53", "36": "54", "37": "55", "38": "56", "39": "57", "3A": "58", "3B": "59", "3C": "60", "3D": "61", "3E": "62", "3F": "63", "40": "64", "41": "65", "42": "66", "43": "67", "44": "68", "45": "69", "46": "70", "47": "71", "48": "72", "49": "73", "4A": "74", "4B": "75", "4C": "76", "4D": "77", "4E": "78", "4F": "79", "50": "80", "51": "81", "52": "82", "53": "83", "54": "84", "55": "85", "56": "86", "57": "87", "58": "88", "59": "89", "5A": "90", "5B": "91", "5C": "92", "5D": "93", "5E": "94", "5F": "95", "60": "96", "61": "97", "62": "98", "63": "99", "64": "100", "65": "101", "66": "102", "67": "103", "68": "104", "69": "105", "6A": "106", "6B": "107", "6C": "108", "6D": "109", "6E": "110", "6F": "111", "70": "112", "71": "113", "72": "114", "73": "115", "74": "116", "75": "117", "76": "118", "77": "119", "78": "120", "79": "121", "7A": "122", "7B": "123", "7C": "124", "7D": "125", "7E": "126", "7F": "127", "80": "128", "81": "129", "82": "130", "83": "131", "84": "132", "85": "133", "86": "134", "87": "135", "88": "136", "89": "137", "8A": "138", "8B": "139", "8C": "140", "8D": "141", "8E": "142", "8F": "143", "90": "144", "91": "145", "92": "146", "93": "147", "94": "148", "95": "149", "96": "150", "97": "151", "98": "152", "99": "153", "9A": "154", "9B": "155", "9C": "156", "9D": "157", "9E": "158", "9F": "159", "A0": "160", "A1": "161", "A2": "162", "A3": "163", "A4": "164", "A5": "165", "A6": "166", "A7": "167", "A8": "168", "A9": "169", "AA": "170", "AB": "171", "AC": "172", "AD": "173", "AE": "174", "AF": "175", "B0": "176", "B1": "177", "B2": "178", "B3": "179", "B4": "180", "B5": "181", "B6": "182", "B7": "183", "B8": "184", "B9": "185", "BA": "186", "BB": "187", "BC": "188", "BD": "189", "BE": "190", "BF": "191", "C0": "192", "C1": "193", "C2": "194", "C3": "195", "C4": "196", "C5": "197", "C6": "198", "C7": "199", "C8": "200", "C9": "201", "CA": "202", "CB": "203", "CC": "204", "CD": "205", "CE": "206", "CF": "207", "D0": "208", "D1": "209", "D2": "210", "D3": "211", "D4": "212", "D5": "213", "D6": "214", "D7": "215", "D8": "216", "D9": "217", "DA": "218", "DB": "219", "DC": "220", "DD": "221", "DE": "222", "DF": "223", "E0": "224", "E1": "225", "E2": "226", "E3": "227", "E4": "228", "E5": "229", "E6": "230", "E7": "231", "E8": "232", "E9": "233", "EA": "234", "EB": "235", "EC": "236", "ED": "237", "EE": "238", "EF": "239", "F0": "240", "F1": "241", "F2": "242", "F3": "243", "F4": "244", "F5": "245", "F6": "246", "F7": "247", "F8": "248", "F9": "249", "FA": "250", "FB": "251", "FC": "252", "FD": "253", "FE": "254", "FF": "255"};

let allQuestions = [...Object.keys(hexToDec)];
let chosenQuestions = [];
let currScore = 0;
let numGuessed = 0;
let totalQuestions = 30;
let numLeft = totalQuestions;

function begin() { 
  // window.history.pushState({}, '',  'hexadecimal.html?' + conversionMenu[conversionMenu.selectedIndex].id.toLowerCase());

  // version = conversionMenu.selectedIndex;

  chosenQuestions = [];

  for (let i = 0; i < totalQuestions; i++) {
    let randNum = Math.floor(Math.random() * allQuestions.length);
    let pick = allQuestions[randNum];
    if (!chosenQuestions.includes(pick)) {
      chosenQuestions.push(pick);
    } else i--;
  }

  next.style.display = 'inline-block';
  next.disabled = false;
  amIRight.innerHTML = '';

  pickQuestion();

  currScore = 0;
  numGuessed = 0;
  numLeft = totalQuestions;
  score.innerHTML = 'Score: 0 out of 0' + ' (' + numLeft.toString() +' Remaining)';
}

let lastOne;
let newAnswer;
let newQuestion;

function pickQuestion() {
  stopScore = false;
  lastOne = false;
  updateNext = true;
  next.disabled = true;

  for (let i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = 'grey';
  }

  if (chosenQuestions.length == 1) lastOne = true;

  newQuestion = chosenQuestions.pop()
  newAnswer = hexToDec[newQuestion];

  console.log(newQuestion);
  console.log(newAnswer);

  question.innerHTML = "#" + newQuestion;
  displayAnswers();

  amIRight.innerHTML = '';
}

let answers;
let firstTry;
let guessedYet;

function displayAnswers() {
  let numAnswers = allQuestions.length

  let randomAnswer;
  let randomAnswer2;

  // picks two different random indices that don't match answer's index
  
  randomAnswer = hexToDec[allQuestions[Math.floor(Math.random() * numAnswers)]];
  randomAnswer2 = hexToDec[allQuestions[Math.floor(Math.random() * numAnswers)]];

  while (newAnswer == randomAnswer)
    randomAnswer = hexToDec[allQuestions[Math.floor(Math.random() * numAnswers)]];

  while (randomAnswer2 == newAnswer || randomAnswer2 == randomAnswer)
    randomAnswer2 = hexToDec[allQuestions[Math.floor(Math.random() * numAnswers)]];

  // puts the answers in order based on index

  answers = [newAnswer, randomAnswer, randomAnswer2];

  answers.sort();


  // displays the answers, in order, on the option buttons


  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = answers[i];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  firstTry = true;
  guessedCorrectly = false;

  options[0].onclick = function() { checkAnswer(newAnswer, answers[0], 'option1') };
  options[1].onclick = function() { checkAnswer(newAnswer, answers[1], 'option2') };
  options[2].onclick = function() { checkAnswer(newAnswer, answers[2], 'option3') };
}

function checkAnswer(correct, answer, option) {
  if (firstTry && correct == answer) {
    if (correct == answer) {
      currScore++;
    }
    firstTry = false;
  }
  if (!guessedCorrectly) {
    amIRight.innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
    if (correct == answer) {
      guessedCorrectly = true;
      numGuessed++;
      numLeft--;
      score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numGuessed.toString() + ' (' + numLeft.toString() +' Remaining)';
      document.getElementById(option).style.backgroundColor = 'green';
      score.innerHTML = 'Score: ' + currScore.toString() + ' out of ' + numGuessed.toString() + ' (' + numLeft.toString() +' Remaining)';

      if (!lastOne) next.disabled = false;

      if (lastOne) {
        amIRight.innerHTML = 'Correct! Game complete.';      
        next.style.display = 'none';
        updateNext = false;
        lastOne = false;
      }
    } 
  }
}

$(document).keypress(function (e) {
  var code = e.keyCode || e.which;
  if (code == 13 && !next.disabled) pickQuestion();
  else if (code === 49 && !option1.disabled) checkAnswer(newAnswer, answers[0], 'Option1');
  else if (code === 50 && !option2.disabled) checkAnswer(newAnswer, answers[1], 'Option2');
  else if (code === 51 && !option3.disabled) checkAnswer(newAnswer, answers[2], 'Option3');
});
