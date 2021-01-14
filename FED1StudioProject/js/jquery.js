///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
$(function () {
    $(".thumb").on("click", function () {
        //Find the source attribute of the img tag that was clicked and store that as a variable
        var imgSrc = $(this).attr("src");

        //Plug an <img> into the #lightbox-content
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive"/>');


        //Making the lightbox visible by fading in
        $("#lightbox-container").fadeIn(500);

        //when the user clicks anywhere in the light box container, fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);

        });

});
});