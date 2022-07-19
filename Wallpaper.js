
// 定义壁纸路径
var bodyBgs = [];
bodyBgs[0] = "Wallpaper/0.png";
bodyBgs[1] = "Wallpaper/1.png";
bodyBgs[2] = "Wallpaper/2.png";
bodyBgs[3] = "Wallpaper/3.png";
bodyBgs[4] = "Wallpaper/4.png";
bodyBgs[5] = "Wallpaper/5.png";
bodyBgs[6] = "Wallpaper/6.png";
bodyBgs[7] = "Wallpaper/7.png";
bodyBgs[8] = "Wallpaper/8.png";
bodyBgs[9] = "Wallpaper/9.png";
bodyBgs[10] = "Wallpaper/10.png";
bodyBgs[11] = "Wallpaper/11.png";
bodyBgs[12] = "Wallpaper/12.png";
bodyBgs[13] = "Wallpaper/12.png";
bodyBgs[14] = "Wallpaper/13.png";
bodyBgs[15] = "Wallpaper/14.png";
bodyBgs[16] = "Wallpaper/15.png";
// 生成随机数
var randomBgIndex = Math.round(Math.random() * 16);
//输出随机的背景图
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ');}</style>');
// console.log(randomBgIndex);
// console.log(bodyBgs[randomBgIndex])