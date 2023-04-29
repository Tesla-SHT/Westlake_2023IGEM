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

/*loading*/

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
  console.log(totalImages);
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");



	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();