// Input Quiz 

// Input Button Listner
document.getElementById("submit").addEventListener("click", markquiz);
let score = 0;

// Funtion to Command Code
function markquiz() {
    
    let feedback = "";

// Answer 1

let useranswer1 = document.getElementById("answer1").value;
console.log(useranswer1);
if (useranswer1 === "every 4 years") {
    score++;
    feedback += "<p>Question 1: Correct!</p>";     
} else if (useranswer1 === "Every 4 years") {
    feedback += "<p>Question 1: correct!</p>";
score++;
} else {
    feedback += 
    "<p>Question 1: Incorrect The correct answer is Every 4 years or every 4 years.</p>";
}




// Answer 2

let useranswer2 = document.getElementById("answer2").value;
if (useranswer2 === "Team Argentina") {
    score++;
    feedback += "<p>Question 2: Correct!</p>";     
} else if (useranswer2 === "Argentina") {
    feedback += "<p>Question 2: correct!</p>";
score++;
} else {
    feedback += 
    "<p>Question 2: Incorrect The correct answer is Team Argentina or Argentina.</p>";
}

// Answer 3
let useranswer3 = document.getElementById("answer3").value;
if (useranswer3 === "90 minutes") {
    score++;
    feedback += "<p>Question 3: Correct!</p>";     
} else if (useranswer3 === "1 hour and 30 minutes") {
    feedback += "<p>Question 3: correct!</p>";
score++;
} else {
    feedback += 
    "<p>Question 3: Incorrect The correct answer is 90 minutes or 1 Hour and 30 Minutes.</p>";
}

// Answer4
let useranswer4 = document.getElementById("answer4").value;
if (useranswer4 === "1930") {
    score++;
    feedback += "<p>Question 4: Correct!</p>";     
} else if (useranswer4 === "in the year 1930") {
    feedback += "<p>Question 4: correct!</p>";
score++;
} else {
    feedback += 
    "<p>Question 4: Incorrect The correct answer is 1930 or in the year 1930.</p>";
}

// Encouragment for marks
let percentage = Math.round((score/4) * 100 )
let ScoreText = `<br>You  got ${score}/4 (${percentage})`;

if (percentage >= 75) {
feedback += "<p>good job =).</p>";
} else if (percentage >= 50) {
feedback += "<p>keep practicing!</p>";
} else {
    feedback += "<p>Keep practicing!</p>";
}

// Score Output
  document.getElementById("results").innerHTML = ScoreText + feedback;
}






