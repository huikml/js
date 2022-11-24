[rewrite_local]
^https?:\/\/api\.express-api\.com\/v1\/connect.+$ url script-response-body https://raw.githubusercontent.com/huikml/js/main/airspeed.js
[mitm] 
hostname = *.express-api.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.express-api.com\/v1\/connect.+$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huikml/js/main/airspeed.js

[MITM]
hostname = api.express-api.com

*******************************/
var body=$response.body;
body = body.replace(/"type\":"\w+/g,'"type":"gold');
body = body.replace(/"username\":"\w+/g,'"username":"jumnyliu');
body = body.replace(/"expire\":\d+/g,'"expire":9648718129884');
$done(body);
