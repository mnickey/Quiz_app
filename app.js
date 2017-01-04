/**
 * Created by MNickey on 12/27/16.
 */

// state objects
let divs = document.querySelectorAll(`.container div`);
let state = {
    count: 0,
    answers: ["b", "a", "d", "b", "d"], // Set Correct Answers
    score: 0,
    total: 5
};

// Validation
// for (let valid = 1; valid <= total; valid++) {
//     if (eval('q' + valid) == null || eval('q' + valid) == '') {
//         alert('You missed question ' + valid);
//         return false;
//     }
// }

// Display Score
function displayScore(state) {
    let results = document.getElementById('q6');
    results.innerHTML = '<h3>You scored <span>' + state.score + '</span> out of <span>' + state.total + '</span></h3>';
}

function checkAnswer(state) {
    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;
    let q3 = document.forms["quizForm"]["q3"].value;
    let q4 = document.forms["quizForm"]["q4"].value;
    let q5 = document.forms["quizForm"]["q5"].value;

    state.score = 0;

    for (let check = 1; check <= state.total; check++) {
        if (eval('q' + check) == state.answers[check - 1]) {
            state.score++;
        }
    }
    console.log('score: ' + state.score);
    return state.score;
}

function resetQuiz(state) {
    state.count = 0;
    state.score = 0;
    return state;
}

function changeButtonText(state) {
    if (state.count <= 1 && state.count < 5) {
        $('.submit-btn').val('Display next question');
    }
    else if (state.count == 5) {
        $('.submit-btn').val('show score');
    }
    else if (state.count > 5) {
        $('.submit-btn').val('retake quiz');
        displayScore(state);
        resetQuiz(state);
    }
}

// submit-btn preventing default action and changing text
$('.submit-btn').click(function (event) {
    event.preventDefault();

    divs.forEach(ea => ea.classList.add('hidden'));
    state.count = state.count < divs.length - 1 ? state.count + 1 : 0;
    divs[state.count].classList.remove('hidden');

    checkAnswer(state);
    changeButtonText(state);
});
