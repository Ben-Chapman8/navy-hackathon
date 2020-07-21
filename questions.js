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

function checkAnswer(guess, correctAnswer){
    if(guess == "4"){
        guess = "four";
    }
    answer = correctAnswer[1].toLowerCase();
    guess = guess.toLowerCase();

    return (guess === answer);
}