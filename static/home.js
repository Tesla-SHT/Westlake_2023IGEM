var h2back = document.getElementById("h2middle");
var sectionheight = h2back.parentElement;
h2back.style.paddingTop = (sectionheight.clientHeight - h2back.clientHeight) / 2 + "px";

const footer = document.querySelector('#footer');
const sidebarAnimation = gsap.from("#sidebar", { duration: 1, opacity: 0, x: -500 });
window.addEventListener('DOMContentLoaded', () => {
  // 判断初始位置是否需要显示侧边栏
  if (window.pageYOffset <= 50) {
    sidebarAnimation.play();
  } else {
    sidebarAnimation.reverse();
  }
});
window.addEventListener('scroll', () => {
  // 计算滚动位置
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  // 切换侧边栏显示
  if (scrollPosition + windowHeight < documentHeight - footer.offsetHeight) {
    sidebarAnimation.play()
  } else {
    sidebarAnimation.reverse();
  }
});
window.onload = function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sidebar-toggle");

  // 监听鼠标移动事件
  document.addEventListener("mousemove", (event) => {
    // 检查鼠标是否在屏幕的左侧区域
    if (event.clientX < 150 && window.pageYOffset >= 50) {
      // 使用GSAP动画显示侧边栏
      gsap.to(sidebar, { left: 0 });
      gsap.to(toggleButton, { left: -300 })
    } else {
      // 使用GSAP动画隐藏侧边栏
      gsap.to(sidebar, { left: -200 });
      gsap.to(toggleButton, { left: 100 });
    }
  });

  // 监听最小化按钮或图标的鼠标移入事件
  toggleButton.addEventListener("mouseenter", () => {
    // 使用GSAP动画展开侧边栏
    gsap.to(sidebar, { left: -200 });
  });

  // 监听最小化按钮或图标的鼠标移出事件
  toggleButton.addEventListener("mouseleave", () => {
    // 使用GSAP动画将侧边栏滑动回最小化位置
    gsap.to(sidebar, { left: 0 });
  });
}

//背景样式

$(document).ready(function () {
  var $main_cta = $('.main-cta');

  $(window).scroll(function () {
    var s = $(this).scrollTop(),
      d = $(document).height(),
      c = $(this).height();

    scrollPercent = (s / (d - c));

    var position = (scrollPercent * ($(document).width() - $main_cta.width()));

    $main_cta.css({
      'left': position
    });
  });
});

$(document).ready(function () {
  var $middle_image = $('.middle-image');

  $(window).scroll(function () {
    var s = $(this).scrollTop() - 280,
      d = $(document).height(),
      c = $(this).height();

    scrollPercent = (s / (d - c));

    var position = (scrollPercent * ($(document).width() - $middle_image.width()));

    $middle_image.css({
      'right': position
    });
  });
});

$(document).ready(function () {
  var $bottom_image = $('.bottom-image');

  $(window).scroll(function () {
    var s = $(this).scrollTop() - 320,
      d = $(document).height(),
      c = $(this).height();

    scrollPercent = (s / (d - c));

    var position = (scrollPercent * ($(document).width() - $bottom_image.width()));

    $bottom_image.css({
      'left': position
    });
  });
});
//背景样式

//button
$(".button_su_inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$(".button_su_inner").mouseleave(function (e) {

  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");

});
//button

// 创建动画
/*
const fadeInText = gsap.from(".fade-in-text", {
  opacity: 0,
  x: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".fade-in-text", // 触发元素
    start: "center center", // 动画触发时机（元素进入屏幕中心时触发）
    end: "center center", // 动laji画结束时机（元素仍然在屏幕中心时）
    scrub: true, // 可以根据滚动位置控制动画进度
  },
});*/


// 设置ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const textDivs = document.querySelectorAll(".fade-in-text");
const textDivsafter = document.querySelectorAll(".fade-in-text::after");
// 创建Intersection Observer实例
window.addEventListener("scroll", () => {
  textDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 判断div是否在屏幕可见区域内
    if (rect.top < windowHeight && rect.bottom >= 0) {
      // 使用GSAP动画显示div
      gsap.to(div, { dration: 2, x: 0, opacity: 1 });
    } else {
      // 使用GSAP动画隐藏div
      gsap.to(div, { duration: 0.5, x: -500, opacity: 0, });
    }
  });
});
var flag = 0;
const elementsToAnimate = document.querySelectorAll(".background-section"); // 遍历所有匹配的元素并应用动画
window.addEventListener("scroll", () => {
  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 判断div是否在屏幕可见区域内
    if (rect.top < windowHeight && rect.bottom >= 0) {
      // 使用GSAP动画显示div
      if (!flag) {
        gsap.set(element, { x: "100%" });
        gsap.to(element, { x: "0%", duration: 1, ease: "power2.out" });
        flag = 1;
      }
    } else {
      // 使用GSAP动画隐藏div
      if (!flag) {
        gsap.set(element, { x: "100%" });
        gsap.to(element, { x: "100%", duration: 1, });
      }
    }
  });
});



// 创建动画

const fadeInText = gsap.from(".fade-in-text", {
  opacity: 0,
  x: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".fade-in-text",
    start: "center center",
    end: "center center",
    scrub: true,
    onEnter: () => {
      // 当进入视口时，将横线的宽度设置为文本宽度，从左到右浮现
      gsap.to(".fade-in-text::after", { width: "100%", ease: "power2.out" });
    },
    onLeaveBack: () => {
      // 当离开视口时，将横线的宽度重置为0
      gsap.to(".fade-in-text::after", { width: 0 });
    },
  },
});


const scrollTracker = document.getElementById("scroller");

window.addEventListener("scroll", updateScrollTracker);

function updateScrollTracker() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const trackerHeight = windowHeight * 0.53; // 53% of the window height
  const minTop = (windowHeight - trackerHeight) / 2;

  if (scrollTop <= minTop) {
    scrollTracker.style.height = "0";
  } else {
    const newHeight = Math.min(scrollTop - minTop, trackerHeight);
    scrollTracker.style.height = newHeight + "px";
  }
}

$(window).scroll(function () {
  $('.container p').each(function () {
    var scrollTop = $(window).scrollTop(),
      elementOffset = $(this).offset().top,
      distance = (elementOffset - scrollTop),
      windowHeight = $(window).height(),
      breakPoint = windowHeight * 0.9;

    if (distance > breakPoint) {
      $(this).addClass("more-padding");
    } if (distance < breakPoint) {
      $(this).removeClass("more-padding");
    }
  });
});


// from HP
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});