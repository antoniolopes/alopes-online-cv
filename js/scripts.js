var callouts = [
	"I wonder if this will help me get a job at Google...",
	"I wonder if people will notice that this keeps changing...",
	"I wonder if anyone will have a look at the source code...",
	"I wonder if this will help me get a job at Apple...",
	"I wonder if this will work in Internet Explorer...",
	"I wonder if people will like these pastel colors I chose..."
];

var callout_nr = 0;

$(window).load(function(){
	setupCalloutChange();
	loadClickHandlersForMenuOptions();
	setupBlinkingElements();
});

function setupCalloutChange(){
	// Set the callout changing interval
	calloutChange();
	window.setInterval(calloutChange, 10000);
}

function setupBlinkingElements(){
	// Animate blinking objects (elements with .blink)
	window.setInterval(function(){
		$(".blink").animate({opacity:0},200,"linear",
			function(){
  				$(this).animate({opacity:1},200);
			}
		);
	}, 1000);
}

function loadClickHandlersForMenuOptions(){
	// Load the click handlers for the menu options
	$('.click-option').bind("click", function(){
		var icon = $(this).find('i.fa');
		if(icon.hasClass('fa-check-square')){
			icon.removeClass('fa-check-square').addClass('fa-square');
		}else{
			icon.removeClass('fa-square').addClass('fa-check-square');
		}
	});

	// Load the click handlers for the menu option to show
	$('.show-option').bind("click", function(){
		$('div.' + $(this).attr('id')).toggle();
	});

	// Load the click handler for the reverse order button
	$('#reverse_order').bind('click', function(){
		$('#cronological_order div.order').each(function() {
    		$(this).prependTo(this.parentNode);
		});
	});
}

function calloutChange(){
	$('#text_callout p').text(callouts[callout_nr]);
	callout_nr++;
	if(callout_nr == callouts.length)
		callout_nr = 0;
}
