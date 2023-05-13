#!url=https://raw.githubusercontent.com/huikml/js/main/airspeed1.js
#!name= Airspeed
#!desc=解锁Airspeed黄金会员
#!homepage=https://github.com/huikml/js
#!author=huikml

[Url Rewrite]


[Script]

Wps = type=http-response,pattern=^https:\/\/(vas|account)\.wps\.cn\/(query\/api\/v\d\/list_purchase_info|api\/users\/\d+\/overview),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huikml/js/main/Wps.js

[MITM]
hostname = %APPEND% vas.wps.cn, account.wps.cn
