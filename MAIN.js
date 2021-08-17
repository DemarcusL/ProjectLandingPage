//=============================================== Globals ========================================================//

// IMPORTANT: Uncomment nameGathered to make name function work on DEMO
// let nameGathered = prompt('Hello, what is your name?');

let dPokeBall = document.getElementsByClassName("d-pokeball"); // grabs the element with the class name.
let liPokeBall = document.getElementsByClassName("li-pokeball"); // grabs the element with the class name
let specialBallArea = document.getElementsByClassName("specialBall"); // grabs the element with the class name.
let contactUsArea = document.getElementById('contact-us'); // grabs the element with the class name.
let lizPokeballImg = document.getElementById('Lizzy-pokeball'); // grabbed pokeball img id.
let lizPokeballModal = document.getElementById('Liz-Modal');
let memeNames = document.getElementById('memeNames');  
let namesOfPeople = [] // I intend to use this to store names of people who visit to render a list of past visitors

let containerD = document.querySelector('containerD');//global for displaying
let containerL = document.querySelector('containerL');//global for displaying


//===================================== Things we may need ==================================// 
//a render method for the names from saved list
//a render of names of vistors
//

//===================================== Demarcus ========================================//

// We want this process to happen on load. To gathere the users names data and store the name
// we can use this for genrating a welcome message to the user on your bio page. 

function nameOnLoad() {
//TODO: gather names
// i want to create something other than a simple prompt text
console.log('The body has loaded');
// i want this prompt displayed
// i want the name displayed as a li
// i want the name displayed with the li text
let nameContent = document.createTextNode(` Welcome ${nameGathered} !`);
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

//TODO: get a creator for the message on each homepage to user.
function messageOnLoadD() {
//check for sanity
console.log('The body has loaded');
//Lets set the emessage being displayed
let welcomeTxt = document.createTextNode(` Hello ${nameGathered} ! It is very nice to meet you. My name is Demarcus.`);
//next we need to generate a p element for generating the message.
let textArea = document.createElement('p');
//now we need to append the message
textArea.appendChild(welcomeTxt);
//now we d to tpalay it
containerD.appendChild(textArea);

}

//Todo, get a creator for the message on each homepage to user.
function messageOnLoadL() {
//check for sanity
console.log('The body has loaded');
//Lets set the emessage being displayed
let welcomeTxt = document.createTextNode(` Hello ${nameGathered} ! It is very nice to meet you. My name is Lizzy.`);
//next we need to generate a p element for generating the message.
let textArea = document.createElement('p');
//now we need to append the message
textArea.appendChild(welcomeTxt);
//now we need to display it
containerL.appendChild(textArea);

}

//=================================== Demarcus ==========================================//


//=================================== Lizzy =============================================//
// CODE HERE LIZ
//TODO: When the image is clicked (gold coin), I want the video to appear in the BROWSER.
// Get element by ID (Photo)
let coin = document.getElementById('coin');
// Get element by ID (video)
let coinToVideo = document.getElementById('coin-video')


// when page loads, nothing is clicked. then when the ball is pressed. a new ul is created to replace the old one. and in the created function the new created ul can hold the embedded iframe link for that to be displayed.
//=================================== Lizzy =============================================//

//===== POE ======//
