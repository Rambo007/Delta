onload = start;
function start(){
	round = new animation("ball");
	round.circle(30,180,-180,150,50);
}
function circle(radius,angle1,angle2,steps,interval){
	var x = document.getElementById("ball").left;
	var y = document.getElementById("ball").top;
	var x0 = document.getElementById("box").left;
	var y0 = document.getElementById("box").top;
	var cenx = x0 / 2;
	var ceny = y0 / 2;
	var diff = angle2 - angle1;
 	var ang = diff/steps;
	var ar = new Array();
	for(var i=0;i<steps;i++){
		angle1+=ang;
		x = cenx + radius * Math.cos(angle1 * Math.PI/180);
		y = ceny - radius * Math.sin(angle1 * Math.PI/180);
	}
	this.path = ar;
 	this.animation(interval);
	}