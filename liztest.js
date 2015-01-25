var getCityDrone = function() {
	var d = up();
	d.fwd(20).chkpt("posA");
	d.right(10).chkpt("posB");
	d.back(20).chkpt("posC");
	d.move("start");
	echo("returning drone!");
	return d;
}

var build = function(d,width,depth,floors){
	echo("starting location ..... " + d.getLocation());
	var pos;
    for (i=0;i<floors;i++) {
    	if (i == 0) {
    		pos = 0;
    	} else {
    		pos = 3;
    	}
    	d.up(pos)
 		.box0(blocks.wool.lime,width,1,depth)
		.up(1)
		.box0(blocks.glass_pane,width,3,depth);
	}
	echo("built! location is now..... " + d.getLocation());
}

exports.buildCity=function(){
	var d = getCityDrone();
	build(d,5,7,5);
	d.move("start").move("posA");
	build(d,5,7,5);
	d.move("start").move("posB");
	build(d,5,7,5);
	d.move("start").move("posC");
	build(d,5,7,5);
	d.move("start");
	echo("END! location is now..... " + d.getLocation());
}

exports.drawArc=function(){
	var radius=5;
	var y = 0;
	box0(blocks.wool.red,1,1,1);
	for (x=radius;x>0;x--) {
		y = Math.floor(Math.sqrt((radius*radius) - (x*x)));
		left(1).up(y).box0(blocks.wool.red,1,1,1);
	}
}

function leftClickAction(event){
	var clicker = event.player;
	echo (clicker,"you clicked!");
}
events.blockLeftClick(leftClickAction);
