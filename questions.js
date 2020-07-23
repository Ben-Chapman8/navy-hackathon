$(document).ready(function(){
    $("#gameover").hide()
    if(true){
        var lit1 = ["This author is best known for writing the Harry Potter series.", "JK Rowling", "literature", 100, true];
        var lit2 = ["Don Quixote was originally written in this language.", "Spanish", "literature", 200, true];
        var lit3 = ["This character was the mentor for Katniss and Peeta in The Hunger Games.", "Haymitch", "Literature", 300, true];
        var lit4 = ["Upton Sinclair refers to the Chicago stockyards as Packingtown in this 1906 novel.", "The Jungle", "Literature", 400, true];
        var lit5 = ["F. Scott Fitzgerald died with this fifth novel unfinished.", "The Love of the Last Tycoon", "Literature", 500, true];

        var sci1 = ["About one-millionth as bright as our sun, these small red stars are also known as flare stars.", "Dwarf Stars", "Science", 100, true];
        var sci2 = ["This physics term refers to the study of extremely low temperatures.", "Cryogenics", "Science", 200, true];
        var sci3 = ["Light energy can be studied as these massless quantum units.", "Photons", "Science", 300, true];
        var sci4 = ["Compounds that have the same molecular formula but have different molecular structures.", "Isomer", "Science", 400, true];
        var sci5 = ["Elements that have the same atomic number but varying numbers of neutrons that are unstable (nucleus does not remain intact) and give off energy as they try to become stable.", "Radioactive Isotopes", "Science", 500, true];

        var hist1 = ["The Statue of Liberty was a gift to the United States of America from this European country.", "France", "World History", 100, true];
        var hist2 = ["Ever since World War II, this beverage’s equipment has been furnished in British battle tanks.", "Tea", "World History", 200, true];
        var hist3 = ["Victorians said the name of this fruit before having their picture taken instead of the word “cheese”.", "Prunes", "World History", 300, true];
        var hist4 = ["The Nobel Peace Prize was first organized and started by Alfred Nobel to replace the legacy he had created by discovering this weapon.", "Dynamite", "World History", 400, true];
        var hist5 = ["James Cook led and commanded this ship when he discovered Australia.", "HMS Endeaver", "World History", 500, true];

        var music1 = ["In a Khalid song about high school kids, these 2 title adjectives follow Young.", "Dumb and Broke", "Music", 100, true];
        var music2 = ["This mechanical device is used by musicians to keep time.", "Metronome", "Music", 200, true];
        var music3 = ["In 2004, this artist won a song of the year Grammy for Daughters.", "John Mayer", "Music", 300, true];
        var music4 = ["In 2018, this artist announced that his 3-year Farewell Yellow Brick Road tour would be his last.", "Elton John", "Music", 400, true];
        var music5 = ["In 1826, at just 17, he produced the dazzling Midsummer Night's Dream Overture.", "Felix Mendelssohn", "Music", 500, true];

        var sports1 = ["The Olympics are held once every this amount of years.", "Four", "Sports", 100, true];
        var sports2 = ["This woman has won the most tennis grand slams.", "Serena Williams", "Sports", 200, true];
        var sports3 = ["This sport is Canada's national sport.", "Lacrosse", "Sports", 300, true];
        var sports4 = ["This American Football team won the first two Super Bowls.", "Green Bay Packers", "Sports", 400, true];
        var sports5 = ["This country won the first ever soccer World Cup in 1930.", "Uruguay", "Sports", 500, true];

        var movies1 = ["The snowman from the movie Frozen is named this.", "Olaf", "Movies", 100, true];
        var movies2 = ["The films in the Spider-Man series are set in this state.", "New York", "Movies", 200, true];
        var movies3 = ["The name of Simba's father in The Lion King is this.", "Mufasa", "Movies", 300, true];
        var movies4 = ["This director is best known for his work on Titanic.", "James Cameron", "Movies", 400, true];
        var movies5 = ["When adjusted for inflation, this is the highest grossing movie of all time.", "Gone with the Wind", "Movies", 500, true];
    }

    var questions = 30;
    var player1points = 0;
    var player2points = 0;
    var turn = 0;


    function checkAnswer(guess, correctAnswer){
        if(guess == "4"){
            guess = "four";
        }
        answer = correctAnswer[1].toLowerCase();
        guess = guess.toLowerCase();

        return (guess === answer);
    }
    function points(turnNum, question){
        if(turnNum % 2 ==0){
            player1points += question[3];
            $("#player1box").text("Player 1: " + player1points + " points");
        }
        else {
            player2points += question[3];
            $("#player2box").text("Player 2: " + player2points + " points");
        }
    }
    function getAnswer(){
        var input = $("#userInput").val();
        return (input);
    }


    var question;
    var questionID;
    var guessing = false;
    if(questions > 0){

        function alternator(x) {
            if(x % 2 == 0) {
                document.getElementById("player1box").style.color = "white";
                document.getElementById("player2box").style.color = "green";
            }
            else {
                document.getElementById("player2box").style.color = "white";
                document.getElementById("player1box").style.color = "green";
            }
        }
        $("#submit").on("click", function(){
            alternator(questions);
            var guess = getAnswer();
            if(checkAnswer(guess, question)){
                points(turn, question);
                questions--;
                question[4] = false;
                $(questionID).css("color", "#060CE9");
                $(questionID).css("text-shadow", "#060CE9");
                $("#questionBox").text("");
                document.getElementById("questionsbox").textContent = ("Questions left: " + questions);
            }
            turn++;
            guessing = false;
            document.getElementById("userInput").value = "";
        });
        $("#Literature-1").on("click", function(){
            if(lit1[4] && !guessing){
                question = lit1;
                $("#questionBox").text(""+question[0]);
                questionID = "#Literature-1";
                lit1[4] = false;
                guessing = true;
            }
        })

        $("#Literature-2").on("click", function(){
            if(lit2[4] && !guessing){
                question = lit2;
                $("#questionBox").text(""+question[0]);
                questionID = "#Literature-2";
                lit2[4] = false;
                guessing = true;
            }
        })

        $("#Literature-3").on("click", function(){
            if(lit3[4] && !guessing){
                question = lit3;
                $("#questionBox").text(""+question[0]);
                questionID = "#Literature-3";
                lit3[4] = false;
                guessing = true;
            }
        })

        $("#Literature-4").on("click", function(){
            if(lit4[4] && !guessing){
                question = lit4;
                $("#questionBox").text(""+question[0]);
                questionID = "#Literature-4";
                lit4[4] = false;
                guessing = true;
            }
        })

        $("#Literature-5").on("click", function(){
            if(lit5[4] && !guessing){
                question = lit5;
                $("#questionBox").text(""+question[0]);
                questionID = "#Literature-5";
                lit5[4] = false;
                guessing = true;
            }
        })

        $("#Science-1").on("click", function(){
            if(sci1[4] && !guessing){
                question = sci1;
                $("#questionBox").text(""+question[0]);
                questionID = "#Science-1";
                sci1[4] = false;
                guessing = true;
            }
        })

        $("#Science-2").on("click", function(){
            if(sci2[4] && !guessing){
                question = sci2;
                $("#questionBox").text(""+question[0]);
                questionID = "#Science-2";
                sci2[4] = false;
                guessing = true;
            }
        })

        $("#Science-3").on("click", function(){
            if(sci3[4] && !guessing){
                question = sci3;
                $("#questionBox").text(""+question[0]);
                questionID = "#Science-3";
                sci3[4] = false;
                guessing = true;
            }
        })

        $("#Science-4").on("click", function(){
            if(sci4[4] && !guessing){
                question = sci4;
                $("#questionBox").text(""+question[0]);
                questionID = "#Science-4";
                sci4[4] = false;
                guessing = true;
            }
        })

        $("#Science-5").on("click", function(){
            if(sci5[4] && !guessing){
                question = sci5;
                $("#questionBox").text(""+question[0]);
                questionID = "#Science-5";
                sci5[4] = false;
                guessing = true;
            }
        })

        $("#History-1").on("click", function(){
            if(hist1[4] && !guessing){
                question = hist1;
                $("#questionBox").text(""+question[0]);
                questionID = "#History-1";
                hist1[4] = false;
                guessing = true;
            }
        })

        $("#History-2").on("click", function(){
            if(hist2[4] && !guessing){
                question = hist2;
                $("#questionBox").text(""+question[0]);
                questionID = "#History-2";
                hist2[4] = false;
                guessing = true;
            }
        })

        $("#History-3").on("click", function(){
            if(hist3[4] && !guessing){
                question = hist3;
                $("#questionBox").text(""+question[0]);
                questionID = "#History-3";
                hist3[4] = false;
                guessing = true;
            }
        })

        $("#History-4").on("click", function(){
            if(hist4[4] && !guessing){
                question = hist4;
                $("#questionBox").text(""+question[0]);
                questionID = "#History-4";
                hist4[4] = false;
                guessing = true;
            }
        })

        $("#History-5").on("click", function(){
            if(hist5[4] && !guessing){
                question = hist5;
                $("#questionBox").text(""+question[0]);
                questionID = "#History-5";
                hist5[4] = false;
                guessing = true;
            }
        })

        $("#Music-1").on("click", function(){
            if(music1[4] && !guessing){
                question = music1;
                $("#questionBox").text(""+question[0]);
                questionID = "#Music-1";
                music1[4] = false;
                guessing = true;
            }
        })

        $("#Music-2").on("click", function(){
            if(music2[4] && !guessing){
                question = music2;
                $("#questionBox").text(""+question[0]);
                questionID = "#Music-2";
                music2[4] = false;
                guessing = true;
            }
        })

        $("#Music-3").on("click", function(){
            if(music3[4] && !guessing){
                question = music3;
                $("#questionBox").text(""+question[0]);
                questionID = "#Music-3";
                music3[4] = false;
                guessing = true;
            }
        })

        $("#Music-4").on("click", function(){
            if(music4[4] && !guessing){
                question = music4;
                $("#questionBox").text(""+question[0]);
                questionID = "#Music-4";
                music4[4] = false;
                guessing = true;
            }
        })

        $("#Music-5").on("click", function(){
            if(music5[4] && !guessing){
                question = music5;
                $("#questionBox").text(""+question[0]);
                questionID = "#Music-5";
                music5[4] = false;
                guessing = true;
            }
        })

        $("#Sports-1").on("click", function(){
            if(sports1[4] && !guessing){
                question = sports1;
                $("#questionBox").text(""+question[0]);
                questionID = "#Sports-1";
                sports1[4] = false;
                guessing = true;
            }
        })

        $("#Sports-2").on("click", function(){
            if(sports2[4] && !guessing){
                question = sports2;
                $("#questionBox").text(""+question[0]);
                questionID = "#Sports-2";
                sports2[4] = false;
                guessing = true;
            }
        })

        $("#Sports-3").on("click", function(){
            if(sports3[4] && !guessing){
                question = sports3;
                $("#questionBox").text(""+question[0]);
                questionID = "#Sports-3";
                sports3[4] = false;
                guessing = true;
            }
        })

        $("#Sports-4").on("click", function(){
            if(sports4[4] && !guessing){
                question = sports4;
                $("#questionBox").text(""+question[0]);
                questionID = "#Sports-4";
                sports4[4] = false;
                guessing = true;
            }
        })

        $("#Sports-5").on("click", function(){
            if(sports5[4] && !guessing){
                question = sports5;
                $("#questionBox").text(""+question[0]);
                questionID = "#Sports-5";
                sports5[4] = false;
                guessing = true;
            }
        })

        $("#Movies-1").on("click", function(){
            if(movies1[4] && !guessing){
                question = movies1;
                $("#questionBox").text(""+question[0]);
                questionID = "#Movies-1";
                movies1[4] = false;
                guessing = true;
            }
        })

        $("#Movies-2").on("click", function(){
            if(movies2[4] && !guessing){
                question = movies2;
                $("#questionBox").text(""+question[0]);
                questionID = "#Movies-2";
                movies2[4] = false;
                guessing = true;
            }
        })

        $("#Movies-3").on("click", function(){
            if(movies3[4] && !guessing){
                question = movies3;
                $("#questionBox").text(""+question[0]);
                questionID = "#Movies-3";
                movies3[4] = false;
                guessing = true;
            }
        })

        $("#Movies-4").on("click", function(){
            if(movies4[4] && !guessing){
                question = movies4;
                $("#questionBox").text(""+question[0]);
                questionID = "#Movies-4";
                movies4[4] = false;
                guessing = true;
            }
        })

        $("#Movies-5").on("click", function(){
            if(movies5[4] && !guessing){
                question = movies5;
                $("#questionBox").text(""+question[0]);
                questionID = "#Movies-5";
                movies5[4] = false;
                guessing = true;
            }
        })
    }

    $(document).on("click", function(){
    if(questions <= 0){
        
        $("#gameover").show();
        if(player1points > player2points){    
            $("#gameover").text("Player 1 wins with " + player1points + " points!");
        }
        else if(player1points < player2points){    
            $("#gameover").text("Player 2 wins with " + player2points + " points!");
        }
        else {    
            $("#gameover").text("It's a tie with " + player2points + " points for both players!");
        }
    }});
});
