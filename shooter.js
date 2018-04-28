function shooter(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
<<<<<<< HEAD
		fill(1, 0, 0);
=======
		fill(random(652), 0, 0);
>>>>>>> empilepsia
		ellipse(this.x, this.y, 20, 20)
	}

	this.move = function(){
		this.y = this.y - 5;
	}
}