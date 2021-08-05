

$(document).ready( function() {
    $('.assesment h2').click( function() {
        $('.assesment img').toggle();
    });

    $('.hiring').click( function() {
        $('.profiles').toggle();
    });
    $('.jobs').click( function() {
        $('#jobs-p').toggle();
        $('#jobs-a').toggle();
    });



    $("#h-six").click(function(){
        //$("#hide-about-us").show();
        $("#hide-about-us").toggle();

    });
    $("#main-log-in").click(function(){
        $("#log-in-form").toggle();
    });

});

