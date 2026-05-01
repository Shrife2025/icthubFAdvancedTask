let Cards = document.querySelector(".cards");
let Top = document.querySelector(".top");
const cards = [
  {
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Cloud Sync",
    description:
      "Real-time synchronization across all your devices. Work from anywhere.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Security First",
    description: "Enterprise-grade encryption, 2FA, and automated backups.",
  },
  {
    icon: "fa-solid fa-bolt-lightning",
    title: "Lightning Fast",
    description:
      "Optimized edge network for sub-second response times globally.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Analytics",
    description: "Deep insights with customizable dashboards and reports.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Team Collaboration",
    description:
      "Invite team members, share workspaces, and comment in real time.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description: "Priority support with an average response time of 2 minutes.",
  },
];
const testimonials = [
  {
    icon: "fa-solid fa-quote-left",
    text: `"Nexify transformed our workflow. The grid system is so clean and the icons make everything pop. Highly recommended!"`,
    userIcon: "fa-solid fa-circle-user",
    name: "Sarah Chen",
    role: "Product Manager",
  },
  {
    icon: "fa-solid fa-quote-left",
    text: `"The simplicity is brilliant. No position tricks, just pure grid and beautiful Font Awesome icons. Our team loves it."`,
    userIcon: "fa-solid fa-circle-user",
    name: "Marcus Rivera",
    role: "Lead Developer",
  },
  {
    icon: "fa-solid fa-quote-left",
    text: `"Best landing page experience I've built. The card grid auto auto auto works perfectly on every device."`,
    userIcon: "fa-solid fa-circle-user",
    name: "Olivia Kim",
    role: "Startup Founder",
  },
];
for (const testimonial of testimonials) {
  Top.insertAdjacentHTML(
    "beforeend",
    `
    
        <article>
          <i class="${testimonial.icon}"></i>
          <p>
            "${testimonial.text}"
          </p>
          <main>
            <i class="${testimonial.userIcon}"></i>
            <div>
              <h4>${testimonial.name}</h4>
              <span>${testimonial.role}</span>
            </div>
          </main>
        </article>
    `,
  );
}
for (const card of cards) {
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
  `,
  );
}
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
