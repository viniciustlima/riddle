function responder(levelAnswer, nextLevel) {
	let userAnswer = prompt("Digite sua resposta:", "");
	if (userAnswer == null || userAnswer == "") {
		alert("Esse campo não pode ficar em branco! Digite sua resposta.");
	} else {
		if (slug(userAnswer).includes(levelAnswer)) {
			redirect(nextLevel);
		} else {
			alert("Resposta incorreta! Tente novamente.");
			redirect(location.href.split("/")[location.href.split("/").length-1].split(".")[0]);
		}
	}
}

var usedHints = 0
function dica() {
	let f = location.href.split("/");
	let curLevel = f[f.length-1].split(".")[0];

	switch (curLevel) {
		case "a01": 
			alert("Gênesis 9:11-13.");
			disableButton();
			break;

		case "s02": 
			alert("O que você está resolvendo agora?");
			disableButton();
			break;

		case "7g3": 
			alert("Você me enxerga quando o Sol se vai.");
			disableButton();
			break;

		case "aj4": 
			alert("Eu estou em sua cozinha.");
			disableButton();
			break;

		case "zn5":
			alert("Subtraia o sucessor e antecessor de um número. Use o número 5 como exemplo.");
			disableButton();
			break;

		case "kf6": 
			alert(""); 
			disableButton();
			break;

		case "c87": 
			alert(""); 
			disableButton();
			break;

		case "pi8": 
			alert(""); 
			disableButton();
			break;

		case "gr9": 
			alert(""); 
			disableButton();
			break;

		case "ve0": 
			alert(""); 
			disableButton();
			break;

		case "fsf": 
			alert(""); 
			disableButton();
			break;

	}

}

function disableButton() {
	document.querySelectorAll("button")[1].disabled = true;
}

function redirect (lvl) {
	location.href = `http://${location.href.split("/")[2]}/riddle/stuff/${lvl}.html`;
}

function slug (str) {
	str = str.replace(/^\s+|\s+$/g, '');
	str = str.toLowerCase();

	let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	let to = "aaaaeeeeiiiioooouuuunc------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');

	return str;
}