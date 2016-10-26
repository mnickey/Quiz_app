/**
 * Created by MNickey on 10/19/16.
 */

// State object
var state = {
    questions: [
        {
            text: "Welcome to my quiz on Hawaii. Let's see what you know about the islands. Mahalo"
        },
        {
            text: "The string of flowers sewn together and tied at the ends to form a circle is called a",
            answers: ["lei", "rosary", "poi", "hula", "crea"],
            correctAnswer: "lei"
        },
        {
            text: "How many letters are in the Hawaiian alphabet??",
            answers: ["26", "19", "12/13", "17", "21"],
            correctAnswer: "12/13"
        },
        {
            text: "The ship that was sunk on the Pearl Harbor attack is called:",
            answers: ["California", "Texas", "Arizona", "Deleware", "Maine"],
            correctAnswer: "Arizona"
        },
        {
            text: "Hawaii is the only U.S. state that grows...",
            answers: ["marijuana", "coffee", "tea", "oranges", "grapefruit"],
            correctAnswer: "coffee"
        },
        {
            text: "How many cans of Spam do Hawaiians eat each year?",
            answers: ["400,000", "1,000,000", "750,000", "6,000,000", "2,000,000"],
            correctAnswer: "6,000,000"
        },
        {
            text: "Hawaii is the only US state with a ...",
            answers: ["tropical rain forest", "olympic surf team", "volcano", "king", "spam plant"],
            correctAnswer: "tropical rain forest"
        }],
    score: 0,
    questionIndex: 0
};

// score quiz

// Render function
var renderQuiz = function (state, element) {
    console.log(state.questionIndex);
    var innerHTML;
    var questionText;
    // var choices = '<label>' +
    //     '<input type="radio" name="gender" value="male" checked>' +
    //     '</label> Male<br>' +
    //     '<label>' +
    //     '<input type="radio" name="gender" value="female">' +
    //     '</label> Female<br>' +
    //     '<label>' +
    //     '<input type="radio" name="gender" value="other">' +
    //     '</label> Other<br>';

    if (state.questionIndex == 0 || state.questionIndex == '') {
        // Opening
        element.empty();
        questionText = state.questions[0]['text'];
        innerHTML = '<p class="question-text" >' + questionText + '</p>';

        // score quiz here
        state.questionIndex = 1;

        // Questions
    } else if (state.questionIndex < (state.questions.length - 1)) {
        element.empty(); // clear the contents of the page for each question
        questionText = state.questions[state.questionIndex]['text'];
        innerHTML = '<p class="question-text" >' + questionText + '</p>';
        // loop over the questions in the array and populate the html
        for (var i = 0; i < state.questions[state.questionIndex]['answers'].length; i++) {
            innerHTML += '<input type="radio" name="answer" value="other">' +
                '</label>' + ' ' + state.questions[state.questionIndex]['answers'][i] + '<br>';
        }
        console.log(innerHTML);
        state.questionIndex += 1;

        // restart or grade the quiz
    } else {
        element.empty();
        state.questions.questionIndex = 0;
    }
    element.append(innerHTML);
};

// Document ready
$(document).ready(function () {
    // initalize state object
    // Event Listeners
    $('.opening-text').on('click', '#go-button', function (event) {
        event.preventDefault();
        renderQuiz(state, $('.question-text'));
    });

    // reset the quiz
    // TODO: add progress bar
    // TODO: add new text to button instead of start quiz (.val)
    // TODO: hide button on last question, show re-do question (.toggleClass)
    // TODO: add final score
});

// question : "When is a wine ready to be bottled?",
//     answers:
// [ { text: "Depends on the winemaking style", correct: true },
//     { text: "Before it spoils", correct: false },
//     { text: "When it tastes good", correct: false },
//     { text: "Spring", correct: false } ]
