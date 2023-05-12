/******************************

脚本功能：Air speed vpn 黄金VIP
软件版本：3.8.6
脚本作者：jumny liu
更新时间：2023-5-6
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https://api\.express-api\.com/v1/(device|connect) url script-response-body https://raw.githubusercontent.com/huikml/js/main/airspeed.js

[mitm] 
hostname = api.express-api.com

*******************************/

let body = $response.body;
let obj = JSON.parse(body);

if (obj.type) {
  obj.type = 'gold';
}

if (obj.username) {
  obj.username = 'jumnyliu';
}

if (obj.expire) {
  obj.expire = 9648718129884;
}

body = JSON.stringify(obj);
$done({ body });
