const ENTER = 13;
const ESC = 27;

function preload() {
  familyFeudFont = loadFont("assets/family_feud_font.ttf");
  kahootBg = loadImage("assets/kahoot_background.png");
  kahootQ1 = loadImage("assets/kahoot_q1.png");
  kahootQ2 = loadImage("assets/kahoot_q2.png");
  kahootQ3 = loadImage("assets/kahoot_q3.png");
  kahootA1 = loadImage("assets/kahoot_a1.png");
  kahootA2 = loadImage("assets/kahoot_a2.png");
  kahootA3 = loadImage("assets/kahoot_a3.png");
  feudBg = loadImage("assets/family_feud_board.jpg");
  corkboard = loadImage("assets/corkboard_original.jpg");
  corkboardBg = loadImage("assets/corkboard_background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  main = createGraphics(width, height);
  bigX = createGraphics(width, height);
  main.textFont(familyFeudFont, 16);
  main.imageMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  initGlobalVars();
  initColourVars();
  initFeudVars();
  initBoardVars();
}

function draw() {
  switch(section) {
    case 0:
      startScreen();
      break;
    case 1:
      part1();
      break;
    case 2:
      part2();
      break;
    case 3:
      part3();
      break;
    case 4:
      part4And5();
      break;
  }
  image(main, width/2, height/2);
  displaySymbol("X");
}

function initGlobalVars() {
  answerField = document.getElementById("answer-field");
  submitButton = document.getElementById("submit-button");
  section = 0;
  subsection = 0;
  symbolSize = 0;
  canGoBack = false;
  canClick = false;
  nextSection = true;
}

function initColourVars() {
  transgressYellow = "#F7E34E";
  transgressRed = "#C12A3A";
  darkBlue = "#333399";
  mediumBlue = "#5481EB";
  lightBlue = "#1C2BE0";
  pinRed = "#A92E28";
  redX = width/2-500;
  redY = height/2+115;
  redBorder = "#A62A35";
  redInside = "#D03542";
  blueX = width/2+7;
  blueY = height/2+115;
  blueBorder = "#26529E";
  blueInside = "#3066C7";
  goldX = width/2-500;
  goldY = height/2+191;
  goldBorder = "#A5802B";
  goldInside = "#CFA036";
  greenX = width/2+7;
  greenY = height/2+191;
  greenBorder = "#376C21";
  greenInside = "#458729";
  hDist = 495;
  vDist = 66;
  colourInfo = {
    "red": [redX, redY, redBorder, redInside],
    "blue": [blueX, blueY, blueBorder, blueInside],
    "gold": [goldX, goldY, goldBorder, goldInside],
    "green": [greenX, greenY, greenBorder, greenInside]
  };
}

function initFeudVars() {
  tenetsQuestion = "We asked 100 grad students.\nWhat was a major tenet in\nTeaching to Transgress by bell hooks?";
  points = 0;
  incorrect = 0;
  correct = 0;
  gameOver = false;
  answerInfo = {
    // answer: [points, xValue, yValue]
    "privilege & oppression": [32, width/2-234, 205],
    "student voice": [28, width/2-234, 273],
    "lived experience": [20, width/2-234, 340],
    "critical thinking": [8, width/2-234, 407],
    "risk-taking": [5, width/2+10, 205],
    "self-actualization": [3, width/2+10, 273],
  };
}

function initBoardVars() {
  pinInfo = {
    // label: [xValue, yValue]
    "critical thinking": [width/2-400, height/2-248],
    "community": [width/2-92, height/2-248],
    "engagement": [width/2+173, height/2-248],
    "risk-taking": [width/2+386, height/2-248],
    "self-reflection": [width/2-454, height/2-186],
    "open-mindedness": [width/2-332, height/2-186],
    "student voice & power": [width/2-179, height/2-186],
    "acknowledging privilege": [width/2-3, height/2-186],
    "excitement": [width/2+127, height/2-186],
    "participation": [width/2+220, height/2-186],
    "modelling risks": [width/2+329, height/2-186],
    "encouraging risks": [width/2+458, height/2-186],
    "PPK 1": [width/2-315, height/2+72],
    "PPK 2": [width/2, height/2+226.5],
    "PPK 3": [width/2+349, height/2+72],
  }
  clickedPins = [];
}

function startScreen() { // title
  main.background(transgressYellow);
  main.fill(transgressRed);
  main.textAlign(CENTER, CENTER);
  main.textSize(25);
  main.text("Mapping Theory Onto Practice\n\nSarah Strong\nFaculty of Education, Wilfrid Laurier University\nEU 501: Investigating the Relationship Between Theory and Practice\nDr. Steve Sider\nNovember 4, 2023\n\n\nPress Enter to continue.", width/2, height/2);
  nextSection = true;
}

function part1() {
  main.background(transgressYellow);
  main.fill(transgressRed);
  main.textAlign(CENTER, CENTER);
  switch(subsection) {
    case 0:
      canGoBack = true;
      main.textSize(25);
      main.text("Part 1:\nWhat is the theory?\n\n\nPress Enter to continue.", width/2, height/2);
      break;
    case 1: // Multiple-choice Trivia
      main.textSize(20);
      main.image(kahootBg, width/2, height/2, 1049, 570);
      main.rectMode(CENTER);
      main.noStroke();
      main.fill(transgressYellow);
      main.rect(width/2, height/2, 580, 180);
      main.fill(transgressRed);
      main.text("Kahoot Trivia!\n\nThree questions about bell hooks and her theory.\n\n\nPress Enter to continue.", width/2, height/2);
      break;
    case 2: // question 1: real name
      canGoBack = false;
      canClick = true;
      main.image(kahootQ1, width/2, height/2, 1049, 570);
      highlightAnswer();
      break;
    case 3: // answer 1: real name
      main.image(kahootA1, width/2, height/2, 1049, 570);
      canClick = false;
      keepHighlightingAnswer("green");
      break;
    case 4: // question 2: Freire
      main.image(kahootQ2, width/2, height/2, 1049, 570);
      canClick = true;
      highlightAnswer();
      break;
    case 5: // answer 2: Freire
      main.image(kahootA2, width/2, height/2, 1049, 570);
      canClick = false;
      keepHighlightingAnswer("red");
      break;
    case 6: // question 3: feminist
      main.image(kahootQ3, width/2, height/2, 1049, 570);
      canClick = true;
      highlightAnswer();
      break;
    case 7: // answer 3: feminist
      main.image(kahootA3, width/2, height/2, 1049, 570);
      canClick = false;
      keepHighlightingAnswer("green");
      nextSection = true;
      break;
  }
}

function part2() {
  switch(subsection) {
    case 0:
      main.background(transgressYellow);
      main.fill(transgressRed);
      main.textAlign(CENTER, CENTER);
      main.textSize(25);
      main.text("Part 2:\nWhat main tenets are used in the work?\n\n\nPress Enter to continue.", width/2, height/2);
      break;
    case 1: // Family Feud
      main.textSize(20);
      main.image(feudBg, width/2, 80+414/2, 736, 414);
      main.rectMode(CENTER);
      main.noStroke();
      main.fill(transgressYellow);
      main.rect(width/2, height/2-70, 320, 125);
      main.fill(transgressRed);
      main.text("Family Feud!\n\n\nPress Enter to continue.", width/2, height/2-70);
      break;
    case 2:
      main.image(feudBg, width/2, 80+414/2, 736, 414);
      answerField.style.visibility = "visible";
      submitButton.style.visibility = "visible";
      main.rectMode(CENTER);
      main.fill(darkBlue);
      main.stroke(darkBlue);
      main.rect(width/2, 50, 736, 80);
      main.fill("white");
      main.textSize(16);
      main.textAlign(CENTER, TOP);
      main.text(tenetsQuestion, width/2, 20);
      main.rectMode(CORNER);
      break;
    default:
      playFeud();
      break;
  }
}

function part3() {
  main.background(transgressYellow);
  main.fill(transgressRed);
  main.textAlign(CENTER, CENTER);
  switch(subsection) {
    case 0:
      canGoBack = true;
      main.textSize(25);
      main.text("Part 3:\nWhat themes emerged in my PPKs?\n\n\nPress Enter to continue.", width/2, height/2);
      break;
    case 1:
      main.textSize(20);
      main.image(corkboard, width/2, height/2, 1049, 570);
      main.rectMode(CENTER);
      main.noStroke();
      main.fill(transgressYellow);
      main.rect(width/2, height/2, 380, 180);
      main.fill(transgressRed);
      main.text("Evidence Board!\n\nMatch the subtenet to the PPK.\n\n\nPress Enter to continue.", width/2, height/2);
      break;
    default:
      canClick = true;
      main.textSize(24);
      main.noStroke();
      main.textAlign(CENTER, TOP);
      main.text("Check out what happens when you click on the push pins for the subtenets!", width/2, 40);
      main.image(corkboardBg, width/2, height/2, 1049, 570);
      main.noFill();
      main.strokeWeight(4);
      formLine("critical thinking", "self-reflection", "black");
      formLine("critical thinking", "open-mindedness", "black");
      formLine("community", "student voice & power", "black");
      formLine("community", "acknowledging privilege", "black");
      formLine("engagement", "excitement", "black");
      formLine("engagement", "participation", "black");
      formLine("risk-taking", "modelling risks", "black");
      formLine("risk-taking", "encouraging risks", "black");
      for (let label of clickedPins) {
        showLines(label);
      }
      if (clickedPins.length == 8) {
        main.noStroke();
        main.fill(transgressRed);
        main.textSize(25);
        main.text("\n\n\n\nPress Enter to continue.", width/2, height/2+414/2);
        nextSection = true;
        canClick = false;
      }
      break;
  }
}

function part4And5() {
  switch(subsection) {
    case 0:
      nextSection = false; 
      main.background(transgressYellow);
      main.fill(transgressRed);
      main.textAlign(CENTER, CENTER);
      main.noStroke();
      main.textSize(25);
      main.text("Part 4 & 5:\n\nWhy did I choose this modality?\n\nWhat did I learn from this experience?.", width/2, height/2);
      break;
    default:
      print("here");
      main.background(transgressYellow);
      main.fill(transgressRed);
      main.textAlign(CENTER, CENTER);
      main.noStroke();
      main.textSize(40);
      main.text("Thanks for listening!\n\n\nYou may now close the webpage.", width/2, height/2);
      break;
  }
}

function highlightAnswer() {
  main.noFill();
  main.strokeWeight(15);
  if (redX <= mouseX && mouseX <= redX + hDist && redY <= mouseY && mouseY <= redY + vDist) {
    main.stroke(redBorder);
    main.rectMode(CORNER);
    main.rect(redX, redY, hDist, vDist);
  } else if (blueX <= mouseX && mouseX <= blueX + hDist && blueY <= mouseY && mouseY <= blueY + vDist) {
    main.stroke(blueBorder);
    main.rectMode(CORNER);
    main.rect(blueX, blueY, hDist, vDist);
  } else if (goldX <= mouseX && mouseX <= goldX + hDist && goldY <= mouseY && mouseY <= goldY + vDist) {
    main.stroke(goldBorder);
    main.rectMode(CORNER);
    main.rect(goldX, goldY, hDist, vDist);
  } else if (greenX <= mouseX && mouseX <= greenX + hDist && greenY <= mouseY && mouseY <= greenY + vDist) {
    main.stroke(greenBorder);
    main.rectMode(CORNER);
    main.rect(greenX, greenY, hDist, vDist);
  }
}

function keepHighlightingAnswer(correct) {
  if (guess === "") {
    return;
  }
  main.noFill();
  main.strokeWeight(15);
  guessInfo = colourInfo[guess];
  guessX = guessInfo[0];
  guessY = guessInfo[1];
  if (correct == guess) {
    guessColour = guessInfo[2];
  } else {
    guessColour = guessInfo[3];
  }
  main.stroke(guessColour);
  main.rectMode(CORNER);
  main.rect(guessX, guessY, hDist, vDist);
  main.noStroke(1);
}

function updateGuess() {
  main.noFill();
  main.strokeWeight(15);
  if (redX <= mouseX && mouseX <= redX + hDist && redY <= mouseY && mouseY <= redY + vDist) {
    guess = "red";
  } else if (blueX <= mouseX && mouseX <= blueX + hDist && blueY <= mouseY && mouseY <= blueY + vDist) {
    guess = "blue";
  } else if (goldX <= mouseX && mouseX <= goldX + hDist && goldY <= mouseY && mouseY <= goldY + vDist) {
    guess = "gold";
  } else if (greenX <= mouseX && mouseX <= greenX + hDist && greenY <= mouseY && mouseY <= greenY + vDist) {
    guess = "green";
  } else {
    guess = "";
  }
}

function playFeud(){
  if (incorrect == 3 & symbolSize == 0) {
    revealAllAnswers();
    gameOver = true;
    answerField.style.visibility = "hidden";
    submitButton.style.visibility = "hidden";
    main.noStroke();
    main.fill(transgressRed);
    main.textSize(25);
    main.text("Not bad!\n\n\nPress Enter to continue.", width/2, height/2+414/2);
    nextSection = true;
  } else if (correct == 6) {
    gameOver = true;
    answerField.style.visibility = "hidden";
    submitButton.style.visibility = "hidden";
    main.noStroke();
    main.fill(transgressRed);
    main.textSize(25);
    main.text("Well done!\n\n\nPress Enter to continue.", width/2, height/2+414/2);
    nextSection = true;
  }
}

function displaySymbol(symbol) {
  if (20 <= symbolSize && symbolSize <= 350) {
    textSize(symbolSize);
    fill(255, 0, 0);
    text(symbol, width/2, height/2-30);
    symbolSize += 3;
  } else {
    symbolSize = 0;
  }
}

function submitAnswer() {
  subsection++;
  response = answerField.value.toLowerCase();
  answer = "";
  found = false;
  for (topSix of Object.keys(answerInfo)) {
    if (topSix.includes(response)) {
      found = true;
      answer = topSix;
      break;
    }
  }
  if (response.length < 4) {
    found = false;
  }
  if (found) {
    answerField.value = "";
    showAnswer(answer);
    updatePoints(answer);
    correct++;
  } else {
    incorrect++;
    symbolSize = 20;
  }
}

function showAnswer(answer) {
  info = answerInfo[answer];
  newPoints = info[0];
  x = info[1];
  y = info[2];
  main.fill(mediumBlue);
  main.stroke(mediumBlue)
  main.rectMode(CORNER);
  main.rect(x, y, 222, 41);
  main.fill("white");
  main.textSize(14);
  main.textAlign(CENTER, CENTER);
  main.text(`${answer}\t${newPoints}`, x+111, y+20);
}

function updatePoints(answer) {
  info = answerInfo[answer];
  newPoints = info[0];
  points += newPoints;
  main.rectMode(CENTER);
  main.fill(lightBlue);
  main.stroke(lightBlue)
  main.rect(width/2-1, 142, 139, 78);
  main.fill("white");
  main.textSize(50);
  main.text(points.toString(), width/2, 135);
  main.textSize(16);
}

function revealAllAnswers() {
  for (let a of Object.keys(answerInfo)) {
    showAnswer(a);
  }
}

function formLine(label1, label2, colour) {
  main.stroke(colour);
  label1X = pinInfo[label1][0];
  label1Y = pinInfo[label1][1];
  label2X = pinInfo[label2][0];
  label2Y = pinInfo[label2][1];
  main.line(label1X, label1Y, label2X,label2Y);
}

function showLines(label) {
  switch(label) {
    case "self-reflection":
      formLine(label, "PPK 1", pinRed);
      formLine(label, "PPK 2", pinRed);
      formLine(label, "PPK 3", pinRed);
      break;
    case "open-mindedness":
      formLine(label, "PPK 1", pinRed);
      formLine(label, "PPK 2", pinRed);
      formLine(label, "PPK 3", pinRed);
      break;
    case "student voice & power":
      formLine(label, "PPK 3", pinRed);
      break;
    case "acknowledging privilege":
      formLine(label, "PPK 3", pinRed);
      break;
    case "excitement":
      formLine(label, "PPK 1", pinRed);
      formLine(label, "PPK 2", pinRed);
      formLine(label, "PPK 3", pinRed);
      break;
    case "participation":
      break;
    case "modelling risks":
      formLine(label, "PPK 2", pinRed);
      formLine(label, "PPK 3", pinRed);
      break;
    case "encouraging risks":
      formLine(label, "PPK 1", pinRed);
      formLine(label, "PPK 2", pinRed);
      formLine(label, "PPK 3", pinRed);
      break;
  }
}

function next() {
  print(`${section}.${subsection}`);
  if (nextSection) {
    section++;
    subsection = 0;
    nextSection = false;
  } else {
    subsection++;
  } 
}

function back() {
  if (subsection > 0) {
    subsection--;
  } else {
    section--;
    subsection = 0;
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    if (!canClick) {
      next();
    }
  } if (keyIsDown(ESC) && canGoBack) {
    back();
  }
}

function mouseClicked() {
  if (section == 1 && canClick) {
    if (redX <= mouseX && mouseX <= redX + hDist && redY <= mouseY && mouseY <= redY + vDist) {
      updateGuess();
    } else if (blueX <= mouseX && mouseX <= blueX + hDist && blueY <= mouseY && mouseY <= blueY + vDist) {
      updateGuess();
    } else if (goldX <= mouseX && mouseX <= goldX + hDist && goldY <= mouseY && mouseY <= goldY + vDist) {
      updateGuess();
    } else if (greenX <= mouseX && mouseX <= greenX + hDist && greenY <= mouseY && mouseY <= greenY + vDist) {
      updateGuess();
    } else {
      guess = "";
    }
    if (guess !== "" && canClick) {
      next();
    }
  } else if (section == 3 && canClick) {
    next();
    for (let label of Object.keys(pinInfo)) {
      x = pinInfo[label][0];
      y = pinInfo[label][1];
      if (dist(mouseX, mouseY, x, y) <= 20) {
        if (!clickedPins.includes(label)) {
          clickedPins.push(label);
        }
        break;
      }
    }
  }
}

// function doubleClicked() {
//   print(`${width/2-mouseX}, ${height/2-mouseY}`);
// }