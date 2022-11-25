/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
Airspeed
脚本名称:Airspeed
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.express-api.com\/v1\/device.+$ url script-response-body https://raw.githubusercontent.com/huikml/js/main/airspeed.js
[mitm] 
hostname = *.express-api.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.express-api.com\/v1\/device.+$ requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/huikml/js/main/airspeed.js

[MITM]
hostname = *.express-api.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.type= "gold;
obj.data.username= "jumnyliu;
obj.data.expire= 9648718129884;
    $done({body: JSON.stringify(obj)});
