$(document).ready(function() {
    $('.image')
        .dimmer({
            on: 'hover'
        })
    ;

    $("#mobile_nav_toggle").click(function(event) {
        event.preventDefault();
        var toggle = $('.ui.labeled.icon.sidebar').sidebar('is open');

        if (toggle) {
            $('.ui.labeled.icon.sidebar').sidebar('hide');
        } else {
            $('.ui.labeled.icon.sidebar').sidebar('show');
        }
    })

});
