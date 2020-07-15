var openDiv;
var rooms;
var imgW;
var divH;
var divW;
var noDialogues = 0;
var vacantPos = 8;
var inProgress = false;
var itemSelected = false;
var gregorHuman = true;
var itemInProgress;
var itemInHand;
var inAnimation = false;
var gregorTransform = false;
var firstDialogues = [
	'Hello, there, adjfalsjdfsjadhfljshagjhsdaflkjhsadfhsajdfjhsdaf',
	'part2 jadshfasljdhljsahdfkljshadfkjshadfhsjdafajslhdf'
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
function proceed(){
	var counter = 0;
	if((!inProgress) && (noDialogues == firstDialogues.length)){
		startGame();
	}
	else if(!inProgress){
	inProgress = true;
	document.getElementById("dialogueDiv").children[0].innerHTML = "";
	var id = setInterval(frame,50);
	function frame(){
		if(counter == firstDialogues[noDialogues].length){
			clearInterval(id);
			inProgress = false;
			noDialogues++;
		}
		else{
			document.getElementById("dialogueDiv").children[0].innerHTML += firstDialogues[noDialogues].charAt(counter);
			counter++;
		}
	}
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
			numberPuzzle2.children[i].style.top = 0.15 + 2.95*(Math.floor(numberPuzzle.children[i].position/3)) + "vw";
			numberPuzzle2.children[i].style.left = 0.15 + 2.95*(numberPuzzle.children[i].position%3) + "vw";
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
	rooms = 4;
	imgW = document.getElementsByTagName("img")[0].offsetWidth;
	divW = document.getElementById("room2").offsetWidth; 
	divH = document.getElementById("room2").offsetHeight; 
	document.getElementsByTagName("area")[0].setAttribute("coords","0,0,0,"+imgW/2+","+imgW/2+","+imgW/2+","+imgW/2+",0");
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
	if(!inProgress){
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
	if(!inProgress){
	openDiv++;
	if(openDiv==3){
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
	var keyStatus = true;
	for(let i = 0; i < numbers.length; i++){
		if(numbers[i].position != numberPuzzleCode[i]){
			numberPuzzleStatus = false;
		}
	}
	if((numberPuzzleStatus) && (symbolsStatus) && (keyStatus)){
		unlock();
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
}
//unfinished
function hotbarRemove(item){
	var hotbar = document.getElementById("hotbar");
	for(let i = 0; i < hotbar.children.length; i++){
		if (hotbar.children[i].item == item){
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
	if(!gregorHuman){
		
	}
}
//unfinished
function unlock(){
	console.log("unlocked.");
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
			}
		break;
		default:
		break;
	}
}