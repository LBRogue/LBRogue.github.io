/* monty hall problem thing
	function Probability(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*3)
		choice = Math.floor(Math.random()*3)
		for(j=0;j<3;j++){
		if((j!=correct)&&(j!=choice)){
			choice = 3 - (j+choice);
			break;
		}
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability2(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*4)
		choice = Math.floor(Math.random()*4)
		for(k=0;k<4;k++){
			if((k!=correct)&&(k!=choice)){
			break;
			}
		}
		for(j=k+1;j<4;j++){
		if((j!=correct)&&(j!=choice)){
			choice = 6 - (k+j+choice);
			break;
		}
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability3(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*4)
		choice = Math.floor(Math.random()*4)
		var k = choice;
		for(j=0;j<4;j++){
		if((j!=correct)&&(j!=choice)){
			while((k==choice)||(k==j)){
			k = Math.floor(Math.random()*4)
			}
			choice = 6 - (k+j+choice);
			break;
		}
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability4(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*5)
		choice = Math.floor(Math.random()*5)
		for(k=0;k<5;k++){
			if((k!=correct)&&(k!=choice)){
			break;
			}
		}
		for(l=k+1;l<5;l++){
		if((l!=correct)&&(l!=choice)){
			break;
		}
		}
		for(j=l+1;j<5;j++){
		if((j!=correct)&&(j!=choice)){
			choice = 10 - (k+j+l+choice);
			break;
		}
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability5(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*5)
		choice = Math.floor(Math.random()*5)
		var k = choice;
		var l = choice;
		for(j=0;j<4;j++){
		if((j!=correct)&&(j!=choice)){
			while((k==choice)||(k==j)){
			k = Math.floor(Math.random()*5)
			}
			while((l==choice)||(l==j)||(l==k)){
			l = Math.floor(Math.random()*5)
			}
			choice = 10 - (k+j+l+choice);
			break;
		}
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability6(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*3)
		choice = Math.floor(Math.random()*3)
		choice2 = Math.floor(Math.random()*3)
		if(choice!=choice2){
			choice = choice2
		}
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}
	function Probability7(x){
		var correct
		var choice
		var wrong
		var counter = 0
		for(i=0;i<x;i++){
		correct = Math.floor(Math.random()*5)
		choice = Math.floor(Math.random()*5)
		for(k=0;k<5;k++){
			if((k!=correct)&&(k!=choice)){
			break;
			}
		}
		for(l=k+1;l<5;l++){
		if((l!=correct)&&(l!=choice)){
			break;
		}
		}
		var j = choice
		while((j==choice)||(j==k)||(j==l)){
			j=Math.floor(Math.random()*5)
		}
			choice = 10 - (k+j+l+choice);
		if(correct == choice){
			counter++
		}
		}
		console.log(counter)
	}*/
		var vectorArray = [];
		var numOfVectors = 2;
		function generateVectors(){
			vectorArray = [];
			for (let a=0;a<numOfVectors;a++){
				var tempMagnitude = Math.floor(Math.random()*900+100)/10
				var tempAngle = Math.floor(Math.random()*3600)/10
				vectorArray.push([tempMagnitude, tempAngle])
			}
		}
		function vectorToComponents(vector){
			var magnitude = vector[0]
			var angle = vector[1]
			var Vx = magnitude*Math.cos(angle*Math.PI/180);
			var Vy = magnitude*Math.sin(angle*Math.PI/180);
			return [Vx, Vy]
		}
		function componentsToVector(components){
			var Vx = components[0]
			var Vy = components[1];
			var R = Math.sqrt(Vx**2 + Vy**2);
			var angle = 180*Math.atan(Vy/Vx)/Math.PI;
			if (Vx < 0){
				angle=angle+180;
			}
			return [R,angle];
		}
		function findResultantVector(){
			var Rx = 0;
			var Ry = 0;
			for (let a=0;a<numOfVectors;a++){
				var components = vectorToComponents(vectorArray[a]);
				Rx = Rx + components[0]
				Ry = Ry + components[1]
			}
			console.log("Rx:"+String(Rx));
			console.log("Ry:"+String(Ry));
			resultantVectorSF = componentsToVector([Rx,Ry])
			console.log(resultantVectorSF)
			return resultantVectorSF;
		}
		var resultantVectorSF = [];
		
		var number1 = Math.floor(Math.random()*900+100)
		var number2 = Math.floor(Math.random()*900+100)
		var number3
		var number4
		var operation = "add"
		var correctAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		function check(){
			console.log("checking")
			var magnitudeRealAnswer = Math.round(resultantVectorSF[0]*10)/10
			var angleRealAnswer = Math.round(resultantVectorSF[1]*10)/10
			if((magnitudeRealAnswer==document.getElementById("magnitude").value)&&(angleRealAnswer==document.getElementById("angle").value)){
				correctAnswers[0]++
				document.getElementsByTagName("span")[0].innerHTML = correctAnswers[0]
				renew()
			}
					
		}
		function start(){
			renew();
		}
		function renew(){
			generateVectors();
			findResultantVector();
			document.getElementById("magnitude").value = ""
			document.getElementById("angle").value = ""
			document.getElementById("correctAnswer").innerHTML = ""
			var pEquation = document.getElementById("equation");
			pEquation.innerHTML = "";
			for (let a=0;a<numOfVectors;a++){
				pEquation.innerHTML += "Vector "+ String(a+1) +": Magnitude = "+ String(vectorArray[a][0])+"; Angle = " + String(vectorArray[a][1]);
				pEquation.innerHTML += "<br />";
			}
		}
		function primeFactorization(number){
			var number2 = number
			var factors = []
			for(i=2;i<=number2;i++){
				if(number%i==0){
					factors.push(i)
					number/=i
					i--
				}	
			}
			return factors
		}	
		function hcf(number1,number2){
			var number1Factorized = primeFactorization(number1)
			var number2Factorized = primeFactorization(number2)
			var commonFactors = [1]
			var hcf = 1
			for(a=0;a<number1Factorized.length;a++){
				for(b=0;b<number2Factorized.length;b++){
					if(number1Factorized[a]==number2Factorized[b]){
						commonFactors.push(number1Factorized[a])
						number1Factorized.splice(a,1)
						number2Factorized.splice(b,1)
						a--
						b--
					}
				}
			}
			for(i=0;i<commonFactors.length;i++){
				hcf*=commonFactors[i]
			}
			return hcf
		}
		function fractionSimplify(numerator,denominator){
			var gcf = hcf(numerator,denominator)
			return numerator/gcf + "/" + denominator/gcf
		}	
		function add(){
		if(operation !="add"){
		operation = "add"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[0]
		renew()
		}
		
		}
		function sub(){
		if(operation !="sub"){
		operation = "sub"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[1]
		renew()
		}
		}
		function mult(){
		if(operation !="mult"){
		operation = "mult"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[2]
		renew()
		}
		}
		function divi(){
		if(operation !="divi"){
		operation = "divi"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[3]
		renew()
		}
		}
		function add2(){
		if(operation !="add2"){
		operation = "add2"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[4]
		renew()
		}
		
		}
		function sub2(){
		if(operation !="sub2"){
		operation = "sub2"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[5]
		renew()
		}
		}
		function mult2(){
		if(operation !="mult2"){
		operation = "mult2"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[6]
		renew()
		}
		}
		function divi2(){
		if(operation !="divi2"){
		operation = "divi2"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[7]
		renew()
		}
		}	
		function lcm(){
		if(operation !="lcm"){
		operation = "lcm"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[8]
		renew()
		}
		}
		function gcf(){
		if(operation !="gcf"){
		operation = "gcf"
		document.getElementsByTagName("span")[0].innerHTML = correctAnswers[9]
		renew()
		}
		
		}
		var arrayList = [];
		function reveal(){
			var magnitudeRealAnswer = Math.round(resultantVectorSF[0]*10)/10
			var angleRealAnswer = Math.round(resultantVectorSF[1]*10)/10
			document.getElementById("correctAnswer").innerHTML = "Resultant Vector: <br />"
			document.getElementById("correctAnswer").innerHTML += "Magnitude: " + String(magnitudeRealAnswer) +"<br />";
			document.getElementById("correctAnswer").innerHTML += "Angle: " + String(angleRealAnswer);
		}
		document.getElementById("checkButton").addEventListener("click", check)
		document.getElementById("revealButton").addEventListener("click", reveal)
		document.getElementsByTagName("button")[0].addEventListener("click", renew)
		/*document.getElementsByTagName("button")[1].addEventListener("click", sub)
		document.getElementsByTagName("button")[2].addEventListener("click", mult)
		document.getElementsByTagName("button")[3].addEventListener("click", divi)
		document.getElementsByTagName("button")[4].addEventListener("click", add2)
		document.getElementsByTagName("button")[5].addEventListener("click", sub2)
		document.getElementsByTagName("button")[6].addEventListener("click", mult2)
		document.getElementsByTagName("button")[7].addEventListener("click", divi2)
		document.getElementsByTagName("button")[8].addEventListener("click", lcm)
		document.getElementsByTagName("button")[9].addEventListener("click", gcf)*/