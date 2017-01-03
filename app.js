/**
 * Created by MNickey on 12/27/16.
 */

// state objects
let divs = document.querySelectorAll(`.container div`);
let button = document.querySelectorAll('btn');

let state = {
    count: 0
    // divs: document.querySelectorAll('.container div'),
    // button : document.querySelector(`btn`)
};

function submitAnswers() {
    let total = 5;
    let score = 0;

    // Get User Input
    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;
    let q3 = document.forms["quizForm"]["q3"].value;
    let q4 = document.forms["quizForm"]["q4"].value;
    let q5 = document.forms["quizForm"]["q5"].value;

    // Validation

    for (let valid = 1; valid <= total; valid++) {
        if (eval('q' + valid) == null || eval('q' + valid) == '') {
            alert('You missed question ' + valid);
            return false;
        }
    }

    // Set Correct Answers
    let answers = ["b", "a", "d", "b", "d"];

    // Check Answers
    for (let check = 1; check <= total; check++) {
        if (eval('q' + check) == answers[check - 1]) {
            score++;
        }
    }

// Display Results

    let results = document.getElementById('score');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You scored ' + score + ' out of ' + total);
    return false;
}

function changeButtonText(state) {
    if (state.count <= 1 && state.count < 5) {
        console.log('IF: The state.count is ' + state.count);
        $('.submit-btn').val('Display next question');
    }
    else if (state.count == 5) {
        console.log('ELSE IF: The state.count is ' + state.count);
        $('.submit-btn').val('show score');
    }
    else if (state.count > 5) {
        console.log('ELSE: the state.count is ' + state.count);
        $('.submit-btn').val('retake quiz');
        state.count = 0;
    }
}

// submit-btn preventing default action and changing text
$('.submit-btn').click(function (event) {
    // $(this).val("Display next question");
    event.preventDefault();

    divs.forEach(ea => ea.classList.add('hidden'));
    state.count = state.count < divs.length - 1 ? state.count + 1: 0;
    divs[state.count].classList.remove('hidden');
    changeButtonText(state);
});

// $('.btn').addEventListener('click', function (state) {
    // divs.forEach(ea => ea.classList.add('hidden'));
    // state.count = state.count < divs.length - 1 ? state.count + 1: 0;
    // divs[state.count].classList.remove('hidden');
// });

