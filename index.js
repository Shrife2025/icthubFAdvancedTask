let Cards = document.querySelector(".cards");
let Top = document.querySelector(".top");

async function fetchData() {
  try {
    const res = await fetch(
      "https://sphinx-public-api.vercel.app/get-data"
    );

    const data = await res.json();

    for (const testimonial of data.testimonials) {
      Top.insertAdjacentHTML(
        "beforeend",
        `
          <article>
            <i class="${testimonial.icon}"></i>

            <p>
              ${testimonial.text}
            </p>

            <main>
              <i class="${testimonial.userIcon}"></i>

              <div>
                <h4>${testimonial.name}</h4>
                <span>${testimonial.role}</span>
              </div>
            </main>
          </article>
        `
      );
    }

    for (const card of data.cards) {
      Cards.insertAdjacentHTML(
        "beforeend",
        `
          <article class="card">
            <div class="icon-wrapper">
              <i class="${card.icon}"></i>
            </div>

            <h3>${card.title}</h3>

            <p>${card.description}</p>
          </article>
        `
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
let nav = document.querySelector("nav");
let menu = document.querySelector("#menu");

const displayMenu = () => {
  if (window.innerWidth < 720) {
    menu.style.display = "block";
    nav.style.display = "none";
  } else {
    menu.style.display = "none";
    nav.style.display = "flex";
  }
};

menu.onclick = () => {
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};
window.addEventListener("resize", displayMenu);

let scroll = document.getElementById("scroll");

function handleScroll() {
  if (window.scrollY > 550) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

handleScroll();
let themeToggle = document.getElementById("themeToggle");
let style = document.getElementById("style");

themeToggle.addEventListener("click", () => {

  if (themeToggle.classList.contains("fa-sun")) {

    themeToggle.classList.replace("fa-sun", "fa-moon");
    style.href = "/light.css";

  } else {

    themeToggle.classList.replace("fa-moon", "fa-sun");
    style.href = "/dark.css";

  }

});

let counteredWord = document.getElementById("counteredWord");

let word = "Build faster.";
let i = 0;

let typing = setInterval(() => {
  counteredWord.innerText += word[i];
  i++;

  if (i === word.length) {
    clearInterval(typing);
  }
}, 100);
