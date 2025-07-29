var lt = gsap.timeline();

gsap.from(".text-ani", {
  x: -100,
  opacity: 0,
  rotate:15,
  duration: 1,
  delay: 0.5
});

gsap.from(".lg", {
  y: -20,
  opacity: 0,
  duration: 1
    // delay: 1,
});
gsap.from(".btn-ani", {
  x: 100,
  opacity: 0,
  duration: 1
    // delay: 1,
});

gsap.from(".star-ani", {
  y: -50,
  opacity: 0,
  duration: 1,
    delay: 1,
    stagger:0.1
});


// gsap.from(".btn-ani", {
//   y: -70,
//   opacity: 0,
//   duration: 1,
//   //   delay: 5,
// });
