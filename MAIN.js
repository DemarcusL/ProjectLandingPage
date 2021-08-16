//=============================================== Globals ========================================================//
let dPokeBall = document.getElementsByClassName("d-pokeball"); // grabs the element with the class name.
let liPokeBall = document.getElementsByClassName("li-pokeball"); // grabs the element with the class name
let specialBallArea = document.getElementsByClassName("specialBall"); // grabs the element with the class name.
let contactUsArea = document.getElementById('contact-us'); // grabs the element with the class name.
let lizPokeballImg = document.getElementById('Lizzy-pokeball'); // grabbed pokeball img id.
let lizPokeballModal = document.getElementById('Liz-Modal');

//===================================== Things we may need ==================================// 
//
//

//===================================== Demarcus ========================================//

// We want this process to happen on load. To gathere the users names data and store the name
function nameOnLoad() {
// i want to create something other than a simple prompt text
console.log('The body has loaded');
// i want this prompt displayed
let nameGathered = prompt('Hello, what is your name?');

// i want the name displayed as a li
let memeNames = document.getElementById('memeNames');  

// i want the name displayed with the li text
let resultsLI = document.createElement('li');

//with the name gathered, we want to display it as a list item at the bottom of the page
resultsLI.innerText = ` Welcome ${nameGathered}, you've just been memed along with the other ! `;
memeNames.appendChild(nameGathered);
}

//=================================== Demarcus ==========================================//



//===== POE ======//
// nameOnLoad();