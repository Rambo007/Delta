var t = 0;

function circle() {
    t += 0.05;

    var r = document.getElementById('box').left; 
    var radius = r/2        // radius
    var x = document.getElementById('box').left;   
    var xcen =x / 2   // center X position
    var y = document.getElementById('box').top;   
    var ycen = y / 2  // center Y position

    var newx = Math.floor(xcen + (r * Math.cos(t)));
    var newy = Math.floor(ycen + (r * Math.sin(t)));

    $('#box').animate({
        top: newx,
        left: newy,
    }, 1, function() {
        circle();
    });
}

$(document).ready(function() {
    circle();
});?
	