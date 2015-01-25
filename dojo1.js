exports.createSphere=function(material,radius){
	if (!radius){
		radius =3;
	}
	if (!material){
		material =blocks.piston;
	}
	sphere0(material,radius);
};

exports.createChimney=function(material){
	if (material) {
		cylinder0(material,2,10);
	} else {
		cylinder0(blocks.brick.red,2,10);
	}
};

exports.createHouse=function(){
	box0(blocks.cobblestone,7,3,6).up(3).prism0(blocks.oak,7,6,3);
};



exports.createCastle=function(){
	box0(blocks.brick.stone,20,20,20).left(2).back(2).cylinder0(blocks.brick.stone,3,25);
	fwd(15).left(2).cylinder0(blocks.brick.stone,3,25);
	fwd(4).turn(1).fwd(15).cylinder0(blocks.brick.stone,3,25);
	turn(1).fwd(15).turn(3).fwd(15).cylinder0(blocks.brick.stone,3,25);
};



exports.surface=function(){
	box(blocks.brick.stone,20,1,20);
};



exports.rainbowShed=function(){
	var rainbowBlocks= [blocks.wool.red,
						blocks.wool.orange,
						blocks.wool.yellow,
						blocks.wool.lime,
						blocks.wool.lightblue,
						blocks.wool.blue,
						blocks.wool.purple];
	for (i=0;i<7;i++){
		up(i).box0(rainbowBlocks[i],4,1,8);
	}					

	//up(1).box0(rainbowBlocks[1],4,1,8);
	//up(3).box0(rainbowBlocks[3],4,1,8);
	//up(4).box0(rainbowBlocks[4],4,1,8);
	//up(5).box0(rainbowBlocks[5],4,1,8);
	//up(6).box0(rainbowBlocks[6],4,1,8);
};

exports.diamondTower=function(){
	var materials=[blocks.stone, blocks.diamond, blocks.glass, blocks.glass];
	for (i=0;i<16;i++){
		up(i).cylinder0(materials[i%4],4,1);

	}
};
exports.skyscraper=function(width,depth,floors){
	var d = up(1);
	d.chkpt("pointA");
	echo("starting location ..... " + d.getLocation());
	var pos;
    for (i=0;i<floors;i++) {
    	if (i == 0) {
    		pos = 0;
    	} else {
    		pos = 3;
    	}
    	d.up(pos)
 		.box0(blocks.iron,width,1,depth)
		.up(1)
		.box0(blocks.glass_pane,width,3,depth);
	}
	echo("before move location is now..... " + d.getLocation());
	d.move("pointA");
	echo("after move location is now..... " + d.getLocation());
}


exports.newYork=function(){

	// move(positionA);
	// skyscraper(10,12,10);  //skyscraper(width,depth,floors)
	// move(positionB);
	// skyscraper(8,5,20);

}