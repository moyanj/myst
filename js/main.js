function backgroundurl(url) {
	bgurl(url)
}

function bgurl(background) {
	console.log(background)
	document.write('<style>body{background:url(' + background + ') no-repeat;background-size:cover;}</style>');
}

function setCookie(cname = "search", cvalue, exdays = 730) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
// 检测是否为IE浏览器
function isIe() {
	var i = navigator.userAgent.toLowerCase().indexOf("msie");
	return i >= 0;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "https://cn.bing.com/search?q=";
}
var backgroundurl = "https://www.dmoe.cc/random.php"
document.write('<style>body{background:url(' + backgroundurl + ') no-repeat;background-size:cover;}</style>');


function getCurDate() {
	var d = new Date();
	// 年
	var years = d.getFullYear();
	// 月
	var month = add_zero(d.getMonth() + 1);
	// 日
	var days = add_zero(d.getDate());
	// 时
	var hours = add_zero(d.getHours());
	// 分
	var minutes = add_zero(d.getMinutes());
	// 秒
	var seconds = add_zero(d.getSeconds());
	// 拼接时分秒
	var ndate = hours + ":" + minutes + ":" + seconds;
	// 写入
	var divT = document.getElementById("h2");
	divT.innerHTML = ndate;
}
// 自动刷新
function add_zero(temp) {
	if (temp < 10) return "0" + temp;
	else return temp;
}
setInterval("getCurDate()", 100);
