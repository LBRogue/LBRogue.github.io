function start(){
	let code = prompt("Please enter your code (btw try to use landscape as much as possible hehe portrait orientation still buggy):");
	let idx = getIdx(code)
	writeName(idx);
	getPics(idx);
	getDedics(idx);
}
var codeList=[
"ABCDEF",
"EZFYPY",
"JRCEIW",
"WSOYGJ",
"FQZMBO",
"NUEPJL",
"SCBMRT",
"MIKTYR",
"AVKWJY",
"KBHCLI",
"HNYHKV",
"ZNEFHJ",
"ZONAWQ",
"VRPGUA",
"IQKGNF",
"WEMKKE",
"LZQQXI",
"ELONRE",
"LTJNWH",
"CZBWOW",
"SNZBGL",
"WEWDGC",
"LYIKLY",
"WEKKAN",
"OJLWAM",
"ITAEHR",
"HENTTT",
"VANOTA",
"MACBHK",
"ILTSNJ",
"KEJSKA",
"ARQVDT",
"JBKFXC",
"CZUNWP",
"IGXNUN",
"LSTCJF",
"UASBWM",
"KEQVIQ",
"WPWOMX",
"TVXUGM",
"MKSGHR"
]
var nameList=[
"person",
"Veronica",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
]
var picsList=[
"12345678",
"1458",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
]
var dedicsList=[
"Lorem ",
"Hi. You're probably never going to check this again but yeah. I'm sorry I hurt you. I really never wanted to. It was the one thing I promised myself not to do before I confessed back to you. I'm sorry I wasn't able to become transparent to you immediately. Please know that I tried. I really tried. I love you and ugh I wish there was a way that I could make things right but yeah there isn't. Thank you for the 4 months Veronica. For once again in my life I was happy. For the past 3 years I didn't think I deserved to be happy but you made me happy. I love you. I love you so much. I just wish you the best and I hope somebody will make you happy and give you the world someday. You really deserve it. I want to be that person but yeah. I'm sorry for everything Veronica. I really am.",
//"Hi Veronica !! Yk I’m actually bad at expressing myself through words but I’m gonna try my best HAHA. Throughout Pisay, I have these weird things that I randomly remember from time to time for no reason at all. One of these things was the time that we were working on the English script at like super late in the night. Looking back, you were one of the people I looked up to (up until now actually) because you’re one of the most amazing people I know. I’m so glad I met you and I’m happy that we finally got closer during our last year in Pisay. On another note, I vaguely remember you wishing me luck with my previous crush back in Grade 9 and hoping that my plot twist will come in 2019 if ever. The plot twist was 3 years late but it was all worth it. You manage to bring out the best in me. Thank you for the past 4 months and know that I’m always here for you :)). Happy graduation !! You finished high school with flying colors and I’m so so so proud of you !! I can’t wait to see you soar higher in the next chapter of your life.",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D",
"Hi! Please come back for dedics on June 25 ;D"
]
function writeName(idx){
	var name = "Hi "+ nameList[idx] +"!"
	var nameDiv = document.getElementById("name")
	nameDiv.innerHTML = "";
	var counter2 = 0;
	var id2 = setInterval(frame,30);
	function frame(){
			if(counter2 == name.length){
				clearInterval(id2);
				inProgress = false;
			}
			else{
				nameDiv.innerHTML += name.charAt(counter2);
				counter2++;
			}
		}
}
function getIdx(code){
	return codeList.indexOf(code)
}
function getPics(idx){
	releasePics(picsList[idx]);
}
function getDedics(idx){
	writeDedic(dedicsList[idx]);
}
var inProgress = false;
function writeDedic(message){
	if (!inProgress){
		var nameDiv = document.getElementById("name")
		var messageDiv = document.getElementById("message")
		messageDiv.innerHTML = "";
		var counter = 0;
		inProgress = true;
		var id = setInterval(frame,50);
		function frame(){
			if(counter == message.length){
				clearInterval(id);
				inProgress = false;
			}
			else{
				messageDiv.innerHTML += message.charAt(counter);
				counter++;
			}
		}
	}
}
function releasePics(code){
	for (let a = 0;a<code.length;a++){
		var num = code.charAt(a)
		num = parseInt(num)
		if (num<5){
			document.getElementById("div"+num).classList.add("enterLeft")
		}
		else{
			document.getElementById("div"+num).classList.add("enterRight")
		}
	}
}