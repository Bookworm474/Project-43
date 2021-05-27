class System{
	constructor(){}

	authenticate(actualCode,enteredCode){
		textSize(50);
		fill("black");
		text(""+code,300,300);
		//return true if entered answer is correct
		if (actualCode === enteredCode.toUpperCase())
			return true;
		else
			return false;
	}
}