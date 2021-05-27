var bg1, bg2, form, system, code, security;
var score = 0;

function preload(){
	bg1 = loadImage("aladdin_cave.jpg");
	//load the image for the treasure background  
	bg2 = loadImage("aladdin_cave2.jpg");
}

function setup(){
	createCanvas(1000,500);
	
	security = new Security();
	system = new System();
}

function draw(){
	background(bg1);
	clues();
	security.display();
	textSize(20);
	fill("white");
	text("Score: " + score, 450, 50);
	
	//change the background when all questions are answered
	if(score === 3) {
		clear();
		background(bg2);
		fill("white");
		textSize(40);
		text("TREASURE UNLOCKED",250, 200);
	}

	drawSprites();
}