gsap.registerPlugin(ScrollTrigger);

// front-page - about section //
const aboutImg = document.querySelector(".p-about__img");
const aboutTitle = document.querySelector(".p-about__title");
const aboutBtn = document.querySelector(".p-about__bottom a");
const aboutSubTitle = document.querySelector(".p-about__sub-title");
const aboutDescription = document.querySelector(".p-about__description");

gsap.set(aboutImg, { opacity: 0, y: 50 });
gsap.set(aboutTitle, { opacity: 0, x: -30 });
gsap.set(aboutBtn, { opacity: 0, x: 50 });
gsap.set(aboutSubTitle, { opacity: 0 });
gsap.set(aboutDescription, { opacity: 0, y: 30 });

function aboutAnimation() {
  gsap.to(aboutImg, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
  gsap.to(aboutTitle, { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
  gsap.to(aboutSubTitle, { opacity: 0.9, duration: 2, delay: 0.2 });
  gsap.to(aboutDescription, { opacity: 1, y: 0, duration: 1, delay: 0.8 });
  gsap.to(aboutBtn, { opacity: 1, x: 0, duration: 1.5, delay: 1.3 });
}

function writeText(target) {
  new TypeIt(target, {
    speed: 100,
    startDelay: 400,
    strings: ["SEE MORE &#8640;"],
    waitUntilVisible: true,
    cursor: false,
    // lifeLike: true, // 人間のタイピングを模倣
  }).go();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // about section
        if (entry.target.id === "observe-about") {
          aboutAnimation();
          observer.unobserve(entry.target);
        }

        // work section
        if (entry.target.id === "work__inner") {
          writeText(document.querySelector(".p-works-post__link"));
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.2 }
);

if (document.querySelector("#observe-about") !== null) {
  observer.observe(document.querySelector("#observe-about"));
}

if (document.querySelector("#work__inner") !== null) {
  observer.observe(document.querySelector("#work__inner"));
}

// ## work section 横スクロール ## //
const postItems = gsap.utils.toArray(".p-work-post");
const scrollX = gsap.to(postItems, {
  xPercent: -100 * (postItems.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".l-work",
    pin: true,
    start: "center center",
    scrub: 1,
    // markers: true,
    end: "200%",
  },
});
// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });
