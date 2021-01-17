///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
$(function () {
    $(".thumb").on("click", function () {
        
        var imgSrc = $(this).attr("src");

        
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" width="500" height="500"/>');


       
        $("#lightbox-container").fadeIn(1000);

        
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(1000);

        });

});

$('.classTable1').DataTable({

        'paging':false,
        'searching':false,

});

});