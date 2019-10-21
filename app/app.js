document.addEventListener("DOMContentLoaded", init);
function init() {
	
	let output = document.querySelector("div.output");
	let costInput = document.querySelector("input");

	let veryLowTip = document.getElementById("veryLowTip");
	veryLowTip.addEventListener("click", function() {
		let vltInput = costInput.value;
		if (vltInput === '') {
			output.innerText = 'Try to enter your sum first';
		}
		else {
			let vltTipValue = Math.round( (vltInput * 0.1) );
			vltInput < 20
			? output.innerText = "Even if your bill is below 20 PLN, the tip lower then 2 PLN seems controversial"
			: output.innerText = `For ${vltInput} PLN bill, suggested value of the tip is ${vltTipValue} PLN`;
			
			costInput.value = "";
		}
	});

	let moderateTip = document.getElementById("moderateTip");
	moderateTip.addEventListener("click", function() {
		let mtInput = costInput.value;
		if (mtInput === '') {
			output.innerText = 'Try to enter your sum first';
		}
		else {
			let mtTipValue = Math.round( (mtInput * 0.15) );
			mtInput < 14
			? output.innerText = "Even if your bill is below 14 PLN, the tip lower then 2 PLN seems controversial"
			: output.innerText = `For ${mtInput} PLN bill, suggested value of the tip is ${mtTipValue} PLN`;
			
			costInput.value = "";
		}
	});

	let highTip = document.getElementById("highTip");
	highTip.addEventListener("click", function() {
		let hInput = costInput.value;
		if (hInput === '') {
			output.innerText = 'Try to enter your sum first';
		}
		else {
			let hTipValue = Math.round( (hInput * 0.2) );
			hInput < 10
			? output.innerText = "Even if your bill is below 10 PLN, the tip lower then 2 PLN seems controversial"
			: output.innerText = `For ${hInput} PLN bill, suggested value of the tip is ${hTipValue} PLN`;
			
			costInput.value = "";
		}
	});

}
