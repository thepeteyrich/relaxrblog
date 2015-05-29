console.log("hello world");

$( document ).ready(function() {
    console.log( "ready!" );

});

//click on read more. slide copy down. switch read more to read less. 
//when read less is clicked, slide copy up. switch read less to read more.
//

$( ".click-me" ).click(function(event) {
	event.preventDefault();
	if ($(event.target).text() == "Read more...") {
		$(event.target).parents('.article').children('.extend-text').slideDown();
		$(event.target).text('Read less...');
	} else {
		$(event.target).parents('.article').children('.extend-text').slideUp();
		$(event.target).text('Read more...')
	}
  // $( ".extend-text" ).slideDown( "slow", function() {
    // Animation complete.
  // });
});