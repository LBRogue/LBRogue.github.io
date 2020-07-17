var openDiv;
var rooms;
var imgW;
var divH;
var divW;
var gregorDialogue = 0;
var noDialogues = 0;
var vacantPos = 8;
var inProgress = false;
var inDialogue = true;
var itemSelected = false;
var gregorHuman = true;
var itemInProgress;
var itemInHand;
var inAnimation = false;
var gregorTransform = false;
var lightsOn = true;
var gregorOnPainting = false;
var number5Missing = true;
var gregorGoPainting = false;
var cabinetOpen = false;
var keyStatus = false;
var slides = 31;
function start(){
	console.log("yess");
	var portraitDiv = document.getElementById("portraitDiv");
	if (portraitDiv.offsetHeight < portraitDiv.offsetWidth){
		portraitDiv.style.display = "none";
		console.log("yes");
	}
}
var firstDialogues = [
	'Hellooo, so yun nga game to na maikli lang',
	'assuming na walang bugs and it -works- ',
	'so quick tutorial, click mo lang item',
	'posibleng may interaction or mapunta sa hotbar mo',
	'click mo yung item sa hotbar and another item sa screen',
	'pwede rin na magsalita yung tao click mo lang',
	'and that\'s it. (btw sorry sa roxy lake HAHA) Click to proceed.'
	
]
var gregorDialogues = [
	'I\'m a traveling salesman.',
	'That painting right there is my most precious item.',
	'I have to sleep early, my train leaves at 5.',
	'A glass of milk would be lovely.',
	'I\'d be sad if someone took my painting.'
]
var numberPuzzleCode = [
	1,
	3,
	4,
	5,
	8,
	7,
	0,
	2
]
function intro(){
	if((!inProgress) && (noDialogues == firstDialogues.length)){
		startGame();
		document.getElementById("dialogueDiv").setAttribute("onclick", "clickDialogue()");
		inDialogue = false;
	}
	else if(!inProgress){
	writeDialogue("Console", firstDialogues[noDialogues]);
	noDialogues++
	}
	
}

function fadeOut(divName){
	var elem = document.getElementById(divName);
	elem.style.opacity = 1;
	var id = setInterval(frame, 5);
	function frame() {
		if (elem.style.opacity == 0) {
			clearInterval(id);
			elem.style.display = "none";
			elem.style.opacity = 1;
		} 
		else {
			elem.style.opacity -= .04;
		}
	}
}
function arrangeHotbar(){
	var hotbar = document.getElementById("hotbar")
	for(let i = 0; i < hotbar.children.length; i++){
		hotbar.children[i].style.left = (90-90*147/150)/8 + (90*21/150 + (90-90*147/150)/8)*i +"vw";
		hotbar.children[i].item = "none";
	}
}
function arrangePuzzles(){
	var numberPuzzle = document.getElementById("numberPuzzle")
		for(let i = 0; i < numberPuzzle.childElementCount; i++){
			numberPuzzle.children[i].style.top = 0.75 + 14.75*(Math.floor(numberPuzzle.children[i].position/3)) + "vw";
			numberPuzzle.children[i].style.left = 0.75 + 14.75*(numberPuzzle.children[i].position%3) + "vw";
			numberPuzzle2.children[i].style.top = 0.075 + 1.075*(Math.floor(numberPuzzle.children[i].position/3)) + "vw";
			numberPuzzle2.children[i].style.left = 0.075 + 1.075*(numberPuzzle.children[i].position%3) + "vw";
		}
	if (number5Missing){
		numberPuzzle2.children[4].style.display = "none"

	}
}
function inNumberPuzzle(){
	if(!inProgress){
	document.getElementById("numberPuzzle").style.display = "block";
	document.getElementById("numberPuzzle2").style.display = "none";
	document.getElementById("escapeBtn").style.display = "block";
	inProgress = true;
	itemInProgress = "numberPuzzle";
}
}
function outNumberPuzzle(){
	if((!inProgress) || (itemInProgress == "numberPuzzle")){
	arrangePuzzles();
	document.getElementById("numberPuzzle2").style.display = "block";
	document.getElementById("numberPuzzle").style.display = "none";
	document.getElementById("escapeBtn").style.display = "none";
	inProgress = false;
	}
}

