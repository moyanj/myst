function setCookie(cvalue) {
	var cname = "search"
	document.cookie = cname + "=" + cvalue + "; ";
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
var bodyBgs = [];
bodyBgs[0] = "https://img1.imgtp.com/2022/11/30/qdwHox8E.png";
bodyBgs[1] = "https://img1.imgtp.com/2022/11/30/GBu8rZG3.png";
bodyBgs[2] = "https://img1.imgtp.com/2022/11/30/XyTU39yX.png";
bodyBgs[3] = "https://img1.imgtp.com/2022/11/30/VckYBrmK.png";
bodyBgs[4] = "https://img1.imgtp.com/2022/11/30/0qDmBOwZ.png";
bodyBgs[5] = "https://img1.imgtp.com/2022/11/30/sUTrp2o9.png";
bodyBgs[6] = "https://img1.imgtp.com/2022/11/30/I6lzqMJz.png";
bodyBgs[7] = "https://img1.imgtp.com/2022/11/30/q1f7uhZb.png";
bodyBgs[8] = "https://img1.imgtp.com/2022/11/30/GBu8rZG3.png";
bodyBgs[9] = "https://img1.imgtp.com/2022/11/30/CnHatrLc.png";
bodyBgs[10] = "https://img1.imgtp.com/2022/11/30/8Oe0IHhb.png";
bodyBgs[11] = "https://img1.imgtp.com/2022/11/30/IhhZ91ZF.png";
bodyBgs[12] = "https://img1.imgtp.com/2022/11/30/AKwCPfV9.png";
bodyBgs[13] = "https://img1.imgtp.com/2022/11/30/vH7ZJWOY.png";
bodyBgs[14] = "https://img1.imgtp.com/2022/11/30/IsfaF156.png";
bodyBgs[15] = "https://img1.imgtp.com/2022/11/30/YTPifMEr.png";
// 生成随机数
var randomBgIndex = Math.round(Math.random() * 15);
//输出随机的背景图
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] +
	') no-repeat;background-size:cover;}</style>');
console.log("选择了第" + randomBgIndex + "个");
console.log("url为：" + bodyBgs[randomBgIndex])

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
