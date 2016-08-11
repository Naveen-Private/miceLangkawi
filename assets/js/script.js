var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();
});





// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    
    $('.navbar-toggle:visible').click();
});
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        $(document).ready(function () {

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        });
            
        





	

////------- Testimonial Section

$(document).ready(function() {
 
  $(".testimonial-section").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});






// Progress Bar

$(document).ready(function ($) {
    "use strict";
    
    // skills animation
    $('#skill-section').waypoint({
        handler: function(event, direction) {
            $(this).find('.singel-hr-inner').each(function(){
                var height = $(this).data('height');
                $(this).css('height', height);
            });
        },
        offset: '60%'
    });

    var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
    if(isiDevice || isAndroid){
        $('input[type="checkbox"]').css({'left':'17%'});
        $('.checkbox .form-control').css('width','51%');
        $('.checkbox').css('margin-bottom','15%');
        $('#adventure').css('width','40%');
    } else {
        $('input[type="checkbox"]').css({'left':'8%'});
        $('.checkbox .form-control').css('width','70%');
        $('#adventure').css('width','65%');
        $('.checkbox').css('margin-bottom','7%');
    } 

    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            console.log($(this).parent().parent().find('input[type=text]').attr('id'));
            var checkboxId = $(this).parent().parent().find('input[type=text]').attr('id');
            $(this).parent().parent().find('input[type=text]').attr('name',checkboxId);
        }
        else if($(this).is(":not(:checked)")){
            //var checkboxId = $(this).parent().parent().find('input[type=text]').attr('id');
            $(this).parent().parent().find('input[type=text]').attr('name','');
            //alert("Checkbox is unchecked.");
        }
    });    
        
});


$ ( function () {

	$(".video").fitVids();
	
});
	
	
	
	
	
	
/* ------------------------------------------------------*/
// Start Sidenav Section 
/* ------------------------------------------------------ */

(function () {
    
    "use strict";
	var bodyEl = document.body,
		content = document.querySelector('.content-wrap'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener('click', toggleMenu);
		if (closebtn) {
			closebtn.addEventListener('click', toggleMenu);
		}

		
	}

	function toggleMenu() {
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
		}
		    else {
                classie.add(bodyEl, 'show-menu');
		    }
        
		isOpen = !isOpen;
	}

	init();

})();


