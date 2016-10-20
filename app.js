/**
 * Created by MNickey on 10/19/16.
 */

// State object
var state = {
    questions: [
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

// Document ready
$(document).ready(function () {
    console.log("ready");
    console.log($('#go-button').val()); // get the text of the button
    // var btn_text = $('#go-button').val('whee'); // change the text of the button
    // console.log($('#go-button').val()); // log in console to check
});
