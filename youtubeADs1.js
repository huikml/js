#!url=https://ybnet.ga/module/YouTubeAd.sgmodule
#!name = YouTube去广告
#!desc =支持pip，后台播放
#!author = Maasea 
#!homepage = https://github.com/deezertidal
#!icon = https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png

[URL Rewrite]
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad _ REJECT-IMG

[Script]
youtube = type=http-response,script-path= https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.js,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting)\?,max-size=131072,requires-body=true,binary-mode=true,timeout=10,script-update-interval=0,enable=true


[MITM]
hostname = %APPEND% *.googlevideo.com, youtubei.googleapis.com