function move(num1){
	if(((!inProgress) || (itemInProgress == "numberPuzzle")) && (!inAnimation) ){
	var cur = document.getElementById(num1);
	num = cur.position;
	if(((Math.abs (num - vacantPos) == 1) && (Math.floor(num / 3) == Math.floor(vacantPos / 3))) || (Math.abs(num - vacantPos) == 3)){
		var diffx = num % 3 - vacantPos % 3 ;
		var diffy = Math.floor(num/3) - Math.floor(vacantPos/3);
		var tempnum = vacantPos;
		var counter = 0;
		inAnimation = true;
		var id = setInterval(frame, 5);
		function frame(){
			if (counter == 50){
				clearInterval(id);
				vacantPos = cur.position;
				cur.position = tempnum;
				inAnimation = false;
			}
			else{
				counter++;
				cur.style.top = 0.75 - 14.75*diffy*counter/50 + 14.75*(Math.floor(num/3)) + "vw";
				cur.style.left = 0.75 - 14.75*diffx*counter/50 + 14.75*(num%3) + "vw";
			}
		}

	}		
	}
}

function startGame(){
	document.getElementById("gameDiv").style.display = "block";
	arrangeHotbar();
	document.getElementById("hotbar").style.display = "block";
	fadeOut("dialogueDiv");
	fadeOut("introDiv");
	openDiv = 1;
	rooms = 3;
	imgW = document.getElementsByTagName("img")[0].offsetWidth;
	divW = document.getElementById("room2").offsetWidth; 
	divH = document.getElementById("room2").offsetHeight; 
	document.getElementsByTagName("polygon")[0].points[0].x = Math.floor(divW/20);
	document.getElementsByTagName("polygon")[0].points[0].y = 0;
	document.getElementsByTagName("polygon")[0].points[1].x = 0;
	document.getElementsByTagName("polygon")[0].points[1].y = Math.floor((divH/20));
	document.getElementsByTagName("polygon")[0].points[2].x = Math.floor((divW/20));
	document.getElementsByTagName("polygon")[0].points[2].y = Math.floor(divH/10);
	document.getElementsByTagName("polygon")[1].points[0].x = 0;
	document.getElementsByTagName("polygon")[1].points[0].y = 0;
	document.getElementsByTagName("polygon")[1].points[1].x = Math.floor(divW/20);
	document.getElementsByTagName("polygon")[1].points[1].y = Math.floor((divH/20));
	document.getElementsByTagName("polygon")[1].points[2].x = 0;
	document.getElementsByTagName("polygon")[1].points[2].y = Math.floor(divH/10);
	for(let i = 0;i < 8; i++){
		document.getElementById("numberPuzzle").children[i].position = i;
	}
	arrangePuzzles();
	
}

