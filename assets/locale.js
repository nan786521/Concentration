document.write('<script src="./assets/jquery-3.6.1.js"></script>');
document.write('<script src="./assets/LocaleSwitch.js"></script>');
document.write('<script src="./assets/script.js"></script>');
function English_Locale() {
	document.title = "Memory Card Game";
	for (let i = 0; i < 8; i++) {
		$('#LocaleReq' + String(i)).jqmultilang('en');
	}
	if (mathedCard === cardNum) {
		end.innerHTML = "Finish";
	}
}
function Chinese_Locale() {
	document.title = "記憶力翻牌小遊戲";
	for (let i = 0; i < 8; i++) {
		$('#LocaleReq' + String(i)).jqmultilang('zh-tw');
	}
	if (mathedCard === cardNum) {
		end.innerHTML = "已過關";
	}
}
function Japanese_Locale() {
	document.title = "メモリカードゲーム";
	for (let i = 0; i < 8; i++) {
		$('#LocaleReq' + String(i)).jqmultilang('ja');
	}
	if (mathedCard === cardNum) {
		end.innerHTML = "ゲームクリア";
	}
}