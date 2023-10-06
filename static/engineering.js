var targetElements = document.querySelectorAll('.has-animation');
window.addEventListener('scroll', () => {
    targetElements.forEach((element) => {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        
        // 判断div是否在屏幕可见区域内
        if (rect.top < windowHeight && rect.bottom >= 0) {
            // 当目标div出现时执行代码
            if (!element.classList.contains('animate-in')) {
                element.classList.add('animate-in');
            }
        } else {
            element.classList.remove('animate-in');
        }
    });
});