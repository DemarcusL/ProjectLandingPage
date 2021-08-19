getLocalStorage();

//Todo, get a creator for the message on each homepage to user.
function messageOnLoadL() {
    //this is pulling from the returned storage value of nameSaved and setting it to user name
    userName = getLocalStorage();

    //i wanted to give the rendered name a class
    // userName.className += "nameCSS";

    // let's render the old data that we retrieved back from the localStorage
    // we can set a check for is user name is null, render hello, if not withan Else, we can call the render
    if ( userName === null || userName === " ") {
          console.log('No name detected')
    }
    else { // when a name is detected, we will do the render function while passing in the name from storage
          renderHelloL(userName);
          console.log('running render L');
    }

}

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