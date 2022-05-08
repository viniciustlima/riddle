function redirect (lvl) {
	location.href = `http://${location.href.split("/")[2]}/riddle/stuff/${lvl}.html`;
}