
  //sequenced one-after-the-other
  gsap.to(".header", {duration: 1.5, y:-100}) ;//notice that there's no semicolon!

//侧边栏// 获取封面图片的高度

const coverImage = document.querySelector('#cover-image');
const footer = document.querySelector('#footer');
const coverImageHeight = coverImage.offsetHeight;

// 创建动画效果
const sidebarAnimation = gsap.from("#sidebar", { duration: 1, opacity: 0, x: -500 });
const columnAnimation = gsap.from(".gaspcol", {
  duration: 1, y: -50, opacity: 0, ease: "power4.out", stagger: 0.3
});
window.addEventListener('DOMContentLoaded', () => {
  // 判断初始位置是否需要显示侧边栏
  if (window.pageYOffset >= coverImageHeight) {
    sidebarAnimation.play();
  } else {
    sidebarAnimation.reverse();
  }
});
// 添加滚动事件监听器
window.addEventListener('scroll', () => {
  // 计算滚动位置
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  // 切换侧边栏显示
  if ((scrollPosition >= coverImageHeight-200) && (scrollPosition + windowHeight < documentHeight-footer.offsetHeight)) {
    // 显示侧边栏
    sidebarAnimation.play()
    // 设置侧边栏可见
  } else {
    // 隐藏侧边栏
    sidebarAnimation.reverse();
    // 设置侧边栏隐藏
  }
  if (scrollPosition >= coverImageHeight-500) {
    // 显示侧边栏
    columnAnimation.play();
    // 设置侧边栏可见
  } else {
    // 隐藏侧边栏
    columnAnimation.reverse(); 
    // 设置侧边栏隐藏
  }
});