// function valu(){
// 	var x = document.getElementById("celc").value;
// }

function Sum(){
	// return val1 + 4;
	var field1 = document.getElementById("celc").value;
	var oper = document.getElementById("toConvert").value;

	if(oper === 'CtoK'){
		var field2=273.15;
		var result=parseFloat(field1)+field2;
		document.getElementById("result").value=result+" \u00B0K";
	}

	if(oper === 'KtoC'){
		var field2=273.15;
		var result=parseFloat(field1)-field2;
		document.getElementById("result").value=result+" \u00B0C";
	}

	if(oper === 'CtoF'){
		var field2 = 9/5;
		var field3 = 32;
		var result1 = parseFloat(field1)*field2;
		var fresult = parseFloat(result1)+field3;
		document.getElementById("result").value=fresult+" \u00B0F";
	}
 
	if(oper === 'FtoC'){
		var field2 = 32;
		var field3 = 5/9;
		var result1 = parseFloat(field1)-field2;
		var fresult = parseFloat(result1)*field3;
		document.getElementById("result").value=fresult+" \u00B0C";
	}

};
// document.getElementById("demo").innerHTML = Sum(x);
// document.getElementById("demo").innerHTML = Sum(4,3);