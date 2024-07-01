gsap.registerPlugin(ScrollTrigger);

// ## cursor ##
let cursor = document.querySelector(".p-cursor");

function moveCursor(e) {
  // cursor.style.left = e.pageX + "px";
  // cursor.style.top = e.pageY + "px";
  gsap.to(cursor, { left: e.pageX - 3, top: e.pageY - 3, duration: 0.3 });
}

// モバイルの場合、カーソルを非表示にする
function detectMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768
  ) {
    // モバイルやタブレットの場合に実行する関数
    // runMobileFunction();
    cursor.style.display = "none";
  } else {
    // モバイルでない場合に実行
    cursor.style.display = "block";
    window.addEventListener("mousemove", moveCursor);
  }
}
window.addEventListener("resize", detectMobile);
window.addEventListener("load", detectMobile);

let hoverTarget = document.querySelectorAll("a,img,.is-contact-email,.js-strong-border,.js-strength-card");

hoverTarget.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursor.classList.add("is-cursor-hover");
  });
  el.addEventListener("mouseout", () => {
    cursor.classList.remove("is-cursor-hover");
  });
});

if (document.querySelector(".l-work")) {
  const workSection = document.querySelector(".l-work");
  workSection.addEventListener("mouseover", () => {
    cursor.classList.add("is-hide");
    window.removeEventListener("mousemove", moveCursor);
  });
  workSection.addEventListener("mouseout", () => {
    cursor.classList.remove("is-hide");
    window.addEventListener("mousemove", moveCursor);
  });
}

document.addEventListener("mouseleave", () => {
  cursor.classList.add("is-hide");
});

document.addEventListener("mouseenter", () => {
  cursor.classList.remove("is-hide");
});

// ## cursor ##

// ## header ##
gsap.set(".js-header", { y: -100, opacity: 0 });
gsap.to(".js-header", { y: 0, opacity: 1, duration: 1, delay: 0.5 });
const headerLogos = document.querySelectorAll(".js-header-logo span");
console.log(headerLogos);

// scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerLogos.forEach((el) => {
      el.classList.add("is-slide");
    });
  } else {
    headerLogos.forEach((el) => {
      el.classList.remove("is-slide");
    });
  }
});

// ## header ##

// ##smooth scroll ##
jQuery(($) => {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("href");
    const target = $(id === "#" ? "html" : id);
    const position = target.offset().top;

    $("html, body").animate(
      {
        scrollTop: position,
      },
      500,
      "swing"
    );
  });
});
// ##smooth scroll ##

// hover animation //
// ## contact section ##
const contactEmail = document.querySelector(".is-contact-email");
contactEmail.addEventListener("mouseover", () => {
  document.querySelector("#contact").classList.add("contact-email-hover");
});
contactEmail.addEventListener("mouseout", () => {
  document.querySelector("#contact").classList.remove("contact-email-hover");
});
// ## contact section ##

// ## about page - profile section ##
const strongText = document.querySelector(".js-strong-border");
if (strongText) {
  strongText.addEventListener("mouseover", () => {
    document.querySelector(".js-hover-transparent").style.color = "rgba(0, 0, 0, 0.612)";
  });
  strongText.addEventListener("mouseout", () => {
    document.querySelector(".js-hover-transparent").style.color = "rgba(0, 0, 0, 1)";
  });
}
// ## about page - profile section ##
// /hover animation //

// ## drawer menu ##
const drawerBtn = document.querySelector(".js-drawer-btn");
const drawer = document.querySelector(".js-drawer");
drawerBtn.addEventListener("click", function () {
  drawerBtn.classList.toggle("is-open");
  drawer.classList.toggle("is-open");
});

function removeDrawer() {
  drawerBtn.classList.remove("is-open");
  drawer.classList.remove("is-open");
}

if (document.querySelector(".js-close-drawer")) {
  const closedDrawer = document.querySelectorAll(".js-close-drawer");
  closedDrawer.forEach((e) => {
    e.addEventListener("click", removeDrawer);
  });
}

// ## drawer menu ##

// ## about page - scroll&click ##

if (document.querySelector(".js-about-inner")) {
  const noShowElements = document.querySelectorAll(".js-no-show");
  const strengthCards = document.querySelectorAll(".js-strength-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          observer.unobserve(entry.target);
        }
        // else {
        //   entry.target.classList.remove("is-show");
        // }
      });
    },
    { threshold: 0.3 }
  );

  noShowElements.forEach((element) => {
    observer.observe(element);
  });

  strengthCards.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("is-flip");
      e.style.transform = e.classList.contains("is-flip") ? "rotateY(180deg)" : "rotateY(0deg)";
    });
  });
}

// ## about page - scroll&click ##

// ## archive-works page ##

if (document.querySelector(".js-archive")) {
  const reverseTexts = Array.from(document.querySelectorAll(".js-archive-bg path")).reverse();
  const archiveBgTexts = reverseTexts;
  const archiveTitle = document.querySelector(".js-archive-title");
  const archivePosts = document.querySelectorAll(".js-archive-post");

  gsap.set(archiveBgTexts, { y: -300 });
  gsap.set(archiveTitle, { y: -100, opacity: 0 });
  gsap.set(archivePosts, { opacity: 0, y: 30 });
  const archiveTl = gsap.timeline();
  // loading
  window.addEventListener("load", () => {
    setTimeout(() => {
      archiveTl
        .to(archiveBgTexts, { y: 0, duration: 0.03, stagger: 0.1, ease: "power4.out" })
        .to(archiveTitle, { y: 0, opacity: 1, duration: 1, ease: "bounce.out" });
      // scrollTrigger
      archivePosts.forEach((e) => {
        gsap.to(e, {
          delay: 0.1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: e,
            start: "top 98%",
            toggleActions: "play none none none",
            markers: true,
          },
        });
      });
    }, 500);
  });
}
