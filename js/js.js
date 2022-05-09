function responder(levelAnswer, nextLevel) {
	let userAnswer = prompt("Digite sua resposta:", "");
	if (userAnswer == null || userAnswer == "") {
		alert("Esse campo não pode ficar em branco! Digite sua resposta.");
	} else if (slug(userAnswer).includes(levelAnswer)) {
		redirect(nextLevel);
	}
}

var usedHints = 0
function dica() {
	let f = location.href.split("/");
	let curLevel = f[f.length-1].split(".")[0];

	switch (curLevel) {
		case "a01": alert("Gênesis 9:11-13."); break;
		case "s02": alert("O que você está resolvendo agora?"); break;
		case "7g3": alert("Você pode me enxergar de dia, mas fica mais fácil quando o sol se vai."); break;
		case "aj4": alert(""); break;
		case "zn5": alert(""); break;
		case "kf6": alert(""); break;
		case "c87": alert(""); break;
		case "pi8": alert(""); break;
		case "gr9": alert(""); break;
		case "ve0": alert(""); break;
		case "fsf": alert(""); break;
	}

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