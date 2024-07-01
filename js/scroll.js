gsap.registerPlugin(ScrollTrigger);

// front-page - about section //
const aboutImg = document.querySelector(".p-about__img");
const aboutTitle = document.querySelector(".p-about__title");
const aboutSmall = document.querySelector(".p-about__bottom small");
const aboutBtn = document.querySelector(".p-about__bottom a");
const aboutSubTitle = document.querySelector(".p-about__sub-title");
const aboutDescription = document.querySelector(".p-about__description");

gsap.set(aboutImg, { opacity: 0, y: 70 });
gsap.set(aboutTitle, { opacity: 0, x: -50 });
gsap.set(aboutSubTitle, { opacity: 0 });
gsap.set(aboutDescription, { opacity: 0, y: 30 });
gsap.set(aboutBtn, { opacity: 0, x: -30 });
gsap.set(aboutSmall, { opacity: 0 });

// 個別の要素に対するアニメーション設定をgsap.toを使用して修正
const animateElement = (selector, animationProps) => {
  gsap.to(selector, {
    ...animationProps,
    scrollTrigger: {
      trigger: selector,
      start: "top 95%", // 要素がビューポートの95%の位置に到達した時
      toggleActions: "play none none none", // 一度だけ再生
      // markers: true,
    },
  });
};

// gsap.setで初期状態の設定を保持し、gsap.toを使用して目標の状態にアニメーション化する
animateElement(aboutImg, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
animateElement(aboutTitle, { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
animateElement(aboutSubTitle, { opacity: 1, duration: 1, ease: "power2.out" });
animateElement(aboutDescription, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "expoScale(0.5,7,none)" });
animateElement(aboutBtn, { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "bounce.out" });
animateElement(aboutSmall, { opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" });

function writeText(target) {
  new TypeIt(target, {
    speed: 100,
    // startDelay: 200,
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
        // work section
        if (entry.target.id === "work__inner") {
          writeText(document.querySelector(".p-works-post__link"));
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.9 }
);

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
