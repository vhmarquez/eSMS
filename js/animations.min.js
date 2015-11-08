$(document).ready(function() {

	// menu functionality
	$('.nav-trigger').on('click', function(){
		$('#side-bar').toggleClass('active');
	});

  // touch
  $('#application').on('swiperight', function(){
    if($('#side-bar').hasClass('active')){

    } else {
      $('#side-bar').addClass('active');
    }
  });

  $('#application').on('swipeleft', function(){
    if($('#side-bar').hasClass('active')){
      $('#side-bar').removeClass('active');
    } else {
      
    }
  });

});
