$(function() {

    //Changing the active item in the main menu and sidebar
    var rel = $('body[rel]').attr('rel');
    $('.main.menu a:eq(' + rel + ') , #side a:eq(' + rel + ')').addClass('active');

    // $('.masthead')
    //     .visibility({
    //         once: false,
    //         onBottomPassed: function() {
    //             $('.main.menu').transition('fade in');
    //         },
    //         onBottomPassedReverse: function() {
    //             $('.main.menu').transition('fade out');
    //         }
    //     });

    // create sidebar and attach to menu open

    $('.sidebar-icon > .sidebar.icon').on('click', function() {

        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');


    });

    $('.ui.accordion')
        .accordion();

});
