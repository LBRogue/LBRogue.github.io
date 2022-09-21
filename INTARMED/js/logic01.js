function simplify(arrOfValues){
	console.log("SIMPLIFY")
	var equation = arrOfValues[0];
	var arr1 = arrOfValues[1];
	if (arr1.length ==1){
		if (equation.charAt(0)=="~"){
			return [equation.charAt(1),[!arr1[0]]]
		}
		else{
			return [equation.charAt(0),arr1]
		}
	}
	var arrVar = [true,true]
	var varcounter = 0;
	var ifNotNot = true;//checks if the var has a not beforehand
	var counter = 0;
	var andIsTrue = true;
	var isParentheses = false;
	var addtlChar = 0;
	var addtlChar2 = 0;
	var startCharIdx = 0;
	var varcounter2 = 0;
	var endCharIdx = equation.length;
	var var1 = "";
	for (let a=0; a<equation.length; a++){
		if(equation.charAt(a)=="("){
			isParentheses = true;
			addtlChar=1;
		}
	}
	for (let a=0; a<equation.length; a++){
		if (isParentheses){
			if((equation.charAt(a) == "p")||(equation.charAt(a) == "q")||(equation.charAt(a) == "r")||(equation.charAt(a) == "s")||(equation.charAt(a) == "t")||(equation.charAt(a) == "u")){
				varcounter2++;
			}
			if(equation.charAt(a)=="("){
				isParentheses = false;
			}
		}
		else{
			if(equation.charAt(a)=="~"){//~ is a placeholder for not notation
				//console.log("not")
				//console.log(equation.charAt(a+1))
				ifNotNot = false;
				if (varcounter ==0){
					addtlChar2 = 1
				}
			}
			else if((equation.charAt(a) == "p")||(equation.charAt(a) == "q")||(equation.charAt(a) == "r")||(equation.charAt(a) == "s")||(equation.charAt(a) == "t")||(equation.charAt(a) == "u")){
				//console.log(ifNotNot)
				//console.log(equation.charAt(a))
				if(ifNotNot){
					arrVar[varcounter]=arr1[varcounter+varcounter2]
				}
				else{
					arrVar[varcounter]=(!arr1[varcounter+varcounter2])
				}
				if (varcounter==0){
					var1=equation.charAt(a)
					startCharIdx = a - addtlChar - addtlChar2
				}
				else if (varcounter==1){
					endCharIdx = a + addtlChar
				}
				varcounter +=1;
				ifNotNot = true;
			}
			else if(equation.charAt(a)=="∨"){//∨ is NOT v HAHAHA
				andIsTrue = false;
			}
			counter++;
			if (varcounter == 2){
				var newEquation = equation.replace(equation.substring(startCharIdx,endCharIdx+1),var1)
				console.log(newEquation)
				var newValue = true;
				//console.log(arrVar[0])
				//console.log(arrVar[1])
				if (andIsTrue){
					newValue = (arrVar[0] && arrVar[1])
				}
				else{
					newValue = (arrVar[0] || arrVar[1])
				}
				console.log(newValue)
				arr1.splice(0+varcounter2,1+varcounter2)
				arr1[0+varcounter2]=newValue
				//console.log(arr1)
				recArr = simplify([newEquation, arr1]);
				if (recArr != [newEquation, arr1]){;
					return recArr;
				}
				return [newEquation, arr1 ];
			}
		}
	}
	return [equation, arr1];
}
/**function compare(fullEq){
	var split = -1;
	//↔ biconditional
	//⇒ conditional
	var isBiconditional = false;
	var firstEqCounter = 0;
	for (let b=0;b<fullEq.length;b++){
		//putangina asdkahjskdjhasdkahsd
		if ((fullEq.charAt(b) == "p")||(fullEq.charAt(b) == "q")||(fullEq.charAt(b) == "r")||(fullEq.charAt(b) == "s")){
			firstEqCounter++;
		}
		else if (fullEq.charAt(b)=="↔"){
			console.log("biconditional")
			split = b;
			isBiconditional = true;
			break;
		}
		else if(fullEq.charAt(b)=="⇒"){
			split = b;
			break;
		}
	}
	var firstEq = fullEq.substring(0,split)
	var secondEq = fullEq.substring(split+1,fullEq.length)
	var firstEqRes = 
}
**/
function compare(compArr){
	var leftEq = compArr[0]
	var leftEqArr = compArr[1]
	var operator = compArr[2]
	var rightEq = compArr[3]
	var rightEqArr = compArr[4]
	//↔ biconditional
	//⇒ conditional
	var leftSolved = simplify([leftEq,leftEqArr])
	console.log("LEFT:"+leftSolved[1][0])
	var rightSolved = simplify([rightEq,rightEqArr])
	console.log("RIGHT:"+rightSolved[1][0])
	console.log("PROCESSING")
	if (operator =="↔"){
		return ((leftSolved[1][0]&&rightSolved[1][0])||((!leftSolved[1][0])&&(!rightSolved[1][0])))
	}
	else if (operator =="⇒"){
		if (!leftSolved[1][0]){
			return true;
		}
		return (leftSolved[1][0]&&rightSolved[1][0])
	}
	else{
		error();
	}
}
function error(){
	console.log("ERROR!!!")
}
function generator(){
	var tfArr = [true,false]
	var opArr = ["↔","⇒"]
	var leftEq = "";
	var leftEqArr = [];
	var rightEq = "";
	var rightEqArr = [];
	var charList = ['p','q','r','s','t','u']
	var counter=0;
	var rng1 = rng(3)
	var rng2 = rng(3)
	var rng3=rng(2)
	var rng4=rng(2)
	if (rng1 ==2){
		rng3=rng(2)
		if (rng3==0){
			leftEq+="("
			if(rng(2)==1){//could have made arrays like ["","~"] para leftEq+=arr[rng(2)] na lang haha
				leftEq+="~"
			}
			leftEq+=charList[counter++]
			if(rng(2)==0){
				leftEq+="^"
			}
			else{
				leftEq+="∨"
			}
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]+")";
			if(rng(2)==0){
				leftEq+="^"
			}
			else{
				leftEq+="∨"
			}
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]
		}
		else{
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]
			if(rng(2)==0){
				leftEq+="^"
			}
			else{
				leftEq+="∨"
			}
			leftEq+="("
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]
			if(rng(2)==0){
				leftEq+="^"
			}
			else{
				leftEq+="∨"
			}
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]+")";
		}
	}
	else{
		for (let c=0;c<rng1+1;c++){
			if(rng(2)==1){
				leftEq+="~"
			}
			leftEq+=charList[counter++]
			if(c==rng1){
				break;
			}
			if(rng(2)==0){
				leftEq+="^"
			}
			else{
				leftEq+="∨"
			}
		}
	}
	if (rng2 ==2){
		rng3=rng(2)
		if (rng3==0){
			rightEq+="("
			if(rng(2)==1){//could have made arrays like ["","~"] para rightEq+=arr[rng(2)] na lang haha
				rightEq+="~"
			}
			rightEq+=charList[counter++]
			if(rng(2)==0){
				rightEq+="^"
			}
			else{
				rightEq+="∨"
			}
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]+")";
			if(rng(2)==0){
				rightEq+="^"
			}
			else{
				rightEq+="∨"
			}
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]
		}
		else{
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]
			if(rng(2)==0){
				rightEq+="^"
			}
			else{
				rightEq+="∨"
			}
			rightEq+="("
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]
			if(rng(2)==0){
				rightEq+="^"
			}
			else{
				rightEq+="∨"
			}
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]+")";
		}
	}
	else{
		for (let c=0;c<rng2+1;c++){
			if(rng(2)==1){
				rightEq+="~"
			}
			rightEq+=charList[counter++]
			if(c==rng2){
				break;
			}
			if(rng(2)==0){
				rightEq+="^"
			}
			else{
				rightEq+="∨"
			}
		}
	}
	for (let d=0;d<rng1+1;d++){
		leftEqArr.push(tfArr[rng(2)]);
	}
	var operator = opArr[rng(2)];
	for (let d=0;d<rng2+1;d++){
		rightEqArr.push(tfArr[rng(2)]);
	}
	console.log(leftEq)
	console.log(leftEqArr)
	console.log(operator)
	console.log(rightEq)
	console.log(rightEqArr)
	return([leftEq,leftEqArr,operator,rightEq,rightEqArr])
}
function rng(num){
	return Math.floor(Math.random()*num)
}