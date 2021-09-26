var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "images/qiqi.ico");
        document.title = '(つェ⊂) 页面崩溃啦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "images/yenai.ico");
        document.title = 'o(^▽^)o 噫又好了~ ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});