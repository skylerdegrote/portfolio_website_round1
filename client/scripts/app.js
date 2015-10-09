/**
 * Created by Skyler DeGrote on 10/6/15.
 */
/* client side app.js */

//variables here
var quotes = [
    "Nothing is too small to know, and nothing is too big to attempt",
    "Let your smile change the world, but don't let the world change your smile",
    "Don't go through life. grow through life",
    "Honor the past, live in the present, create the future",
    "Learn from yesterday, live for today, look to tomorrow...rest this afternoon",
    "Optimism is the faith that leads to achievement",
    "Always end the day with a positive thought",
    "Let the beauty of what you love be what you do",
    "Sometimes you need those bad days to help you appreciate the good ones",
    "The best job is when you can't wait for them to tell what to do, because you really love doing it",
    "Be thankful for what you have",
    "Just because you have a bad day, doesn't mean you have a bad life",
    "Smile, you are wiser today than you were yesterday",
    "Intelligence without ambition is a bird without wings",
    "Don't give up what you want most for what you want now",
    "Coming together is a beginning, staying together is progress, working together is success",
    "Each thought we think, and each word we speak and write, has a life of its own",
    "The privilege of a lifetime is being who you are",
    "Happiness isn't getting all you want, it's enjoying all you have",
    "Be the best version of you",
    "Do a little more each day than you think you can",
    "Sometimes the questions are complicated and the answers are simple",
    "Change your thoughts and you will change your world",
    "Handle your past without regret. handle the present with confidence. prepare for the future without fear",
    "Create the highest, grandest vision for your life, because you become what you believe",
    "Life was much easier when apple and blackberry were just fruits",
    "Nothing is 'impossible', the word itself says 'I'm Possible'",
    "Be as simple as you can be",
    "When we see depends mainly on what we look for",
    "With the new day, comes new strength and new thoughts",
    "If you're waiting for a sign, this is it",
    "The two most important days in your life are the day you are born and the day you find out why",
    "Ideas create revolutions",
    "Don't be afraid of failure, be afraid of not trying",
    "Just keep swimming, swimming swimming",
    "It's not how much you know, it's how much you do",
    "I used to dream about the life I'm living now, I know that there's no doubt...I made it!",
    "Part of living your life to the fullest is dreaming as big as you can"
];
var min = 0;
var max = quotes.length - 1;
var randomNumber = Math.round(Math.random(0, 37) * 101);






//doc ready here
$(document).ready(function(){
    $("body").on("click", ".designPieces", function(){
       console.log("clicked the porfolio design piece")
    });

    var i = 0;
    while(i < max){
        if(quotes[randomNumber]===undefined){
            $('.quote').html(quotes[14]);
        }else{
            $('.quote').html(quotes[randomNumber]);
        }
        i++;
    }


});//end doc ready



//functions here

