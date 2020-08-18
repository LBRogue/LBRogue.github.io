/**var productNames = [
	
];
var reseller3kPrice = [
	
];
var reseller15kPrice = [
	
];
var retailPrice = [
	
];
var quantity = [
	
];
var unitTotal  = [
	
];
**/
document.getElementsByTagName("input")[0].addEventListener("keydown", function(event){
	if(event.keyCode === 13){
		add();
	}
});
var priceNumber = 3;
var products = [
	product("EVERYDAY CHICKEN 800 - 899g", 130, 132, 135),
	product("BOUNTY CHICKEN", 140, 142, 145),
	product("YOUNG and TENDER CHICKEN .950-1.29 KG", 167, 167, 167),
	product("PREMIUM NECKLESS", 0, 0, 0),
	product("FAMILY FEAST 1.3-1.8KG", 230, 234, 237),
	product("UNBRANDED CHICKEN", 0, 0, 0),
	product("CHICKEN WINGS 860g", 159, 164, 169),
	product("CHICKEN DRUMSTICK 860g", 159, 164, 169),
	product("CHICKEN THIGH 860g", 159, 164, 169),
	product("CHICKEN THIGH FILLET (skinless) 860g", 285, 285, 285),
	product("CHICKEN BREAST FILLET (skinless) 860g", 285, 285, 285),
	product("CHICKEN LEG QUARTER 860g", 159, 164, 169),
	product("CHICKEN BREAST 860g", 159, 164, 169),
	product("CHOOKSIES MARINADO SWEET 550g", 93, 96, 100),
	product("CHOOKSIES MARINADO PEPPER 550g", 93, 96, 100),
	product("CHOOKSIES MARINADO SPICY 550g", 93, 96, 100),
	product("SPICY NECK 500g", 75, 77, 80),
	product("MARINATED CRISPY CHICKEN", 110, 115, 120),
	product("CHICKEN NUGGETS 200g", 69, 74, 79),
	product("CHICKEN STICKS 200g", 79, 84, 89),
	product("CHICKEN POPCORN 200g", 79, 84, 89),
	product("CHICKEN SKIN 350g", 82, 87, 92),
	product("SAUCY TORIKARAAGE - TERIYAKI 450g", 184, 189, 194),
	product("SAUCY TORIKARAAGE - SWEET & SOUR 450g", 184, 189, 194),
	product("TOP ToriBURGER - Cheese & Chives 450g", 184, 189, 194),
	product("TOP TORIKATSU - Cheese & Chives 450g", 184, 189, 194),
	product("TOP TORIKATSU - Classic Mayo 450g", 184, 189, 194),
	product("Chicbog Foolong Cheesedog", 144, 148, 160),
	product("Bacon 12 in. (Zarks) 1kg", 260, 270, 290),
	product("Bacon 250g", 76, 68, 80),
	product("Lumpiang Shanghai (60 pcs)", 149, 153, 160),
	product("Lumpiang Shanghai (30 pcs)", 80, 85, 90),
	product("Pork Tocino", 60, 62, 65),
	product("Pork Tapa", 64, 67, 70),product("Pork Siomai", 144, 150, 160),
	product("Beef Siomai", 144, 150, 160),
	product("Chicken Siomai", 144, 150, 160),
	product("Burger Patties", 38, 40, 45),
	product("Honey Cured Bacon", 0, 0, 0),
	product("TJ Hotdog Classic 1kg", 165, 168, 175),
	product("Hawaiian Delight", 90, 90, 100),
	product("Ham & Cheese", 80, 80, 90),
	product("Combination", 80, 80, 90)
];
var trList = [];
var total;
var totalCount = 0;
function product(productName, reseller3kPrice, reseller15kPrice, retailPrice){
	var temp = {};
	temp.productName = productName;
	temp.reseller3kPrice = reseller3kPrice;
	temp.reseller15kPrice = reseller15kPrice;
	temp.retailPrice = retailPrice;
	temp.quantity = 0;
	temp.unitTotal = 0;
	return temp;
}
createTable();
function createTable(){
	var table = document.getElementById("id-table");
	for(let i = 0; i < products.length; i++){
		switch(i){
			case 0:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("WHOLE CHICKEN");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			case 6:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("CHICKEN CUTS");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			case 13:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("MARINATED CHICKEN");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			case 18:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("BREADED CHICKEN");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			case 27:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("OTHER PRODUCTS");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			var nodeH2 = document.createElement("TR");
			var tdNodeH2 = document.createElement("TD");
			var textNodeH2 = document.createTextNode("FOODCRAFTERS");
			nodeH2.setAttribute("class", "header2");
			tdNodeH2.appendChild(textNodeH2);
			nodeH2.appendChild(tdNodeH2);
			table.appendChild(nodeH2);
			break;
			case 38:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("PUREFOODS");
			nodeH.setAttribute("class", "header2");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			case 40:
			var nodeH = document.createElement("TR");
			var tdNodeH = document.createElement("TD");
			var textNodeH = document.createTextNode("PIZZA");
			nodeH.setAttribute("class", "header1");
			tdNodeH.appendChild(textNodeH);
			nodeH.appendChild(tdNodeH);
			table.appendChild(nodeH);
			break;
			default:
			break;
		}
		var node = document.createElement("TR");
		var tdNode1 = document.createElement("TD");
		var textNode1 = document.createTextNode(products[i].productName);
		tdNode1.appendChild(textNode1);
		var tdNode2 = document.createElement("TD");
		var textNode2 = document.createTextNode(products[i].reseller3kPrice);
		tdNode2.appendChild(textNode2);
		var tdNode3 = document.createElement("TD");
		var textNode3 = document.createTextNode(products[i].reseller15kPrice);
		tdNode3.appendChild(textNode3);
		var tdNode4 = document.createElement("TD");
		var textNode4 = document.createTextNode(products[i].retailPrice);
		tdNode4.appendChild(textNode4);
		var tdNode5 = document.createElement("TD");
		tdNode5.setAttribute("onclick","addQuantity("+i+")");
		var textNode5 = document.createTextNode(products[i].quantity);
		tdNode5.appendChild(textNode5);
		var tdNode6 = document.createElement("TD");
		var textNode6 = document.createTextNode(products[i].unitTotal);
		tdNode6.appendChild(textNode6);
		node.appendChild(tdNode1);
		node.appendChild(tdNode2);
		node.appendChild(tdNode3);
		node.appendChild(tdNode4);
		node.appendChild(tdNode5);
		node.appendChild(tdNode6);
		table.appendChild(node);
		trList[i] = node;
	}
	var node = document.createElement("TR");
	var tdNode = document.createElement("TD");
	var tdNode1 = document.createElement("TD");
	var textNode1 = document.createTextNode("Total");
	tdNode1.appendChild(textNode1);
	node.appendChild(tdNode1);
	node.appendChild(document.createElement("TD"));
	node.appendChild(document.createElement("TD"));
	node.appendChild(document.createElement("TD"));
	node.appendChild(document.createElement("TD"));
	var textNode = document.createTextNode("0");
	tdNode.appendChild(textNode);
	node.appendChild(tdNode);
	total = tdNode;
	table.appendChild(node);
}
function addQuantity(i){
	trList[i].children[4].innerHTML = parseInt(trList[i].children[4].innerHTML) + 1;
	trList[i].children[5].innerHTML = trList[i].children[4].innerHTML * trList[i].children[priceNumber].innerHTML;
	totalCount += parseInt(trList[i].children[3].innerHTML);
	priceSet();
}
function priceSet(){
	if(totalCount < 1500){
		priceNumber = 3;
	}
	else if(totalCount < 3000){
		priceNumber = 2;
	}
	else{
		priceNumber = 1;
	}
	for(let i = 0; i < trList.length; i++){
		trList[i].children[5].innerHTML = trList[i].children[4].innerHTML * trList[i].children[priceNumber].innerHTML;
	}
	var tempTotal = 0;
	for(let i = 0; i < trList.length; i++){
		tempTotal += parseInt(trList[i].children[5].innerHTML);
	}
	total.innerHTML = tempTotal;
}
var counter = 0;
function add(){
	var i = document.getElementsByTagName("input")[0];
	var p = document.getElementsByTagName("p")[0];
	switch(counter%4){
		case 0:
			p.innerHTML += "product(\"" + i.value + "\", ";
			i.value = "";
		break;
		case 1:
			p.innerHTML += i.value + ", ";
			i.value = "";
		break;
		case 2:
			p.innerHTML += i.value + ", ";
			i.value = "";
		break;
		case 3:
			p.innerHTML += i.value + "), " + "<br />";
			i.value = "";
		break;
	}
	counter++;
}