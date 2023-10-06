// 获取导航栏元素

//回到顶部
window.onscroll = function () { scrollFunction() };
function scrollFunction() {// 当网页向下滑动 20px 出现"返回顶部" 按钮
    console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backtop").style.display = "block";
    } else {
        document.getElementById("backtop").style.display = "none";
    }
}
// 点击按钮，平滑滚动到顶部
function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollStep = Math.PI / (500 / 15);
    var cosParameter = currentPosition / 2;

    var scrollCount = 0;
    var scrollInterval = setInterval(function() {
        if (document.documentElement.scrollTop || document.body.scrollTop) {
            var scrollOffset = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            document.documentElement.scrollTop = document.body.scrollTop = currentPosition - scrollOffset;
            scrollCount++;
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
function topFunction() {// 点击按钮，返回顶部，并且有上滑减速动画
    console.log("backtotop");
    var timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 1000;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}