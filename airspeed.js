[rewrite_local]
^http[s]?:\/\/api.express-api.com\/v1\/connect.+$ url script-response-body https://raw.githubusercontent.com/huikml/js/main/airspeed.js
[mitm] 
hostname = *.express-api.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.express-api.com\/v1\/connect.+$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huikml/js/main/airspeed.js

[MITM]
hostname = *.express-api.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.type= "gold;
obj.data.username= "jumnyliu;
obj.data.expire= 9648718129884;
    $done({body: JSON.stringify(obj)});
