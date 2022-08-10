const revealElements = document.querySelectorAll(".section-title");
const fadeElements = document.querySelectorAll(".section-desc");

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.add("scroll-up");
    body.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
});

scrollAnim = () => {
  let windowHt = window.innerHeight;
  revealElements.forEach((elements) => {
    let elementPos = elements.getBoundingClientRect().top;

    if (elementPos < windowHt / 1.3) {
      elements.classList.add("revealed");
    }
  });

  fadeElements.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos < windowHt / 1.3) {
      element.classList.add("faded-in");
    }
  });
};

document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener("scroll", scrollAnim);
