// A JavaScript script that updates the text color of the <header> 
// element to red (#FF0000) by clicking on div using the JQuery API

$(document).ready(function(){
  $('#red_header').click(function(){
      $('header').css({ color: '#FF0000' });
  });
});

