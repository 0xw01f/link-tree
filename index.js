$(document).ready(function(){
    $('#titleType').typewrite({
        speed: 10,
        cursor: '.',
        actions: [
            {type: 'Loading..'},
           
        ]
    });
});


$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});