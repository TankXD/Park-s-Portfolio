// ## gsap ## //

// ページの読み込みが完了した場合にイベントを実行する
let tl = gsap.timeline();

// gsap 初期設定
gsap.set(".js-gsap-fv-title span", { y: 150, opacity: 0 });
gsap.set(".js-gsap-fv", { y: 100, opacity: 0 });
gsap.set(".js-gsap-fv-arrow", { opacity: 0 });

window.addEventListener("load", () => {
  // #loadingのアニメーションが終わったら実行
  setTimeout(() => {
    //.js-gsap-fv-title, .js-gsap-fv-description 要素へ gsap を適用
    gsap.to(
      ".js-gsap-fv-title span",

      { y: 0, opacity: 1, duration: 1.3, stagger: 0.1 }
    );

    setTimeout(() => {
      tl.to(
        ".js-gsap-fv",

        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.3 }
      ).to(".js-gsap-fv-arrow", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "linear" });
    }, 1000);
  }, 500);
});
