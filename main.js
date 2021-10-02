//Create a reference for canvas
canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d") ;

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x= 5;
greencar_y= 225;

function add() {
	//upload car, and background images on the canvas.
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground;
	background_image_tag.src=background_image;

	greencar_image_tag = new Image();
    greencar_image_tag.onload = uploadgreencar;
	greencar_image_tag.src =greencar_image ;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image_tag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;

	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			//alert('up');
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			//alert('down');

			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			//alert('left');

			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			//alert('right');

			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0){
     greencar_y=greencar_y-10;
	 uploadBackground();	
	 uploadgreencar();
	}
}

function down(){
if(greencar_y <=300){
	greencar_y=greencar_y+10;
	uploadBackground();	
	uploadgreencar();
   }
}
function left()
{
	if(greencar_x >=0){
		greencar_x=greencar_x-10;
		uploadBackground();	
		uploadgreencar();
	   }
}

function right()
{
	//Define function to move the car right side
	if(greencar_x <=700){
		greencar_x=greencar_x+10;
		uploadBackground();	
		uploadgreencar();
	   }
}
