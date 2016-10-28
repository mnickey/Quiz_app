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
var scoreAnswer = function (state, userChoice) {
    // if the user checks the correct radio button, increase state score by 1
    if (userChoice == state.questions[state.questionIndex]['correctAnswer']) {
        console.log("User choice: " + userChoice);
        console.log("Correct Answer: " + state.questions[state.questionIndex]['correctAnswer']);
        state.score++;
        console.log(state.score);
    } else {
        console.log("User choice: " + userChoice);
        console.log("Correct Answer: " + state.questions[state.questionIndex]['correctAnswer']);
        console.log(state.score);
    }
    return state.score;
};

// Render function
var renderQuiz = function (state, element) {
    var innerHTML;
    var questionText;
    var userChoice = $("input[type=radio]:checked").val();

    if (state.questionIndex == 0 || state.questionIndex == '') {
        // Opening
        element.empty();
        questionText = state.questions[0]['text'];
        innerHTML = '<p class="question-text" >' + questionText + '</p>';
        state.questionIndex = 1;
        $('#go-button').val("Let's begin");

        // Questions
    } else if (state.questionIndex < (state.questions.length - 1)) {
        // remove button until an item is checked
        if ($('input[name=answer]:checked').size <= 0) {
            $('#go-button').addClass('hidden');
        } else {
            $('#go-button').removeClass('hidden');
        }

        $('#go-button').val("Next Question");
        element.empty(); // clear the contents of the page for each question
        questionText = state.questions[state.questionIndex]['text'];
        innerHTML = '<p class="question-text" >' + questionText + '</p>';

        // loop over the questions in the array and populate the html
        for (var i = 0; i < state.questions[state.questionIndex]['answers'].length; i++) {
            myValue = state.questions[state.questionIndex]['answers'][i];
            innerHTML += '<input type="radio" name="answer" value=' + myValue + '>' +
                '</label>' + ' ' + state.questions[state.questionIndex]['answers'][i] + '<br>';
        }
        // Score each answer
        scoreAnswer(state, userChoice);
        // increment index
        state.questionIndex += 1;

    } else {
        element.empty();
        state.questionIndex = 0;
        state.score = 0;
        $('#go-button').val('Restart Quiz');
    }
    element.append(innerHTML);
};

// Document ready
$(document).ready(function () {

    // Event Listeners
    $('.opening-text').on('click', '#go-button', function (event) {
        event.preventDefault();
        renderQuiz(state, $('.question-text'));
    });

    // TODO: figure out why userChoice is undefined after selecting a radio button until submit is clicked
    // TODO: add a way to reset the quiz
    // TODO: add progress bar
    // TODO: hide button on last question, show re-do question (.toggleClass)
    // TODO: add final score
});

// question : "When is a wine ready to be bottled?",
//     answers:
// [ { text: "Depends on the winemaking style", correct: true },
//     { text: "Before it spoils", correct: false },
//     { text: "When it tastes good", correct: false },
//     { text: "Spring", correct: false } ]
