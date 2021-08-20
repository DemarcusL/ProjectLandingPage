

// creating the button to turn into an iframe!

$( document ).ready(function() {
  // code goes here!
$("#tune-button").on("click", function(event) {


    event.preventDefault(); // to prevent the computer from 
    $(this).hide();
    $('<iframe width="289" height="315" src="https://www.youtube.com/embed/iWe-YXYqrsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    .appendTo('.card');

    
});

});

//===== BACK TO TOP BUTTON ======//
let myButton2 = document.getElementById("btn-back-to-top"); // get the element by the ID

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { // when the browser window scrolls, this function runs
      scrollFunction(); // calling the function!
}

function scrollFunction() {// function to determine what happens when the window scrolls
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) // if the body or the document element is more than 20, the arrow will show

      {
            myButton2.style.display = "block"; // the button will show
      }
      else{
            myButton2.style.display = "none"; // the button will disapper 
      }
}

// when the user clicks on the document, scroll back up!
myButton2.addEventListener("click", backToTop); // when the user clicks the button, a function will run

function backToTop() {
      document.body.scrollTop = 0; // back to 0 pix
      document.documentElement.scrollTop = 0; // back to 0 pix or the top of the HTML page!
}


//====END OF BACK TO TOP BUTTON===//