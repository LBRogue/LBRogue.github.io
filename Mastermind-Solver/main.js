//Assumes no duplicates
var colors = [0,1,2,3,4,5,6,7]
var colorCombi = []
function createCombis(){
	for (let a = 0; a<colors.length; a++){
		for (let b = 0; b<colors.length; b++){
			for (let c = 0; c < colors.length; c++){
				for (let d = 0; d < colors.length; d++){
					var temp = []
					temp.push(colors[a])
					temp.push(colors[b])
					temp.push(colors[c])
					temp.push(colors[d])
					colorCombi.push(temp)
				}
			}
		}
	}
}
function result(correct, attempt){//has input and output
	var red = 0;
	var white = 0;
	var stored = [];
	for (let a = 0; a < 4; a++){
		if (correct[a]==attempt[a]){
			red++
			stored.push(correct[a])//stores and then rechecks later for white to ignore
		}
	}
	for (let a = 0; a < 4; a++){//correct index
		for (let b=0;b<4;b++){//attempt index
			if ((stored.indexOf(attempt[b]) == -1)&&(a!=b)){
				if (correct[a] == attempt[b]){
					white++
					stored.push(attempt[b]);
				}
			}
		}
	}
	return [red, white];
}
function eliminate(combiArray,attempt, array){
	var combiArray2 = [...combiArray]
	for (let a = 0;a<combiArray2.length;a++){
		var res = result(combiArray2[a],attempt);
		/*if ((res[0]==array[0])&&(res[1]==array[1])){
			console.log("hit")
		}*/ //checks for hits
		if ((res[0]!=array[0])||(res[1]!=array[1])){
			combiArray2.splice(a,1)
			a--;
		}
	}
	return combiArray2;
}

/*function findIdeal(combiArray){
	var idx = -1;
	var min = 1296**4;
	for (let x = 0; x < ogCombi.length; x++){
		var sum = 0;
		for (let y = 0; y < combiArray.length; y++){
			var tempRes = result(combiArray[y],ogCombi[x]);
			var tempArr = eliminate(combiArray, ogCombi[x], tempRes)
			sum += tempArr.length
		}
		if (sum < min){
			idx = x;
			min = sum;
		}
		console.log(x);
	}
	return idx
}*///full search on ogCombi

function findIdeal(combiArray){
	var idx = -1;
	var min = 1296**4;
	for (let x = 0; x < combiArray.length; x++){
		var sum = 0;
		for (let y = 0; y < combiArray.length; y++){
			var tempRes = result(combiArray[y],combiArray[x]);
			var tempArr = eliminate(combiArray, combiArray[x], tempRes)
			sum += tempArr.length
		}
		if (sum < min){
			idx = x;
			min = sum;
		}
		console.log(x);
	}
	return idx
}

function solver(attempt,array){
	solvedArray = eliminate(solvedArray,attempt,array)
	console.log(solvedArray.length)
	ogCombi = [...solvedArray];
	return ogCombi[findIdeal(solvedArray)]
}
createCombis();
var ogCombi = [...colorCombi];
var solvedArray = [...colorCombi];