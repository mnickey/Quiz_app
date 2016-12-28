/**
 * Created by MNickey on 12/27/16.
 */

function submitAnswers() {
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for (var valid = 1; valid <= total; valid++) {
        if (eval('q' + valid) == null || eval('q' + valid) == '') {
            alert('You missed question ' + valid);
            return false;
        }
    }

    // Set Correct Answers
    var answers = ["b", "a", "d", "b", "d"];

    // Check Answers
    for (var check = 1; check <= total; check++) {
        if (eval('q' + check) == answers[check - 1]) {
            score++;
        }
    }

    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You scored ' + score + ' out of ' + total);

    return false;
}

// Document ready
$(document).ready(function () {
    console.log('asdasd');
});

