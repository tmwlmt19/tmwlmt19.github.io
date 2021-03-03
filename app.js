const slider = document.querySelector('.slider')

const tl = new TimelineMax();
tl.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%"});
