// A JavaScript script that updates the text color of the <header> 
// element to red and green as css styleby clicking on div using the JQuery API

// JavaScript script that toggles the class of the <header> element
// when the user clicks on the tag DIV#toggle_header

$('DIV#toggle_header').click(function () {
    $('header').toggleClass('red green');
});
