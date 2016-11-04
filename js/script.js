$(function(){

	var rel = $('body[rel]').attr('rel');

	$('#menu a:eq('+ rel +') , #side a:eq('+ rel +')').addClass('active');
	$('#side a:eq('+ rel +') , #side a:eq('+ rel +')').addClass('active');

	$('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        });

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

});
