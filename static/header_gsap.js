
//sequenced one-after-the-other
var windowHeight = window.innerHeight;
var changeAmount = -100 * (windowHeight / 1080); // 根据1080作为参考高度进行调整

gsap.to(".header", { duration: 1.5, y: changeAmount });

//侧边栏// 获取封面图片的高度



// 创建动画效果
const sidebar = document.querySelectorAll('.sidebar');
sidebar.forEach((div) => {
const sidebarAnimation = gsap.from(div, { duration: 1, opacity: 0, x: -500 });
const coverImage = document.querySelector('#cover-image');
const overView = document.querySelector('.overview');
const footer = document.querySelector('#footer');
const coverImageHeight = coverImage.offsetHeight;
if (overView === null) {
  var overviewHeight = 0;
}
else {var overviewHeight = overView.clientHeight*2+coverImageHeight;}
window.addEventListener('DOMContentLoaded', () => {
  // 判断初始位置是否需要显示侧边栏
  if (window.pageYOffset >= Math.max(coverImageHeight, overviewHeight)) {
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
  if ((scrollPosition >= Math.max(coverImageHeight,overviewHeight) - 200) && (scrollPosition + windowHeight < documentHeight - footer.offsetHeight)) {
    sidebarAnimation.play()
  } else {
    sidebarAnimation.reverse();
  }
});
});
// 获取具有相同类名的所有div元素
const gsapDivs = document.querySelectorAll(".gaspcol");
const hrDivs = document.querySelectorAll(".hr-ani");
// 创建Intersection Observer实例
window.addEventListener("scroll", () => {
  hrDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 判断div是否在屏幕可见区域内
    if (rect.top < windowHeight && rect.bottom >= 0) {
      div.innerHTML = `
        <style>
          .hr-ani {
            width: 0;
            border-top:1px solid black;
            background-color: white;
            animation: expand 1s linear forwards;
          }
  
          @keyframes expand {
            0% {
              width: 0;
            }
            50% {
              width: 50%;
            }
            100% {
              width: 100%;
            }
          }
        </style>
      `;

    } else {
      div.innerHTML = ``;
    }
  });
  gsapDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 判断div是否在屏幕可见区域内
    if (rect.top < windowHeight && rect.bottom >= 0) {
      // 使用GSAP动画显示div
      gsap.to(div, { dration: 1, y: 100, opacity: 1 });
    } else {
      // 使用GSAP动画隐藏div
      gsap.to(div, { duration: 0.5, y: -50, opacity: 0, });
    }
  });
});
