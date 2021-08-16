//=============================================== Globals ========================================================//
let nameGathered = prompt('Hello, what is your name?');
let dPokeBall = document.getElementsByClassName("d-pokeball"); // grabs the element with the class name.
let liPokeBall = document.getElementsByClassName("li-pokeball"); // grabs the element with the class name
let specialBallArea = document.getElementsByClassName("specialBall"); // grabs the element with the class name.
let contactUsArea = document.getElementById('contact-us'); // grabs the element with the class name.
let lizPokeballImg = document.getElementById('Lizzy-pokeball'); // grabbed pokeball img id.
let lizPokeballModal = document.getElementById('Liz-Modal');
let memeNames = document.getElementById('memeNames');  
let namesOfPeople = [] // I intend to use this to store names of people who visit

//===================================== Things we may need ==================================// 
//a render method for the names from saved list
//a render of names of vistors
//

//===================================== Demarcus ========================================//

// We want this process to happen on load. To gathere the users names data and store the name

function nameOnLoad() {
// i want to create something other than a simple prompt text
console.log('The body has loaded');
// i want this prompt displayed
// i want the name displayed as a li
// i want the name displayed with the li text
let nameContent = document.createTextNode(` Sorry ${nameGathered}, you've been meme'd along with ${namesOfPeople} `);
// console.log(nameContent);
// This shuld generate a li of name entered
let resultsLI = document.createElement('li');
// console.log(resultsLI);
//with the name gathered, we want to display it as a list item at the bottom of the page
resultsLI.appendChild(nameContent);
// console.log("li has text node");
// this should display it
memeNames.appendChild(resultsLI);
// console.log("names should display");

}

//=================================== Demarcus ==========================================//


//=================================== Lizzy =============================================//
// CODE HERE LIZ
//=================================== Lizzy =============================================//

//===== POE ======//
