#!url=https://ybnet.ga/module/kuwo-unlock.sgmodule
#!name= Airspeed
#!desc=解锁Airspeed黄金会员
#!homepage=https://github.com/deezertidal
#!author=nameking77
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/kuwosvip.png

[Url Rewrite]


[Script]

airspeed = type=http-response,pattern=^https://api\.express-api\.com/v1/(device|connect),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huikml/js/main/airspeed.js

[MITM]
hostname = %APPEND% api.express-api.com
