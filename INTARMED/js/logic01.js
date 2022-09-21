function simplify(equation, arr1){
	var arrVar = [true,true]
	var varcounter = 0;
	var ifNotNot = true;//checks if the var has a not beforehand
	var counter = 0;
	var andIsTrue = true;
	for (let a=0; a<equation.length; a++){
		if(equation.charAt(a)=="b"){//b is a placeholder for not notation
			ifNotNot = false;
			console.log("not")
		}
		else if((equation.charAt(a) == "p")||(equation.charAt(a) == "q")||(equation.charAt(a) == "r")||(equation.charAt(a) == "s")){
			arrVar[varcounter] = (arr1[varcounter] && ifNotNot)
			varcounter +=1;
			ifNotNot = true;
		}
		else if(equation.charAt(a)=="v"){
			andIsTrue = false;
			console.log("or")
		}
		counter++;
		if (varcounter == 2){
			var newEquation = "p".concat(equation.slice(counter, equation.length))
			var newValue = true;
			if (andIsTrue){
				newValue = (arrVar[0] && arrVar[1])
			}
			else{
				newValue = (arrVar[0] || arrVar[1])
				
			}
			console.log(newValue)
			arr1.splice(0,1)
			arr1[0]=newValue
			return [newEquation, arr1 ];
		}
	}
}