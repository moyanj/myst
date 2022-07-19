
function getCurDate() {
    var d = new Date();
    var years = d.getFullYear();
    var month = add_zero(d.getMonth() + 1);
    var days = add_zero(d.getDate());
    var hours = add_zero(d.getHours());
    var minutes = add_zero(d.getMinutes());
    var seconds = add_zero(d.getSeconds());
    var ndate = hours + ":" + minutes + ":" + seconds;
    var divT = document.getElementById("h2");
    divT.innerHTML = ndate;
}
function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
setInterval("getCurDate()", 100);
