var pollInput = document.getElementById("answer")
var spanTemp = document.getElementsByTagName("span")[0]
document.getElementById("checkButton").addEventListener("click", check)
var listOfNames = [
"Alfonso Jose Tanael",
"Amos Santos",
"Basil Cagayan",
"Carlo Viado Amigable",
"Daniel Bacud",
"Forth Garcia",
"Francis Uy",
"Gabriel Tee",
"Hans Carinugan",
"Ivan Benedict Pagaddu",
"Ivan Pitogo",
"James Ordine Gunnacao",
"Jan Francois Severo",
"Jeth Balicao",
"Jhaymar Amir Yu",
"Jiggy Dungca",
"Joaquin Covar",
"Jonas Victor Guinto",
"Jose Oliver Narvasa",
"Joshua Adviento",
"Justin Garcia",
"Lorenzo Manuel Ante",
"Marc Yuri Madayag",
"Marion Magsuay",
"Mark Angelo del Rosario",
"Miguel Mariano",
"Nelson Paguirigan Jr.",
"Patrick Mercado",
"Rafael Luis Mariano",
"Raphael A. Odevillas",
"Red Ordoñez",
"Simoun Sitson",
"Vincent Arnold Gomez",
"Yanni Ranollo"
]
var listOfNamesTG = [
'Lorenzo Manuel Ante', 'Simoun Sitson', 'Joshua Adviento', 'Nelson Paguirigan', 'jv guinto', 'Miguel Mariano', 'Jhaymar Yu', 'Joaquin Covar', 'JeTH', 'Daniel', 'James Ordine', 'Patrick David Mercado', 'Stephen', 'Raphael Odevilas', 'Amos Santos', 'Yanni Ranollo', 'Francis Ryan Uy', 'Oliver Narvasa', 'Rafael Mariano', 'Marion Magsuay', 'ivan', 'Gabriel Tee', 'carv', 'Ivan Pagaddu', 'Aljo Tanael', 'Franco Severo', 'Gelo', 'hans carinugan', 'Red', 'Vincent Gomez', "Forth Garcia", "Jiggy Dungca"
]
function check(){
	var tempListOfNames = listOfNames
	var pollInputAnswer = pollInput.value
	console.log(pollInputAnswer)
	for(i=0;i<tempListOfNames.length;i++){
		console.log(tempListOfNames[i])
		if((pollInputAnswer.includes(tempListOfNames[i]))){
			tempListOfNames.splice(i,1)
			i--;
		}
	}
	var tempString = "";
	tempString += "<br />"
	for(i=0;i<tempListOfNames.length;i++){
		tempString +='@'
		tempString +=tempListOfNames[i]
		tempString += "\n\n"
		tempString += "<br />"
	}
	console.log(tempString)
	spanTemp.innerHTML=tempString;
	console.log(tempListOfNames)
}

var pollInput2 = document.getElementById("answer2")
var spanTemp2 = document.getElementsByTagName("span")[1]
document.getElementById("checkButton2").addEventListener("click", check2)
function check2(){
	var tempListOfNames = listOfNamesTG
	var pollInputAnswer = pollInput2.value
	console.log(pollInputAnswer)
	for(i=0;i<tempListOfNames.length;i++){
		console.log(tempListOfNames[i])
		if((pollInputAnswer.includes(tempListOfNames[i]))){
			tempListOfNames.splice(i,1)
			i--;
		}
	}
	var tempString = "";
	tempString += "<br />"
	for(i=0;i<tempListOfNames.length;i++){
		tempString +='@'
		tempString +=tempListOfNames[i]
		tempString += "\n\n"
		tempString += "<br />"
	}
	console.log(tempString)
	spanTemp2.innerHTML=tempString;
	console.log(tempListOfNames)
}