function CK(x){
	return (273.15)+(x);
}

function KC(x){
	return parseFloat((x)-(273.15)).toFixed(2);
}

function CF(x){
	return ((x*9)/5) + (32);
}

function FC(x){
	return parseFloat((x-32) * 5/9).toFixed(4);
}

function fnl(){
var field1 = document.getElementById("celc").value;
var field2 = parseFloat(field1);
var oper = document.getElementById("toConvert").value;

	if(oper === 'CtoK'){
		var res = document.getElementById("result").value=CK(field2)+" \u00B0K";
		result.innerHTML = res;
	}

	if(oper === 'KtoC'){
		var res = document.getElementById("result").value=KC(field2)+" \u00B0C";
		result.innerHTML = res;
	}

	if(oper === 'CtoF'){
		var res = document.getElementById("result").value=CF(field2)+" \u00B0F";
		result.innerHTML = res;
	}

	if(oper === 'FtoC'){
		var res = document.getElementById("result").value=FC(field2)+" \u00B0C";
		result.innerHTML = res;
	}

}