function add() {
	
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	var output = parseFloat(a) + parseFloat(b);
	if (!Number.isInteger(output)) {
		output = "undefined";
	} else {
		output = parseFloat(a) + parseFloat(b);
	};
	document.getElementById("Output").innerHTML = output;
};

function subtract() {
	
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	var output = parseFloat(a) - parseFloat(b);
	if (!Number.isInteger(output)) {
		output = "undefined";
	} else {
		output = parseFloat(a) - parseFloat(b);
	};
	document.getElementById("Output").innerHTML = output;
};

function multiply() {
	
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	var output = parseFloat(a) * parseFloat(b);
	if (!Number.isInteger(output)) {
		output = "undefined";
	} else {
		output = parseFloat(a) * parseFloat(b);
	};
	document.getElementById("Output").innerHTML = output;
};

function divide() {
	
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	var output = parseFloat(a) / parseFloat(b);
	if (!Number.isInteger(output)) {
		output = "undefined";
	} else {
		output = parseFloat(a) / parseFloat(b);
	};
	document.getElementById("Output").innerHTML = output;
};