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
"LSTCJF",
"LYIKLY",
"WEKKAN",
"OJLWAM",
"WEWDGC",
"KEJSKA",
"CZUNWP",
"ARQVDT",
"IGXNUN",
"JBKFXC",
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
"ITAEHR",
"HENTTT",
"VANOTA",
"MACBHK",
"ILTSNJ",
"UASBWM",
"KEQVIQ",
"WPWOMX",
"TVXUGM",
"MKSGHR"
]
var nameList=[
"person",
"Veronica",
"Ma'am Mara",
"Sir Edge",
"Sir Tarcy",
"Ma'am Kiel",
"Sir Nathan",
"Sir Aids",
"Ma'am Faith",
"Ma'am Sarah",
"Sir Erin",
"Ma'am Edlen",
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
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
"12345678",
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
//"Hi. You're probably never going to check this again but yeah. I'm sorry I hurt you. I really never wanted to. It was the one thing I promised myself not to do before I confessed back to you. I'm sorry I wasn't able to become transparent to you immediately. Please know that I tried. I really tried. I love you and ugh I wish there was a way that I could make things right but yeah there isn't. Thank you for the 4 months Veronica. For once again in my life I was happy. For the past 3 years I didn't think I deserved to be happy but you made me happy. I love you. I love you so much. I just wish you the best and I hope somebody will make you happy and give you the world someday. You really deserve it. I want to be that person but yeah. I'm sorry for everything Veronica. I really am.",
"Hi Veronica !! Yk I’m actually bad at expressing myself through words but I’m gonna try my best HAHA. Throughout Pisay, I have these weird things that I randomly remember from time to time for no reason at all. One of these things was the time that we were working on the English script at like super late in the night. Looking back, you were one of the people I looked up to (up until now actually) because you’re one of the most amazing people I know. I’m so glad I met you and I’m happy that we finally got closer during our last year in Pisay. On another note, I vaguely remember you wishing me luck with my previous crush back in Grade 9 and hoping that my plot twist will come in 2019 if ever. The plot twist was 3 years late but it was all worth it. You manage to bring out the best in me. Thank you for the past 4 months and know that I’m always here for you :)). Happy graduation !! You finished high school with flying colors and I’m so so so proud of you !! I can’t wait to see you soar higher in the next chapter of your life.",
"Hi Ma’am Mara! First of all po, I want to thank you for being the best Silid Adviser one could ever ask for huhu. Back in Grade 11, I was still super shy but I didn’t really feel out of place sa Silid even though we were only in an online set-up. You were so kind and approachable that although I’m still a bit shy, it didn’t feel weird to share stories with you along with my close friends. Most of the last 2 years in Pisay were spent online but you were one of the advisers that I truly became close to. Thank you for everything Ma’am!! From the kwentuhans sa k-lane to helping me out sa college applications, I’m super super grateful and I’m glad I got to be your advisee. Your guidance really helped me out during my SYP years. There’s so much more I want to say and thank you for but I can’t seem to put it into words so hehe. ILY Ma’am! <333",
"Hi Sir Edge! Thank you po for being an amazing teacher both in CS 5 and as the urban legendz’ res adviser hehe. Although I won’t be taking a computer science course in college, I’m sort of inspired to learn it as a hobby due to its versatility and the way you presented it to us. Sad though that I didn’t get to experience the samsung lab hAHHAHAHA. Thank you for everything Sir!",
"Hi Sir Tarcy! Thank you po for being a super chill and great teacher sa CS hAHAHAHHA. Although I used to play a lot during CS classes I still learned a lot especially through the practical exams. Learning javascript was kinda cool so i lowkey wanted to explore it on my own through small projects even though I’m not going to take CS for college HAHAHAH. Thank you for everything Sir!",
"Hi Ma’am Kiel! Thank you po for being a chill teacher for Math. Even though I kinda dislike geometry, class was still pretty fun and I still learned a lot hehe. Thank you for everything, Ma’am!",
"Hi Sir Nathan! Thank you po for being a chill and approachable teacher for AdTech during Grade 8. I still remember being proud of my trebuchet back then and when I see engg/tech vids online, I become kinda excited and I think AdTech contributed to that. Thank you for everything, Sir!",
"Hi Sir Aids! Thank you po for being a super approachable and amazing Res teacher hehe. Kahit mahirap yung research project namin, it was slyt easier with your guidance and Research became bearable. Even with the slyt addition of interactive games for Research, it really helped us enjoy it better rather than seeing it as a merely requirement so hehe. Di na ako umasa na magiging 2-peat kita for Res 3 pero masaya kasi yun ang nangyari hehe. Thank you so much for everything Sir!",
"Hi Ma’am Faith! Thank you po for being an amazing teacher for Math during Grade 11. Even though it was the first online year and nakakalito yung Math, you ensured that we learned a lot. Thank you for everything, Ma’am!",
"Hi Ma’am Sarah! Thank you po for being a super cool and approachable SocSci teacher and Batch adviser hehe. Although doing the Mitsa Tutoring was kinda difficult, I’m glad that we had a teacher that was super approachable and willing to help and guide us throughout. Thank you for everything, Ma’am!",
"Hi Sir Erin! Thank you po for being an amazing teacher back in Grade 8 as well as being the SEC adviser in Grade 12. Even though we were unfamiliar with it, your guidance and presence helped us a lot to execute it properly within the online school year. Other than simply implementing the elections, having the meetings with you helped me develop my communication skills as I’m actually a super shy person. Thank you for everything, Sir!",
"Hi Ma’am Edlen! Thank you po for being a super cool and amazing teacher back in Grade 8. Even though I played games (a lot, specifically snake) during our classes, I still learned a lot with your method of teaching and guidance. Thank you for everything, Ma’am!",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)",
"Hi! Please come back for dedics on July 15??? ;D (ewan ko na talaga kung kailan sorry WHAHAHAAHA)"
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