toTheLeft = function(){//magdagdag ng fcn para kay gregor transform
	if((!inProgress) && (!inDialogue)){
			openDiv--;
	if(openDiv==0){
		document.getElementsByTagName("polygon")[0].style.display = "none";
	}
	else{
		document.getElementsByTagName("polygon")[1].style.display = "block";
	}
	for(let i = 0; i < rooms;i++){
		document.getElementById("gameDiv").children[i].style.display = "none";
	}
	document.getElementById("gameDiv").children[openDiv].style.display = "block";
		if(gregorTransform){
			document.getElementById("gregorHuman").style.display = "none";
			document.getElementById("gregorMeta").style.display = "block";
			gregorHuman = false;
		}

	}
}
toTheRight = function(){
	if((!inProgress) && (!inDialogue)){
	openDiv++;
	if(openDiv==2){
		document.getElementsByTagName("polygon")[1].style.display = "none";
	}
	else{
		document.getElementsByTagName("polygon")[0].style.display = "block";
	}
	for(let i = 0; i < rooms;i++){
		document.getElementById("gameDiv").children[i].style.display = "none";
	}
	document.getElementById("gameDiv").children[openDiv].style.display = "block";
		if(gregorTransform){
			document.getElementById("gregorHuman").style.display = "none";
			document.getElementById("gregorMeta").style.display = "block";
			gregorHuman = false;
		}
		if(gregorGoPainting){
			gregorOnPainting = true;
			var gregorMetaCurrent = document.getElementById("gregorMeta");
			gregorMetaCurrent.style.top = "1vw";
			gregorMetaCurrent.style.left = "8vw";
			gregorMetaCurrent.style.transform = "rotate(330deg)";
			gregorMetaCurrent.style.height = "13vw";
			//lagay dito coords
		}
		if(!lightsOn){
			switchLight();
		}
	}
}
onLeft = function(s){
	if(s=="in"){
	document.getElementsByTagName("polygon")[0].style.fill = "lightgray";
	}
	else{
	document.getElementsByTagName("polygon")[0].style.fill = "#d18304";
	}
}
onRight = function(a){
	if(a=="in"){
	document.getElementsByTagName("polygon")[1].style.fill = "lightgray";
	}
	else{
	document.getElementsByTagName("polygon")[1].style.fill = "#d18304";
	}
}
function tryCodes(){
	var numbers = document.getElementById("numberPuzzle").children
	var numberPuzzleStatus = true;
	var symbolsStatus = true;
	for(let i = 0; i < numbers.length; i++){
		if(numbers[i].position != numberPuzzleCode[i]){
			numberPuzzleStatus = false;
		}
	}
	if((numberPuzzleStatus) && (symbolsStatus) && (keyStatus)){
		unlock();
	}
	else{
		writeDialogue("Roxanne", "It's still locked");
	}
}
function hotbarStore(item){
	var hotbar = document.getElementById("hotbar");
	var vacant;
	for(let i = 0; i < hotbar.children.length; i++){
		if (hotbar.children[i].item == "none"){
			vacant = i;
			break;
		}
	}
			console.log(vacant);
	document.getElementById(item).style.display = "none";
	hotbar.children[vacant].item = item;
	var node = document.createElement("img");
	node.setAttribute("src", "assets/img/" + item + ".png");
	node.setAttribute("onclick", "itemClick(" + item + ")");
	hotbar.children[vacant].appendChild(node);
	var imgWidth = hotbar.children[vacant].children[0].offsetWidth;
	hotbar.children[vacant].children[0].style.margin = 	"calc(90vw*2/34 - 90vw*8/170) " + (divW*21/150 - imgWidth)/2 + "px calc(90vw*2/34 - 90vw*8/170) " + (divW*21/150 - imgWidth)/2 + "px";
}
//unfinished
function hotbarRemove(item){
	var hotbar = document.getElementById("hotbar");
	for(let i = 0; i < hotbar.children.length; i++){
		if (hotbar.children[i].item == item){
			hotbarClick(i);
			hotbar.children[i].item = "none";
			hotbar.children[i].innerHTML = "";
			break;
		}
	}
}
function hotbarClick(num){
	console.log("yes");
	var hotbar = document.getElementById("hotbar");
	if((hotbar.children[num].selected) || (!itemSelected)){ // should be != "none" nvmmm
		if(hotbar.children[num].style.backgroundColor != "lightgray"){	
			hotbar.children[num].style.backgroundColor = "lightgray";
			hotbar.children[num].selected = true;
			itemSelected = true;
			selectItem(hotbar.children[num].item);
		}
		else{
			hotbar.children[num].style.backgroundColor = "gray";
			hotbar.children[num].selected = false;
			itemSelected = false;
		}
	}
}
// unfinished
function selectItem(item){
	itemInHand = item;
}
//unfinished
function switchLight(){
	if(gregorHuman){
		writeDialogue("Gregor","Don't turn off the light, I'm about to read the newspaper.");
	}
	else if (lightsOn){
		document.getElementById("room1").style.filter = "brightness(80%)";
		lightsOn = false;
	}
	else {
		document.getElementById("room1").style.filter = "none";
		lightsOn = true;
	}
	if ((!lightsOn) && (gregorOnPainting)){
		console.log("code");
		document.getElementById("code").style.display = "block";
		document.getElementById("code").style.filter = "none";
	}
	else{
		document.getElementById("code").style.display = "none";
	}
}
//unfinished
function unlock(){
	console.log("unlocked.");
	writeDialogue("Console", "Happy Birthday Roxanne! (Click on the thing)");
	document.getElementById("numberPuzzle2").style.display = "none";
	document.getElementById("safe").setAttribute("src","assets/img/safeOpen.png");
	document.getElementById("surprise2").style.display = "block";
}
function hideHotbar(){
	document.getElementById("hotbar").style.display = "none";
	document.getElementById("showHotbar").style.display = "block";
}
function showHotbar(){
	document.getElementById("hotbar").style.display = "block";
	document.getElementById("showHotbar").style.display = "none";
}
//unfinished
function itemClick(item){
	switch(item){
		case "gregorHuman":
			if (itemInHand == "milk"){
				gregorTransform = true;
				console.log("transform");
				hotbarRemove("milk");
				writeDialogue("Gregor", "Wow! Thanks, milk is actually my favorite drink.");
			}
			else if(gregorDialogue == gregorDialogues.length){
				writeDialogue("Gregor", gregorDialogues[Math.floor(Math.random()*gregorDialogues.length)]);
			}
			else{
				writeDialogue("Gregor", gregorDialogues[gregorDialogue]);
				gregorDialogue++;
			}
		break;
		case "gregorMeta":
			writeDialogue("???", "*inaudible noise*");
		break;
		case "painting":
			if (!gregorHuman){
				writeDialogue("???", "*inaudible noise*");
				gregorGoPainting = true;
				console.log("gregorOnPainting");
			}
		break;
		case "numberPuzzle2":
			console.log("number");
			if (itemInHand == "number5"){
				number5Missing = false;
				document.getElementById("numberPuzzle2").children[4].style.display = "block"
				document.getElementById("numberPuzzle2").setAttribute("onclick","inNumberPuzzle()");
				hotbarRemove("number5");
				arrangePuzzles();
			}
			else{
				writeDialogue("Roxanne", "The missing piece must be somewhere.");
			}
		break;
		case "cabinet":
			var width1 = document.getElementById("cabinet").offsetWidth;
			if (!cabinetOpen){
			document.getElementById("cabinet").setAttribute("src", "assets/img/cabinetOpen.png");
			document.getElementById("cabinet").style.left = divW*54/90 - width1*177/576 + "px";
				cabinetOpen = true;
				document.getElementById("number5").style.display = "block";
			document.getElementById("key").style.display = "block";
			}
			
		break;
		case "safe":
			if (itemInHand == "key"){
				keyStatus = true;
				document.getElementById("safe").setAttribute("onclick", "tryCodes()");
				hotbarRemove("key");
			}
			else if (!keyStatus){
				writeDialogue("Roxanne", "It's locked.");
			}
			else{
				writeDialogue("Roxanne", "It's still locked.");
			}
		break;
		default:
		break;
	}
}
//unfinished
function writeDialogue(name, message){
	if(!inProgress){
	document.getElementById("dialogueDiv").style.display = "block";
	var dialogue = document.getElementById("dialogue");
	var dialogueNameDiv = document.getElementById("name");
	inProgress = true;
	inDialogue = true;
	dialogue.innerHTML = "";
	dialogueNameDiv.innerHTML = name;
	var counter = 0;
	var id = setInterval(frame,30);
	function frame(){
		if(counter == message.length){
			clearInterval(id);
			inProgress = false;
		}
		else{
			dialogue.innerHTML += message.charAt(counter);
			counter++;
		}
	}
	}
}
//unfinished
function clickDialogue(){
	if ((!inProgress) && (inDialogue)){
		document.getElementById("dialogueDiv").style.display = "none";
		inDialogue = false;
	}
}
//unfinished 
function openSurprise(){
	if(!inDialogue){
	fadeOut("room2");
	document.getElementById("hotbar").style.display = "none";
	document.getElementById("showHotbar").style.display = "none";
	document.getElementById("surprise").style.display = "block";
	document.getElementsByTagName("polygon")[0].setAttribute("onclick", "toTheLeft2()");
	document.getElementsByTagName("polygon")[1].setAttribute("onclick", "toTheRight2()");
	toTheLeft2();
	}
}

toTheLeft2 = function(){//magdagdag ng fcn para kay gregor transform
	if((!inProgress) && (!inDialogue)){
			openDiv--;
	if(openDiv==0){
		document.getElementsByTagName("polygon")[0].style.display = "none";
	}
	else{
		document.getElementsByTagName("polygon")[1].style.display = "block";
	}
	for(let i = 0; i < slides ;i++){
		document.getElementById("surprise").children[i].style.display = "none";
	}
	document.getElementById("surprise").children[openDiv].style.display = "block";
		

	}
}
toTheRight2 = function(){
	if((!inProgress) && (!inDialogue)){
	openDiv++;
	if(openDiv==30){
		document.getElementsByTagName("polygon")[1].style.display = "none";
	}
	else{
		document.getElementsByTagName("polygon")[0].style.display = "block";
	}
	for(let i = 0; i < slides;i++){
		document.getElementById("surprise").children[i].style.display = "none";
	}
	document.getElementById("surprise").children[openDiv].style.display = "block";
		
	}
}