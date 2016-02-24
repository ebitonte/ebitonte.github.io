$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", "./public/images/" +arguments[i]);
        }
    }

    $.preloadImages("background.jpg","indigo2.jpg", "indigo1.jpg");


    $("#cover-photo").on("mouseover", function() {
        replaceBackground("background");
    }).on("mouseout", function() {
        resetBackground();
    });
});

function replaceBackground(image) {
    var background = image || "indigo3";
    var backgroundPath = "./public/images/" + background + ".jpg";
    var $backgroundImage = $("#background-image");

    var $newImage = $(".new-image");
    $newImage.attr("src", backgroundPath);

    $newImage.addClass("onscreen").removeClass("offscreen");
}

function resetBackground() {
    var $newImage = $(".new-image");
    $newImage.removeClass("onscreen").addClass("offscreen");
}