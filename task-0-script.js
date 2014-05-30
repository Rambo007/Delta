var t = 0;

function circle(){
	t +=0.05;

	var radius = 30;
 	var x0 = document.getElementById('#box').left;
	var y0 = document.getElementbyId('#box').top;
	var cenx = x0 / 2;
	var ceny = y0 / 2;
 	var newx = Math.floor(cenx + (radius * Math.cos(t)));
	var newy = Math.floor(ceny + (radius * Math.sin(t)));
	$('#ball').animate({
		top = newy;
		left: newx;
	},1,function(){
		circle();
	});
}

$(document).ready(function(){
	circle();
});