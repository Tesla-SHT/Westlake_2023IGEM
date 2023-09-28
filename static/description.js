(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
content: '#content',
wrapper: '#wrapper',
smooth: true,
effects: false,
normalizeScroll: true
})

const tl = gsap.timeline({
scrollTrigger: {
    trigger: '.accordions',
    pin: true,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    ease: 'linear',
  }
})

tl.to('.accordion .text', {
height: 0,
paddingBottom: 0,
opacity: 0,
stagger: .5,
})
tl.to('.accordion', {
marginBottom: -15,
stagger: .5,
}, '<')
