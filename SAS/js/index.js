var current = 0; //0 for Poem, 1-8 for modules
function start(){
	idx=0;
	writeName(idx);
	releasePics()
	writeMessage(msgList[0]);
}
var codeList=[
"ABCDEF",
]
var nameList=[
"Ang Unang Hakbang",
"Module 1",
"Module 2",
"Module 3",
"Module 4",
"Module 5",
"Module 6",
"Module 7",
"Module 8"
]
var picsList=[
"12345678",
]
var msgList=[
"Nagsisimula sa tanong, sino nga ba ako?<isang anak, estudyante, iskolar, Filipino<Isang nagsimula sumubok, nahirapan, nabigo<ngunit bumangon, nagpursigi, lumaban, natuto<<Sa pagsagot ng tanong na ito<Marami tayong napagtatanto <Kilala nga ba natin ang ating sarili?<O ang sarili ay nakaasa sa tingin ng mga tao<Mahalagang matalakay, mabusising pagisipan<Sapagkat ito ang pundasyon ng ating paninindigan<<kaya pano nga ba natin ito sisimulan<Marahil ayon ang tanong mo<Tumigil huminto at “magreflect” muna sa pagkatao<Kilalanin ang sarili, pisikal man, emosyonal o akademiko<Tumingin sa paligid kung ano ba talaga ang totoo?<At Siguraduhing malapit ito sa depinisyon ng pagkakuntento<<Sa pagkilala ng sarili, sana’y dito nagkamalayan<Na ang sarili’y palaging konektado sa lipunan<Hindi maiiwasang lumitaw ang ating paninindigan<Sapagkat eto ang patunay ng ating pagka”human”<<Kaya tumindig ka, ipalaganap ang iyong paniniwala<Bilang iskolar, estudyante o kahit tao lang ng masa<Huwag mahiyang ipakita ang pansariling pulitika<Tandaang ang mulat na pumikit ay isang may sala<<Sino nga ba ako, isang mahalagang katanungan<Marami pang paraan na hindi pa napasadahan<Ngunit mahalaga’y nakuha ang kahalagahan<Na isang lingon muna sa kalooban<Ang unang hakbang para sa bayan<at sa ating mabuting kalagayan",//< for break line
"Module 1 is Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus dignissim ipsum non rhoncus. Nullam feugiat orci id libero laoreet imperdiet. Vivamus nec scelerisque justo, nec tristique lacus. In pharetra, sapien sed scelerisque lobortis, magna ante suscipit magna, vitae aliquet lorem sapien eu lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut semper pellentesque nisl sed scelerisque. Nulla id velit et velit tristique consectetur lobortis a erat. Curabitur tortor libero, commodo in ex et, auctor vestibulum leo. Praesent sed augue erat. Pellentesque consectetur sollicitudin ligula, sit amet elementum lacus iaculis sit amet. In id tempor diam, vel hendrerit purus. Suspendisse potenti. Proin blandit sit amet diam vitae facilisis. Aliquam lobortis rutrum facilisis.",
"Module 2 is chuchu",
"Module 3 is chuchu",
"Module 4 is chuchu",
"Module 5 is chuchu",
"Module 6 is chuchu",
"Module 7 is chuchu",
"Module 8 is chuchu"
]
var inProgress2 = false;
function writeName(idx){
	if (!inProgress2){
		var name =  nameList[idx]
		var nameDiv = document.getElementById("name")
		nameDiv.innerHTML = "";
		var counter2 = 0;
		id2 = setInterval(frame2,30);
		function frame2(){
			inProgress2 = true;
			if(counter2 == name.length){
				clearInterval(id2);
				inProgress2 = false;
			}
			else{
				nameDiv.innerHTML += name.charAt(counter2);
				counter2++;
				}
		}
	}
}
function getIdx(code){
	return codeList.indexOf(code)
}
function getDedics(idx){
	writeMessage(msgList[idx]);
}
var inProgress = false;
function writeMessage(message){
	if (!inProgress){
		tempMessage = ""
		var nameDiv = document.getElementById("name")
		var messageDiv = document.getElementById("message")
		messageDiv.innerHTML = "";
		var counter = 0;
		inProgress = true;
		id = setInterval(frame,40);
		function frame(){
			if(counter == message.length){
				clearInterval(id);
				inProgress = false;
			}
			else{
				tempMessage +=message.charAt(counter)
				if (message.charAt(counter)=="<"){
					tempMessage+= "br />"
				}
				messageDiv.innerHTML = tempMessage;
				counter++;
			}
		}
	}
}
function releasePics(){
	code = '12345678'
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
function module(num){
	if (num == 0){
		document.getElementById("vid").style.display = "block";
	}
	else{
		document.getElementById("vid").style.display = "none";
	}
	if (current !=num){
		current=num;
		clearInterval(id);
		clearInterval(id2);
		inProgress = false;
		inProgress2 = false;
		writeName(num);
		writeMessage(msgList[num]);
	}
}