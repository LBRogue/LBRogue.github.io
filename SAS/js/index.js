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
"Icebreakers (Modules 1-3) [Enzo]",
"Application (Modules 4-6) [Enzo]",
"Integration (Modules 7-8) [Enzo]",
"Synthesis (SAS Journey) [Enzo]",
"Icebreakers (Modules 1-3) [Laude]",
"Application (Modules 4-6) [Laude]",
"Integration (Modules 7-8) [Laude]",
"Synthesis (SAS Journey) [Laude]"
]
var picsList=[
"12345678",
]
var msgList=[
"Nagsisimula sa tanong, sino nga ba ako?<isang anak, estudyante, iskolar, Filipino<Isang nagsimula sumubok, nahirapan, nabigo<ngunit bumangon, nagpursigi, lumaban, natuto<<Sa pagsagot ng tanong na ito<Marami tayong napagtatanto <Kilala nga ba natin ang ating sarili?<O ang sarili ay nakaasa sa tingin ng mga tao<Mahalagang matalakay, mabusising pagisipan<Sapagkat ito ang pundasyon ng ating paninindigan<<kaya pano nga ba natin ito sisimulan<Marahil ayon ang tanong mo<Tumigil huminto at “magreflect” muna sa pagkatao<Kilalanin ang sarili, pisikal man, emosyonal o akademiko<Tumingin sa paligid kung ano ba talaga ang totoo?<At Siguraduhing malapit ito sa depinisyon ng pagkakuntento<<Sa pagkilala ng sarili, sana’y dito nagkamalayan<Na ang sarili’y palaging konektado sa lipunan<Hindi maiiwasang lumitaw ang ating paninindigan<Sapagkat eto ang patunay ng ating pagka”human”<<Kaya tumindig ka, ipalaganap ang iyong paniniwala<Bilang iskolar, estudyante o kahit tao lang ng masa<Huwag mahiyang ipakita ang pansariling pulitika<Tandaang ang mulat na pumikit ay isang may sala<<Sino nga ba ako, isang mahalagang katanungan<Marami pang paraan na hindi pa napasadahan<Ngunit mahalaga’y nakuha ang kahalagahan<Na isang lingon muna sa kalooban<Ang unang hakbang para sa bayan<at sa ating mabuting kalagayan",//< for break line
"The first three modules, as the title suggests, were sort of introductory modules, allowing me to become interested in what the course Self and Society has stored for us. Through the perspectives of the self, self constructs, and self reflection, my curiosity regarding the story behind my existence is satisfied. I was able to start to vocalize what I felt and what I had wondered all these years. Even within these three modules, I started to see how important the course and the Self is. It showed me how important knowing oneself is, and how it affects our relationship with others. It allowed me to better grasp the goals I have in life and what steps to take to achieve these macro and micro goals. Like what Socrates said, “The unexamined life is not worth living”. It allowed me to reflect on my own identity—of who I am in this world full of mysteries. Being opened up to the relationship of the Self and Society or in other words, sociological imagination, allowed me to see my path in my life clearer and better. From comparing my ideal self to my real self, up until my unique coat-of-arms, I got to know myself better, slowly but surely.  I had already benefited from these three modules alone, so it made me wonder how much more I can understand from the remaining modules.",
"These modules acted as the application stage of the various concepts I learned from the previous modules. With these concepts, I was able to look deeper than the tip of my own iceberg. Although answering the tests for intelligence felt kind of repetitive and boring, knowing the results by the end and whether to challenge or accept it was definitely worth it. It allowed me to see my strengths and weaknesses, and through various resources, helped me plan on how to develop both of these to have a better balanced intellectual, emotional, digital, and biological self. Moreover, it made me realize that the simple things that I enjoy daily, such as random puzzles and science videos, actually help out a lot in the bigger picture. Even if my intelligence only grows by 1% each day, this compounds throughout the years, reaching peaks that I wouldn’t have thought of before. Still, I developed these intelligences unknowingly, and this time, I can target which ones I should develop, allowing me to be a balanced person. This, along with the economic self, allows me to make the right decisions, whether it would be spending my precious time or money.",
"After knowing myself in the last six modules, these last two modules tackled the steps in using these concepts and new knowledge to find the bridge between the Self and Society, allowing one to impact their surroundings positively. Since our Self is born out of social interactions, and is continuously being shaped by this, knowing the right steps and right decisions greatly help in ensuring that one is on the right path towards their self-actualization and maximum potential. Although the Self is shaped by the society, it can also shape and influence the society in its own ways. With this, the significance of knowing oneself grows significantly, as it partakes in a positive feedback loop, exponentially shaping oneself and its society. As a scholar of UP Manila as well as DOST, it showed me the potential I have in influencing others, and using my voice to shape this world into a better one. Like what Gandhi said “Be the change you want to see in the world”. This inspires me to be a (Ulirang Pilipinong Mag-aaral) UPM, para sa bayan.",
"Through all the modules and activities in this SAS Journey, I see my path clearer than ever, allowing me to make the right decisions most of the time. As I socialize with others and find my own place in this world, I’ll know myself better, and find the right steps toward self-actualization. In addition to the knowledge I have gained about myself, I was able to go out of my comfort zone, socializing with people who were previously strangers to my eyes. Although this final project is a small stepping stone, it already shows that with the right steps and the right people, we can reach heights that we have never seen before. As I find my purpose and place in this world, I’ll keep referring to this newly found toolkit, perhaps a cheat code, to an examined life, a life worth living. Self and Society isn’t only a course, it is a way of life—one that I’ll be forever grateful for.",
"This journey was truly a short but meaningful one to say the least. I enlisted into this GE out of desperation to fill up my required mid year units but what I got after was way more than I expected. The subject started out hard for me, especially how sharing my insights about topics that I was rather unfamiliar with proved to be difficult especially to an audience that most of which were unknown to me. The 8 modules provided an intricate journey from knowing one’s self into integrating into one’s society. It dived on various topics, may it be the self-construct, various aspects of the self and even one’s own political nature. The first three modules felt like icebreakers to me.  To be quite frank, I started answering the modules at a rough start. I was struggling to figure out how to answer it and took my time when adequately presenting in a creative manner. Despite the difficulties, it proved to provide me with concrete ways of knowing myself better. From identifying my coat of arms to describing myself on the various definitions of the self-construct, these modules made me understand myself on a deeper level and provide me with the set of skills I need to traverse the next modules.",
"The next three modules provided new concepts of which to look at myself. Answering module 5 was especially entertaining for me as it was interactive enough to make it seem like a fun activity rather than a module with all the added videos to consider. Answering such tests helped me in gauging my capabilities and although the results should still be taken with a grain of salt, it was still a helpful tool in analyzing myself through these aspects. It is through such assessments that I was made to understand and appreciate the certain strengths and weaknesses that I have, especially based on the multiple intelligence theory. The interactive sessions for module 6 were also quite helpful since I was able to understand and relate to the status of my classmates’ and myself’s digital and economical self which further aided in improving or validating certain habits and becoming more aware of the issues surrounding such topics. Overall, going through these modules, may it be economical, digital, intellectual, emotional or physical, gave me a clearer picture of who I am and what I should strive to do.",
"The last 2 was an integration of myself into the society. Reflecting on these modules helped me realize how connected oneself is to the environment and the community he/she grows in. As I answered the module, I began to notice how major social agents influenced me a lot, may it be my parents, institution or just the country I live in. Values such as hardwork and perseverance became ingrained in me and later in life such social agents helped me focus such energy into serving my fellow countrymen. As a scholar of the people from high school up until college, I realized that I should be using such opportunities to help my community not because it is expected of me but because I feel like it is the right thing to do. For now, I have come to the realization that the best thing to do is to study hard and be engaged so that one day, I can serve the people with the capabilities I have honed throughout my life as a student.",
"As I end my SAS journey I see myself more self-aware and somewhat confident than before taking this course. This subject has not only provided me with modules to look back and reflect upon but also redirected me in a path for further self-development by instilling me with the skills I need to sustain such a lifelong process. In order to adequately conceptualize this month full of learning about ourselves and its connection to society, our synthesis combined Enzo’s coding skills with my love for making a poem to create an interactive website for our output. For the poem, it outlined our whole sas journey by mentioning some important points for the modules such as reflection, the different aspects of the self,  and the relation of the self with society. Overall this output is a testament of our drive in both the continuous process of learning about ourselves and the overarching will to be the best version of oneself."
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
		id = setInterval(frame,30);
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