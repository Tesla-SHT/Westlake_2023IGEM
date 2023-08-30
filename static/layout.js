// 获取导航栏元素
const navbar = document.querySelector('.navbar');
const dropdownMenus = document.querySelectorAll('.dropdown-item');
// 监听鼠标滚轮事件
window.addEventListener('scroll', () => {
  // 如果页面滚动距离大于100像素，并且导航栏未缩小，则缩小导航栏
  if (window.scrollY > 100 && !navbar.classList.contains('navbar-shrink')) {
    navbar.classList.add('navbar-shrink');    
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = 'rgba(113, 113, 113, 0.5)';
    });
  // 如果页面滚动距离小于100像素，并且导航栏已缩小，则恢复导航栏
  } else if (window.scrollY < 100 && navbar.classList.contains('navbar-shrink')) {
    // 为导航栏添加一个渐变过渡效果
    navbar.style.transition = 'all 0.5s ease-in-out';
    // 移除 navbar-shrink 类
    navbar.classList.remove('navbar-shrink');
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = 'transparent';
      menu.style.transition = 'all 0.5s ease-in-out';
    });
    // 在过渡效果完成后重置导航栏的 transition 属性
    setTimeout(() => {
      navbar.style.transition = '';
      dropdown.style.transition = '';
    }, 500);
  }
});

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
function topFunction() {// 点击按钮，返回顶部，并且有上滑减速动画
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