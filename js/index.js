// 获取导航栏元素
const navbar = document.querySelector('.navbar');

// 监听鼠标滚轮事件
window.addEventListener('scroll', () => {
  // 如果页面滚动距离大于100像素，并且导航栏未缩小，则缩小导航栏
  if (window.scrollY > 100 && !navbar.classList.contains('navbar-shrink')) {
    navbar.classList.add('navbar-shrink');
  // 如果页面滚动距离小于100像素，并且导航栏已缩小，则恢复导航栏
  } else if (window.scrollY < 100 && navbar.classList.contains('navbar-shrink')) {
    // 为导航栏添加一个渐变过渡效果
    navbar.style.transition = 'all 0.5s ease-in-out';
    // 移除 navbar-shrink 类
    navbar.classList.remove('navbar-shrink');
    // 在过渡效果完成后重置导航栏的 transition 属性
    setTimeout(() => {
      navbar.style.transition = '';
    }, 500);
  }
});
