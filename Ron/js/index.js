var counter = 0;
function change(){
	var numOfPics = 8
	var picture = document.getElementById("song")
	picture.classList.add("change"+(counter%8+1))
	if (counter > 0){
		setTimeout(picture.classList.remove("change"+((counter-1)%numOfPics+1)),10000)	
	}
	
	setTimeout((picture.style.backgroundImage="url(assets/"+(counter%8+1)+".png"),10000)
	counter++
}
function start(){
	var id = setInterval(frame,12000);
	counter = 0;
	function frame(){
		change()
	}
}