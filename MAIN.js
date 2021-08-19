//=============================================== Globals ========================================================//

let dPokeBall = document.getElementsByClassName("d-pokeball"); // grabs the element with the class name.
let liPokeBall = document.getElementsByClassName("li-pokeball"); // grabs the element with the class name
let specialBallArea = document.getElementsByClassName("specialCoin"); // grabs the element with the class name.
let contactUsArea = document.getElementById('contact-us'); // grabs the element with the class name.
let lizPokeballImg = document.getElementById('Lizzy-pokeball'); // grabbed pokeball img id.
let lizPokeballModal = document.getElementById('Liz-Modal');
let memeNames = document.getElementById('memeNames');
let namesOfPeople = [] // I intend to use this to store names of people who visit to render a list of past visitors

let containerD = document.getElementById('containerD');//global for displaying
let containerL = document.getElementById('containerL');//global for displaying

let nameReuse = []; // names for redisplay

//===================================== Things we may need ==================================// 
//a render method for the names from saved list
//a render of names of vistors
//

//===================================== Demarcus ========================================//

// We want this process to happen on load. To gathere the users names data and store the name
// we can use this for genrating a welcome message to the user on your bio page. 

function nameOnLoad() {
      //TODO: gather names
      // IMPORTANT: Uncomment nameGathered to make name function work on DEMO
      let nameGathered = prompt('Hello, what is your name?') || getLocalStorage(); // It asks for a name if the user is new, or it returns the name stored.
      // how can we get it to stope the prompt??
      if(nameGathered === getLocalStorage())
      {
            alert(`Welcome back, ${nameGathered} !`); // If the name remains the same, it will welcome the user back!
      }

      //I want to add a class to the name to be targeted with css
      // nameGathered.classList.add('nameText');

      nameReuse.push(nameGathered); // this should put the name entered into an array so they can be reached by the other functions
      

      // i want to create something other than a simple prompt text
      console.log('The body has loaded');
      // i want this prompt displayed
      // i want the name displayed as a li
      // i want the name displayed with the li text
      let nameContent = document.createTextNode(` Welcome ${nameGathered} !`);
      // console.log(nameContent);
      // This shuld generate a li of name entered
      let resultsLI = document.createElement('h1');
      // console.log(resultsLI);
      //with the name gathered, we want to display it as a list item at the bottom of the page
      resultsLI.appendChild(nameContent);
      // console.log("li has text node");
      // this should display it
      memeNames.appendChild(resultsLI);
      // console.log("names should display");
      //we want the locale storage updated after the name is gatehred and pushed
      updateLocalStorage(nameGathered);
}

// ==================== lets make a local storage for names called user for the key, and get the name from the arry. and add an handle for null ========//
//push in the nameGathered w a parametere for setting it
function updateLocalStorage(nameToBeSaved) {
      console.log("Updating localStorage for names !");
      //key and value, names is the key
      localStorage.setItem('names', nameToBeSaved);

}

//===================== end of setting local storage names =================//

//======================== Let get the storage =========================//
function getLocalStorage() {
      //console.log("Get stored data from the local storage!!");
      console.log('We are gathering names in getStorageFunc')
      // retrieve data from local storage
      const nameSaved = localStorage.getItem("names");
      console.log('setting saved names to nameSaved')
      let nameDisplay = nameSaved;

      // If this is the first time we visit the page, there will not be an array for us to use in localStorage, we need to crorect or that
      if (nameDisplay === null) {
            console.log('No name in get Local Storage func')
            //we can set to empty or guest and return that
      }
      else {
            // return nameDisplay;
            return nameSaved;

      }

      // // let's render the old data that we retrieved back from the localStorage
      // renderHello();

};

//======================= end of retireve ==============================//

//====================== Start of message generator ===============//
//TODO: get a creator for the message on each homepage to user.
function messageOnLoadD() {
      //check for sanity
      // console.log('The body has loaded');
      //this is pulling from the returned storage value of nameSaved and setting it to user name
      userName = getLocalStorage();
      //i want to give the rendered name a class
      // userName.className += "nameCSS";
      // let's render the old data that we retrieved back from the localStorage
      // we can set a check for is user name is null, render hello, if not withan Else, we can call the render
      if (userName === null) {
            console.log('No name detected')
      }
      else { // when a name is detected, we will do the render function while passing in the name from storage
            renderHelloD(userName);
      }


}

//Todo, get a creator for the message on each homepage to user.
function messageOnLoadL() {
      //check for sanity
      // console.log('The body has loaded');
      //this is pulling from the returned storage value of nameSaved and setting it to user name
      userName = getLocalStorage();
      //i want to give the rendered name a class
      // userName.className += "nameCSS";
      // let's render the old data that we retrieved back from the localStorage
      // we can set a check for is user name is null, render hello, if not withan Else, we can call the render
      if (userName === null) {
            console.log('No name detected')
      }
      else { // when a name is detected, we will do the render function while passing in the name from storage
            renderHelloL(userName);
      }


}
//====================== end of message generator ===============//

//====================== lets render the message =========================//
function renderHelloD(name) {
      // with the names passed in from storage, we are making an element
      let messageTxtD = document.createElement('p');
      //the inner text will read as such to display
      messageTxtD.innerText = ` Welcome here travler, the winds tell me your name is ${name}. Well my name is Demarcus and welcome to our introduction !  `;
      // we and this rendered in the DOM of the browser elements, so append them
      containerD.appendChild(messageTxtD);


}

function renderHelloL(name) {
      // with the names passed in from storage, we are making an element
      let messageTxtD = document.createElement('h1');
      //the inner text will read as such to display
      messageTxtD.innerText = ` Welcome here young travler, my assistant tells me your name is ${name}  `;

      // we and this rendered in the DOM of the browser elements, so append them
      containerL.appendChild(messageTxtD);


}
//================= end of render ============================//
//================ Now lets call when our page loads =====================//


//  End Of 
//=================================== Demarcus ==========================================//


//=================================== Lizzy =============================================//
// CODE HERE LIZ
$(document).ready(function() {
    
$('#floating-coin').on('click', function()
{
    $(this).hide(); // hide the element first, then create an iframe elementt and run it in autoplay!
    $('<iframe width="560" height="315" src="https://www.youtube.com/embed/EofOpQ7HP30?autoplay=1 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    
   // I did it! I need for it to autoplay next!!
     .appendTo('.specialCoin');
// This code works! We need to hide this picture and replace it with an iframe
});

// Add smooth scrolling to all links. on the click of the link an event will happen!
$("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") { // if the hash is not equal to an empty or broken string, then the event will continue
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        let hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      } // end if
});

      
}); // end of document.ready



// when page loads, nothing is clicked. then when the ball is pressed. a new ul is created to replace the old one. and in the created function the new created ul can hold the embedded iframe link for that to be displayed.
//=================================== Lizzy =============================================//

//===== POE ======//
