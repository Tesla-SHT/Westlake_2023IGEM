gsap.from(".gaspcol", {
    scrollTrigger: ".col", delay: 0.3,
    duration: 1, y: -50, opacity: 0, ease: "power4.out", stagger: 0.3
  });
  //sequenced one-after-the-other
  gsap.to(".header", {duration: 1.5, y:-100}) ;//notice that there's no semicolon!