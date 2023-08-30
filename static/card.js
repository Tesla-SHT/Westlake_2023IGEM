
//淡入淡出，卡片收缩
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const header = card.querySelector(".ani-card-header");
    const body = card.querySelector(".ani-card-body");

    header.addEventListener("click", function (event) {
      event.stopPropagation();

      // 使用 GSAP 添加 card-body 的淡入淡出效果
      if (body.classList.contains("active")) {
        gsap.to(body, { opacity: 0, duration: 0.3, onComplete: hideCard });
      } else {
        gsap.set(body, { display: "block", opacity: 0 });
        gsap.to(body, { opacity: 1, duration: 0.3 });
      }

      // 切换 card-body 的 active 类
      body.classList.toggle("active");
    });

    function hideCard() {
      // 隐藏 card-body
      body.style.display = "none";
      body.classList.remove("active");
    }

    header.addEventListener("mouseover", function () {
      header.classList.add("active");
    });

    header.addEventListener("mouseout", function () {
      if (!body.classList.contains("active")) {
        header.classList.remove("active");
      }
    });
  });
});


//侧边栏 active
    document.addEventListener("DOMContentLoaded", function () {
      const sidebarItems = document.querySelectorAll(".sidebar li a");
      const contentItems = document.querySelectorAll(".month");
  
      sidebarItems.forEach((item, index) => {
        item.addEventListener("click", function () {
          // 移除之前的"active"类
          sidebarItems.forEach((el) => el.classList.remove("active"));
          contentItems.forEach((el) => el.classList.remove("active"));
  
          // 添加"active"类到被点击的项目和相应的内容
          this.classList.add("active");
          contentItems[index].classList.add("active");
        });
      });
    });