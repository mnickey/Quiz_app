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
    var myScore = state.score;
    // check for null choice
    if (userChoice != null) {
        // if the user checks the correct radio button, increase state score by 1
        if (userChoice == state.questions[state.questionIndex - 1]['correctAnswer']) {
            myScore += 1;
        } else {
            // call bad answer function
        }
    }
    console.log(myScore);
    return myScore;
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
        // innerHTML += '<input class="btn btn-primary submit-btn" id="go-button2" type="submit" value="go button2">';
        event.preventDefault();
        element.append(innerHTML);

        // Questions
    } else if (state.questionIndex < (state.questions.length - 1)) {

        // Change the text on the button
        $('#go-button').val("Next Question");

        // clear the contents of the page for each question
        element.empty();
        questionText = state.questions[state.questionIndex]['text'];
        innerHTML = '<p class="question-text" >' + questionText + '</p><label class="radioChoice" id="rChoice">';

        // loop over the questions in the array and populate the html
        for (var i = 0; i < state.questions[state.questionIndex]['answers'].length; i++) {
            myValue = state.questions[state.questionIndex]['answers'][i];
            innerHTML += ' <input type="radio" name="answer" value="' + myValue + '" required >' +
                ' ' + state.questions[state.questionIndex]['answers'][i] + '<br>';
        }
        innerHTML += '</label>';
        // $('#go-button').addClass('hidden');

        // Score each answer
        state.score = scoreAnswer(state, userChoice);
        // increment index
        state.questionIndex += 1;
        // innerHTML += '<input class="btn btn-primary submit-btn" id="go-button2" type="submit" value="go button2">';
        element.append(innerHTML);

    } else {
        state.score = scoreAnswer(state, userChoice);
        innerHTML = '<p class="question-text" > You answered ' + state.score + ' questions correctly.</p>';
        // console.log(state.score);
        element.empty();

        // add function call to restart quiz
        // keep the next two lines uncommented to repeat until function is created
        state.questionIndex = 0;
        state.score = 0;
        // innerHTML += '<input class="btn btn-primary submit-btn" id="go-button2" type="submit" value="go button2">';
        $('#go-button').val('Restart Quiz');
        element.append(innerHTML);
    }
    // element.append(innerHTML);
};

// Document ready
$(document).ready(function () {

    // Event Listeners
    // Listen to Go Button
    $('.opening-text').on('click', '#go-button', function (event) {
        event.preventDefault();
        renderQuiz(state, $('.question-text'));
    });

    // Listen to radio button - hide submit button when none selected
    $('.radioChoice').on('click', 'input[type="radio"]', function(event) {
        event.preventDefault();
        if(state.questionIndex > 1) {
            if ($(this).is(':checked')) {
                $('#go-button').prop('disabled', false).removeClass('hidden');
            }
        } else {
            $('#go-button').prop('disabled', true).addClass('hidden');
        }
    });

    // JQuery validation
    $("form[name='myForm']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            answer: "required"
        },
        // Specify validation error messages
        messages: {
            answer: "Please select an option"
        }
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        // submitHandler: function(form) {
        //     form.submit();
        // }
    });

});

// TODO: add a way to reset the quiz
// TODO: add progress bar
// TODO: hide button on last question, show re-do question (.toggleClass)
// TODO: add final score
