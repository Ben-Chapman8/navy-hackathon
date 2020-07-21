var lit1 = ["This author is best known for writing the Harry Potter series.", "JK Rowling", "literature", 100, true];
var lit2 = ["Don Quixote was originally written in this language.", "Spanish", "literature", 200, true];
var lit3 = ["This character was the mentor for Katniss and Peeta in The Hunger Games.", "Haymitch", "Literature", 300, true];
var lit4 = ["Upton Sinclair refers to the Chicago stockyards as Packingtown in this 1906 novel.", "The Jungle", "Literature", 400, true];
var lit5 = ["F. Scott Fitzgerald died with this fifth novel unfinished.", "The Love of the Last Tycoon", "Literature", 500, true];

var sci1 = ["About one-millionth as bright as our sun, these small red stars are also known as flare stars.", "Dwarf Stars", "Science", 100, true];
var sci2 = ["This physics term refers to the study of extremely low temperatures.", "Cryogenics", "Science", 200, true];
var sci3 = ["Light energy can be studied as these massless quantum units.", "Photons", "Science", 300, true];
var sci4 = ["Compounds that have the same molecular formula but have different molecular structures?", "Isomer", "Science", 400, true];
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
var sports2 = ["This woman has won the most tennis grand slams.", "Serene Williams", "Sports", 200, true];
var sports3 = ["This sport is Canada's national sport.", "Lacrosse", "Sports", 300, true];
var sports4 = ["This American Football team won the first two Super Bowls.", "Green Bay Packers", "Sports", 400, true];
var sports5 = ["This country won the first ever soccer World Cup in 1930.", "Uruguay", "Sports", 500, true];

