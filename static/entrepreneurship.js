var tl = gsap.timeline();
tl.from(".box", {
    duration: 1,
    rotation: 90,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.3
});
