$(document).ready( function() {
    $('.assesment h2').click( function() {
        $('.col-md-3 img').toggle();
    });

    $('.hiring').click( function() {
        $('.profiles').toggle();
    });
    $('.jobs').click( function() {
        $('#jobs-p').toggle();
        $('#jobs-a').toggle();
    });
});