var movies1 = ["The snowman from the movie Frozen is named this.", "Olaf", "Movies", 100, true];
var movies2 = ["The films in the Spider-Man series are set in this state.", "New York", "Movies", 200, true];
var movies3 = ["The name of Simba's father in The Lion King is this.", "Mufasa", "Movies", 300, true];
var movies4 = ["This director is best known for his work on Titanic.", "James Cameron", "Movies", 400, true];
var movies5 = ["When adjusted for inflation, this is the highest grossing movie of all time.", "Gone with the Wind", "Movies", 500, true];

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
function points(numQ, question){
    if(numQ % 2 ==0){
        player1points += question[3];
    }
    else {
        player2points += question[3];
    }
}
while(questions > 0){

    $("#literature-1").on("click", function(){
        var guess = prompt(lit1[0]);
        if(checkAnswer(guess, lit1)){
            points(turn, lit1);
            questions--;
            lit1[4] = false;
            $("#literature-1").text("");
        }
        turn++;
    })

    $("#literature-2").on("click", function(){
        var guess = prompt(lit2[0]);
        if(checkAnswer(guess, lit2)){
            points(turn, lit2);
            questions--;
            lit2[4] = false;
            $("#literature-2").text("");
        }
        turn++;
    })

    $("#literature-3").on("click", function(){
        var guess = prompt(lit3[0]);
        if(checkAnswer(guess, lit3)){
            points(turn, lit3);
            questions--;
            lit3[4] = false;
            $("#literature-3").text("");
        }
        turn++;
    })

    $("#literature-4").on("click", function(){
        var guess = prompt(lit4[0]);
        if(checkAnswer(guess, lit4)){
            points(turn, lit4);
            questions--;
            lit4[4] = false;
            $("#literature-4").text("");
        }
        turn++;
    })

    $("#literature-5").on("click", function(){
        var guess = prompt(lit5[0]);
        if(checkAnswer(guess, lit5)){
            points(turn, lit5);
            questions--;
            lit5[4] = false;
            $("#literature-5").text("");
        }
        turn++;
    })

    $("#science-1").on("click", function(){
        var guess = prompt(sci1[0]);
        if(checkAnswer(guess, sci1)){
            points(turn, sci1);
            questions--;
            sci1[4] = false;
            $("#science-1").text("");
        }
        turn++;
    })

    $("#science-2").on("click", function(){
        var guess = prompt(sci2[0]);
        if(checkAnswer(guess, sci2)){
            points(turn, sci2);
            questions--;
            sci2[4] = false;
            $("#science-2").text("");
        }
        turn++;
    })

    $("#science-3").on("click", function(){
        var guess = prompt(sci3[0]);
        if(checkAnswer(guess, sci3)){
            points(turn, sci3);
            questions--;
            sci3[4] = false;
            $("#science-3").text("");
        }
        turn++;
    })

    $("#science-4").on("click", function(){
        var guess = prompt(sci4[0]);
        if(checkAnswer(guess, sci4)){
            points(turn, sci4);
            questions--;
            sci4[4] = false;
            $("#science-4").text("");
        }
        turn++;
    })

    $("#science-5").on("click", function(){
        var guess = prompt(sci5[0]);
        if(checkAnswer(guess, sci5)){
            points(turn, sci5);
            questions--;
            sci5[4] = false;
            $("#science-5").text("");
        }
        turn++;
    })

    $("#history-1").on("click", function(){
        var guess = prompt(hist1[0]);
        if(checkAnswer(guess, hist1)){
            points(turn, hist1);
            questions--;
            hist1[4] = false;
            $("#history-1").text("");
        }
        turn++;
    })

    $("#history-2").on("click", function(){
        var guess = prompt(hist2[0]);
        if(checkAnswer(guess, hist2)){
            points(turn, hist2);
            questions--;
            hist2[4] = false;
            $("#history-2").text("");
        }
        turn++;
    })

    $("#history-3").on("click", function(){
        var guess = prompt(hist3[0]);
        if(checkAnswer(guess, hist3)){
            points(turn, hist3);
            questions--;
            hist3[4] = false;
            $("#history-3").text("");
        }
        turn++;
    })

    $("#history-4").on("click", function(){
        var guess = prompt(hist4[0]);
        if(checkAnswer(guess, hist4)){
            points(turn, hist4);
            questions--;
            hist4[4] = false;
            $("#history-4").text("");
        }
        turn++;
    })

    $("#history-5").on("click", function(){
        var guess = prompt(hist5[0]);
        if(checkAnswer(guess, hist5)){
            points(questions, hist5);
            questions--;
            hist5[4] = false;
            $("#history-5").text("");
        }
    })

    $("#music-1").on("click", function(){
        var guess = prompt(music1[0]);
        if(checkAnswer(guess, music1)){
            points(turn, music1);
            questions--;
            music1[4] = false;
            $("#music-1").text("");
        }
        turn++;
    })

    $("#music-2").on("click", function(){
        var guess = prompt(music2[0]);
        if(checkAnswer(guess, music2)){
            points(turn, music2);
            questions--;
            music2[4] = false;
            $("#music-2").text("");
        }
        turn++;
    })

    $("#music-3").on("click", function(){
        var guess = prompt(music3[0]);
        if(checkAnswer(guess, music3)){
            points(turn, music3);
            questions--;
            music3[4] = false;
            $("#music-3").text("");
        }
        turn++;
    })

    $("#music-4").on("click", function(){
        var guess = prompt(music4[0]);
        if(checkAnswer(guess, music4)){
            points(turn, music4);
            questions--;
            music4[4] = false;
            $("#music-4").text("");
        }
        turn++;
    })

    $("#music-5").on("click", function(){
        var guess = prompt(music5[0]);
        if(checkAnswer(guess, music5)){
            points(turn, music5);
            questions--;
            music5[4] = false;
            $("#music-5").text("");
        }
        turn++;
    })

    $("#sports-1").on("click", function(){
        var guess = prompt(sports1[0]);
        if(checkAnswer(guess, sports1)){
            points(turn, sports1);
            questions--;
            sports1[4] = false;
            $("#sports-1").text("");
        }
        turn++;
    })

    $("#sports-2").on("click", function(){
        var guess = prompt(sports2[0]);
        if(checkAnswer(guess, sports2)){
            points(turn, sports2);
            questions--;
            sports2[4] = false;
            $("#sports-2").text("");
        }
        turn++;
    })

    $("#sports-3").on("click", function(){
        var guess = prompt(sports3[0]);
        if(checkAnswer(guess, sports3)){
            points(turn, sports3);
            questions--;
            sports3[4] = false;
            $("#sports-3").text("");
        }
        turn++;
    })

    $("#sports-4").on("click", function(){
        var guess = prompt(sports4[0]);
        if(checkAnswer(guess, sports4)){
            points(turn, sports4);
            questions--;
            sports4[4] = false;
            $("#sports-4").text("");
        }
        turn++;
    })

    $("#sports-5").on("click", function(){
        var guess = prompt(sports5[0]);
        if(checkAnswer(guess, sports5)){
            points(turn, sports5);
            questions--;
            sports5[4] = false;
            $("#sports-5").text("");
        }
        turn++;
    })

    $("#movies-1").on("click", function(){
        var guess = prompt(movies1[0]);
        if(checkAnswer(guess, movies1)){
            points(turn, movies1);
            questions--;
            movies1[4] = false;
            $("#movies-1").text("");
        }
        turn++;
    })

    $("#movies-2").on("click", function(){
        var guess = prompt(movies2[0]);
        if(checkAnswer(guess, movies2)){
            points(turn, movies2);
            questions--;
            movies2[4] = false;
            $("#movies-2").text("");
        }
        turn++;
    })

    $("#movies-3").on("click", function(){
        var guess = prompt(movies3[0]);
        if(checkAnswer(guess, movies3)){
            points(turn, movies3);
            questions--;
            movies3[4] = false;
            $("#movies-3").text("");
        }
        turn++;
    })

    $("#movies-4").on("click", function(){
        var guess = prompt(movies4[0]);
        if(checkAnswer(guess, movies4)){
            points(turn, movies4);
            questions--;
            movies4[4] = false;
            $("#movies-4").text("");
        }
        turn++;
    })

    $("#movies-5").on("click", function(){
        var guess = prompt(movies5[0]);
        if(checkAnswer(guess, movies5)){
            points(turn, movies5);
            questions--;
            movies5[4] = false;
            $("#movies-5").text("");
        }
        turn++;
    })
}