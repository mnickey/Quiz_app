/**
 * Created by MNickey on 10/19/16.
 */

// State object
var state = {
    questions: [{
        text: "What is the largest prime number listed?",
        answers: ["31", "27", "29", "23"],
        correctAnswer: "29"
    },
    {
        text: "How many letters are in the Hawaiian alphabet??",
        answers: ["26", "19", "12/13", "17"],
        correctAnswer: "12/13"
    }],
    score: 0,
    questionIndex: 0
};

// Document ready
$(document).ready(function () {
    console.log("ready");
});
