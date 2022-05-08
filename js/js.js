function redirect (lvl) {
	location.href = `http://${location.href.split("/")[2]}/riddle/stuff/${lvl}.html`;
}

function slug(text) {
	return text
		.toLowerCase()
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-");
}