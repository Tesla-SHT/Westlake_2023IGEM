
var targetDivs = document.querySelectorAll(".hpquestion");
var answerDivs = document.querySelectorAll(".hpanswer");
targetDivs.forEach(function (targetDiv) {
  var parentDiv = targetDiv.parentElement; // 获取目标 div 的父级
  var previousDiv = parentDiv.previousElementSibling; // 获取父级的前一个兄弟 div
  var previousDivHeight = previousDiv.clientHeight;
  // 设置目标 div 的高度为前一个兄弟 div 的三分之一
  console.log(previousDiv);
  targetDiv.style.maxHeight = (previousDivHeight / 3) + "px";

});
answerDivs.forEach(function (answerDiv) {
  var parentDiv = answerDiv.parentElement; // 获取目标 div 的父级
  var previousDiv = parentDiv.previousElementSibling; // 获取父级的前一个兄弟 div
  var previousDivHeight = previousDiv.clientHeight;
  // 设置目标 div 的高度为前一个兄弟 div 的三分之一
  console.log(previousDiv);
  answerDiv.style.maxHeight = (previousDivHeight * 2 / 3 - answerDiv.previousElementSibling.previousElementSibling.clientHeight) + "px";

});

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
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const nav1 = document.querySelector('.a1');
const nav2 = document.querySelector('.a2');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

div1.addEventListener('click', (event) => {
  event.preventDefault();
  document.startViewTransition(() => {
    page2.style.display = 'none';
    page1.style.display = 'block';
    nav2.classList.remove('href-active');
    div1.classList.add('div-active');
    nav1.classList.add('href-active');
    div2.classList.remove('div-active');
    
  });
})

div2.addEventListener('click', (event) => {
  event.preventDefault();
  document.startViewTransition(() => {
    page1.style.display = 'none';
    page2.style.display = 'block';
    nav1.classList.remove('href-active');
    div1.classList.remove('div-active');
    nav2.classList.add('href-active');
    div2.classList.add('div-active');
  });
})    